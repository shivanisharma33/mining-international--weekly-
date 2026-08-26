/**
 * Strapi Participating Companies API client and filtering utilities.
 *
 * All company queries must be filtered so only `publishTo === "International Mining Week"`
 * records are processed and displayed.
 *
 * Uses the shared `filterByPublishTo` and `fetchAllStrapiPages` utilities to ensure
 * architectural consistency across all conference websites.
 */

import {
  IMW_PUBLISH_TO,
  filterByPublishTo,
  fetchAllStrapiPages,
  strapiGet,
} from "./client";

export const COMPANIES_ENDPOINT = "/api/participating-companies";

export const IMW_COMPANY_PUBLISH_TO = IMW_PUBLISH_TO;

const isDev = process.env.NODE_ENV !== "production";

/** Media asset representation from Strapi v5 */
export interface StrapiCompanyLogo {
  id: number;
  documentId?: string;
  name: string;
  url: string;
  mime?: string;
  width?: number | null;
  height?: number | null;
  formats?: {
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
  } | null;
}

/** Participating Company schema from Strapi `/api/participating-companies` */
export interface ParticipatingCompany {
  id: number;
  documentId: string;
  companyName: string;
  ticker: string | null;
  type: string | null;
  location: string | null;
  commodities: string[] | null;
  industry: string | null;
  website: string | null;
  publishTo: string | null;
  logo: StrapiCompanyLogo | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/** User-selectable filter criteria for companies */
export interface CompanyFilterOptions {
  search?: string;
  type?: string;
  location?: string;
}

/**
 * Fetches all participating companies for the target website from Strapi,
 * handling pagination across all pages dynamically and applying the website source filter.
 */
export async function fetchParticipatingCompanies(
  publishTo: string = IMW_COMPANY_PUBLISH_TO
): Promise<ParticipatingCompany[]> {
  const baseParams: Record<string, string> = {
    "filters[publishTo][$eq]": publishTo,
    populate: "*",
  };

  try {
    const allCompanies = await fetchAllStrapiPages<ParticipatingCompany>(
      COMPANIES_ENDPOINT,
      baseParams,
      25
    );

    // Client-side isolation safety filter
    const isolatedCompanies = filterByPublishTo(allCompanies, publishTo);

    if (isDev) {
      console.log(
        `[companies] ${isolatedCompanies.length} companies loaded for "${publishTo}" (${allCompanies.length} total fetched)`
      );
    }

    return isolatedCompanies;
  } catch (err) {
    if (isDev) {
      console.warn(`[companies] fetchAllStrapiPages failed, falling back to direct GET:`, err);
    }
    const fallbackRes = await strapiGet<ParticipatingCompany>(
      `${COMPANIES_ENDPOINT}?populate=*&filters[publishTo][$eq]=${encodeURIComponent(publishTo)}`
    );
    return filterByPublishTo(fallbackRes.data || [], publishTo);
  }
}

/**
 * Extracts distinct company types strictly from the isolated companies.
 */
export function getDistinctCompanyTypes(companies: ParticipatingCompany[]): string[] {
  const types = new Set<string>();
  for (const company of companies) {
    if (company.type && company.type.trim()) {
      types.add(company.type.trim());
    }
  }
  return Array.from(types).sort();
}

/**
 * Extracts distinct locations strictly from the isolated companies.
 */
export function getDistinctCompanyLocations(companies: ParticipatingCompany[]): string[] {
  const locations = new Set<string>();
  for (const company of companies) {
    if (company.location && company.location.trim()) {
      locations.add(company.location.trim());
    }
  }
  return Array.from(locations).sort();
}

/**
 * Applies user-selected filters against the already isolated company dataset.
 */
export function applyCompanyFilters(
  companies: ParticipatingCompany[],
  filters: CompanyFilterOptions
): ParticipatingCompany[] {
  return companies.filter((company) => {
    // Search query matching companyName, ticker, type, location, commodities, industry
    if (filters.search && filters.search.trim()) {
      const term = filters.search.toLowerCase().trim();
      const matchName = company.companyName?.toLowerCase().includes(term);
      const matchTicker = company.ticker?.toLowerCase().includes(term);
      const matchType = company.type?.toLowerCase().includes(term);
      const matchLocation = company.location?.toLowerCase().includes(term);
      const matchCommodities = company.commodities?.some((c) =>
        c.toLowerCase().includes(term)
      );
      const matchIndustry = company.industry?.toLowerCase().includes(term);
      if (
        !matchName &&
        !matchTicker &&
        !matchType &&
        !matchLocation &&
        !matchCommodities &&
        !matchIndustry
      ) {
        return false;
      }
    }

    // Type filter
    if (filters.type && filters.type !== "all") {
      if (
        !company.type ||
        company.type.toLowerCase() !== filters.type.toLowerCase()
      ) {
        return false;
      }
    }

    // Location filter
    if (filters.location && filters.location !== "all") {
      if (
        !company.location ||
        company.location.toLowerCase() !== filters.location.toLowerCase()
      ) {
        return false;
      }
    }

    return true;
  });
}
