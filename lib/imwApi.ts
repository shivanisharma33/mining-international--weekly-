/**
 * International Mining Week — Strapi registration API.
 *
 * Only registration data is sent from the browser. Mailchimp / Resend
 * automation is handled entirely by the Strapi backend, so no third-party
 * credentials belong in this file.
 */

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://typical-butterfly-3f86e59200.strapiapp.com";

/** Endpoint spellings are intentional — they match the deployed Strapi content types. */
const COMPANY_ENDPOINT = "/api/imw-comapny-registerations";
const INVESTOR_ENDPOINT = "/api/imw-investor-registerations";

/** Shared Strapi instance — identifies which site the registration came from. */
export const SOURCE_WEBSITE = "International Mining Week";

const GENERIC_ERROR = "Unable to submit your registration. Please try again.";

/* ------------------------------------------------------------------ */
/* Form shapes (mirror the state objects in app/register/page.tsx)     */
/* ------------------------------------------------------------------ */

export type CompanyRegistrationForm = {
  companyName: string;
  tickerSymbol: string;
  firstName: string;
  lastName: string;
  executiveTitle: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  assetStage: string;
  showcaseInterest: string;
  description: string;
  subscribeNews: boolean;
};

export type InvestorRegistrationForm = {
  companyName: string;
  firstName: string;
  lastName: string;
  businessTitle: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  aum: string;
  investorType: string;
  bio: string;
  subscribeNews: boolean;
};

/* ------------------------------------------------------------------ */
/* Enumeration mappings (frontend value -> Strapi enumeration value)   */
/* ------------------------------------------------------------------ */

/**
 * Strapi enumeration values cannot begin with a digit, so the visible
 * "1-on-1 Executive Meetings" option is stored as "One-on-One Executive Meetings".
 * The other options are stored verbatim.
 */
const SHOWCASE_INTEREST_MAP: Record<string, string> = {
  "1-on-1 Executive Meetings": "One-on-One Executive Meetings",
  "Corporate Presentation": "Corporate Presentation",
  "Keynote Panel": "Keynote Panel",
  "Delegate Showcase": "Delegate Showcase",
};

const PRIMARY_ASSET_STAGE_MAP: Record<string, string> = {
  "Exploration & Discovery": "Exploration & Discovery",
  "Development & Feasibility": "Development & Feasibility",
  "Producer / Operational": "Producer / Operational",
  "Royalty & Streaming": "Royalty & Streaming",
  "Energy Transition / Critical Minerals": "Energy Transition / Critical Minerals",
};

/** The AUM <option> values are short codes; Strapi stores the long-form ranges. */
const AUM_MAP: Record<string, string> = {
  "Under $10M": "Under $10 Million",
  "$10M - $50M": "Between $10 Million and $50 Million",
  "$50M - $250M": "Between $50 Million and $250 Million",
  "$250M - $1B": "Between $250 Million and $1 Billion",
  "Over $1B": "Over $1 Billion",
  "HNWI / Personal": "HNWI / Personal Accredited Investor",
};

const INVESTOR_TYPE_MAP: Record<string, string> = {
  "Institutional Investor": "Institutional Investor",
  "Family Office": "Family Office",
  "High Net Worth Individual (HNWI)": "High Net Worth Individual (HNWI)",
  "Fund / Portfolio Manager": "Fund / Portfolio Manager",
  "Sovereign Wealth Fund": "Sovereign Wealth Fund",
  "Mining Analyst / Investment Banker": "Mining Analyst / Investment Banker",
  "Retail / Accredited Investor": "Retail / Accredited Investor",
};

/**
 * Resolve a select value against its enumeration map. Returns `undefined` for
 * the empty placeholder option so the key is dropped from the payload rather
 * than failing Strapi's enumeration validation.
 */
function mapEnum(map: Record<string, string>, value: string): string | undefined {
  return map[value.trim()];
}

const text = (value: string) => value.trim();

/** Drop keys whose value is undefined or an empty string. */
function compact(payload: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== ""),
  );
}

/* ------------------------------------------------------------------ */
/* Payload builders                                                    */
/* ------------------------------------------------------------------ */

export function buildCompanyPayload(form: CompanyRegistrationForm): Record<string, unknown> {
  return compact({
    companyName: text(form.companyName),
    tickerSymbolExchange: text(form.tickerSymbol),
    firstName: text(form.firstName),
    lastName: text(form.lastName),
    executiveTitle: text(form.executiveTitle),
    city: text(form.city),
    country: text(form.country),
    email: text(form.email),
    phone: text(form.phone),
    primaryAssetStageFocus: mapEnum(PRIMARY_ASSET_STAGE_MAP, form.assetStage),
    showcaseInterest: mapEnum(SHOWCASE_INTEREST_MAP, form.showcaseInterest),
    companyProjectDescription: text(form.description),
    newsletterOptIn: Boolean(form.subscribeNews),
    sourceWebsite: SOURCE_WEBSITE,
  });
}

export function buildInvestorPayload(form: InvestorRegistrationForm): Record<string, unknown> {
  return compact({
    companyName: text(form.companyName),
    firstName: text(form.firstName),
    lastName: text(form.lastName),
    businessTitle: text(form.businessTitle),
    city: text(form.city),
    country: text(form.country),
    email: text(form.email),
    phone: text(form.phone),
    assetsUnderManagement: mapEnum(AUM_MAP, form.aum),
    investorType: mapEnum(INVESTOR_TYPE_MAP, form.investorType),
    investmentFocus: text(form.bio),
    newsletterOptIn: Boolean(form.subscribeNews),
    sourceWebsite: SOURCE_WEBSITE,
  });
}

/* ------------------------------------------------------------------ */
/* Transport                                                           */
/* ------------------------------------------------------------------ */

/**
 * Strapi rejects the whole request with `Invalid key <field>` when a content
 * type has no such attribute. `sourceWebsite` is not yet present on the two IMW
 * content types, so a rejection on that key alone is retried without it — the
 * value starts persisting automatically once the backend adds the field.
 */
function isUnknownSourceWebsiteError(body: unknown): boolean {
  const error = (body as { error?: { message?: string; details?: { key?: string } } })?.error;
  return error?.details?.key === "sourceWebsite" || error?.message === "Invalid key sourceWebsite";
}

async function postToStrapi(
  endpoint: string,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const send = async (payload: Record<string, unknown>) => {
    const response = await fetch(`${STRAPI_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: payload }),
    });
    let body: unknown = null;
    try {
      body = await response.json();
    } catch {
      body = null;
    }
    return { response, body };
  };

  let { response, body } = await send(data);

  if (!response.ok && isUnknownSourceWebsiteError(body)) {
    const { sourceWebsite: _omitted, ...withoutSource } = data;
    void _omitted;
    ({ response, body } = await send(withoutSource));
  }

  if (!response.ok) {
    // Raw Strapi errors stay in the console; callers only ever surface GENERIC_ERROR.
    console.error(`IMW registration failed (${endpoint})`, response.status, body);
    throw new Error(GENERIC_ERROR);
  }

  return (body as { data?: Record<string, unknown> })?.data ?? {};
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

export async function submitIMWCompanyRegistration(form: CompanyRegistrationForm) {
  return postToStrapi(COMPANY_ENDPOINT, buildCompanyPayload(form));
}

export async function submitIMWInvestorRegistration(form: InvestorRegistrationForm) {
  return postToStrapi(INVESTOR_ENDPOINT, buildInvestorPayload(form));
}

export { GENERIC_ERROR as IMW_SUBMIT_ERROR_MESSAGE };
