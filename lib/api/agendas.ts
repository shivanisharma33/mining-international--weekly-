/**
 * Strapi Agenda API client and filtering utilities for International Mining Week.
 *
 * All agenda queries must be filtered so only `publishTo === "International Mining Week"`
 * records are processed and displayed.
 *
 * Uses the shared `filterByPublishTo` and `fetchAllStrapiPages` utilities to ensure
 * architectural consistency across all conference websites (Noble, IMW, MIE).
 */

import {
  IMW_PUBLISH_TO,
  filterByPublishTo,
  fetchAllStrapiPages,
  strapiGet,
} from "./client";

export const AGENDAS_ENDPOINT = "/api/agendas";

export const IMW_AGENDA_PUBLISH_TO = IMW_PUBLISH_TO;

const isDev = process.env.NODE_ENV !== "production";

/** Media asset representation from Strapi v5 */
export interface StrapiMediaFile {
  id: number;
  documentId?: string;
  name: string;
  url: string;
  mime?: string;
  size?: number;
  ext?: string;
}

/** Agenda item schema from Strapi `/api/agendas` */
export interface StrapiAgenda {
  id: number;
  documentId: string;
  title: string;
  eventDate?: string | null;
  venue?: string | null;
  city?: string | null;
  country?: string | null;
  publishTo: string;
  pdfFile?: StrapiMediaFile | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/** User-selectable filter criteria */
export interface AgendaFilterOptions {
  search?: string;
  year?: string;
  city?: string;
}

/**
 * Fetches all agendas from Strapi, applying server-side filter and client-side isolation safety filter.
 */
export async function fetchAgendas(
  publishTo: string = IMW_AGENDA_PUBLISH_TO
): Promise<StrapiAgenda[]> {
  const baseParams: Record<string, string> = {
    "filters[publishTo][$eq]": publishTo,
    populate: "*",
  };

  try {
    const allAgendas = await fetchAllStrapiPages<StrapiAgenda>(
      AGENDAS_ENDPOINT,
      baseParams,
      25
    );

    // Client-side isolation safety filter
    const isolated = filterByPublishTo(allAgendas, publishTo);

    if (isDev) {
      console.log(
        `[agendas] ${isolated.length} agendas loaded for "${publishTo}" (${allAgendas.length} total fetched)`
      );
    }

    return isolated;
  } catch (err) {
    if (isDev) {
      console.warn(`[agendas] fetchAllStrapiPages failed, falling back to direct GET:`, err);
    }
    // Fallback direct request
    const fallbackRes = await strapiGet<StrapiAgenda>(
      `${AGENDAS_ENDPOINT}?populate=*&filters[publishTo][$eq]=${encodeURIComponent(publishTo)}`
    );
    return filterByPublishTo(fallbackRes.data || [], publishTo);
  }
}

/**
 * Extracts distinct years available strictly from the isolated agendas.
 */
export function getDistinctAgendaYears(agendas: StrapiAgenda[]): string[] {
  const years = new Set<string>();
  for (const agenda of agendas) {
    const text = `${agenda.title || ""} ${agenda.eventDate || ""}`;
    const matches = text.match(/\b(20\d\d)\b/g);
    if (matches) {
      matches.forEach((y) => years.add(y));
    }
  }
  return Array.from(years).sort().reverse();
}

/**
 * Extracts distinct cities available strictly from the isolated agendas.
 */
export function getDistinctAgendaCities(agendas: StrapiAgenda[]): string[] {
  const cities = new Set<string>();
  for (const agenda of agendas) {
    if (agenda.city && agenda.city.trim()) {
      cities.add(agenda.city.trim());
    }
  }
  return Array.from(cities).sort();
}

/**
 * Applies user-selected filters against the already isolated agenda dataset.
 */
export function applyAgendaFilters(
  agendas: StrapiAgenda[],
  filters: AgendaFilterOptions
): StrapiAgenda[] {
  return agendas.filter((agenda) => {
    // Search query matching title, eventDate, venue, city, or country
    if (filters.search && filters.search.trim()) {
      const term = filters.search.toLowerCase().trim();
      const matchTitle = agenda.title?.toLowerCase().includes(term);
      const matchDate = agenda.eventDate?.toLowerCase().includes(term);
      const matchVenue = agenda.venue?.toLowerCase().includes(term);
      const matchCity = agenda.city?.toLowerCase().includes(term);
      const matchCountry = agenda.country?.toLowerCase().includes(term);
      if (!matchTitle && !matchDate && !matchVenue && !matchCity && !matchCountry) {
        return false;
      }
    }

    // Year filter matching title or eventDate
    if (filters.year && filters.year !== "all") {
      const targetYear = filters.year;
      const matchTitle = agenda.title?.includes(targetYear);
      const matchDate = agenda.eventDate?.includes(targetYear);
      if (!matchTitle && !matchDate) {
        return false;
      }
    }

    // City filter matching city
    if (filters.city && filters.city !== "all") {
      if (!agenda.city || agenda.city.toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }
    }

    return true;
  });
}
