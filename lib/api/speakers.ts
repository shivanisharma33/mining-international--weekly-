/**
 * Strapi Speakers API client and filtering utilities for International Mining Week.
 *
 * All speaker queries must be filtered so only `publishTo === "International Mining Week"`
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
import type { StrapiCompanyLogo } from "./companies";

export const SPEAKERS_ENDPOINT = "/api/speakers";

export const IMW_SPEAKER_PUBLISH_TO = IMW_PUBLISH_TO;

const isDev = process.env.NODE_ENV !== "production";

/** Speaker schema from Strapi `/api/speakers` */
export interface StrapiSpeaker {
  id: number;
  documentId: string;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  title?: string | null;
  position?: string | null;
  company?: string | null;
  organization?: string | null;
  bio?: string | null;
  image?: StrapiCompanyLogo | null;
  photo?: StrapiCompanyLogo | null;
  profileImage?: StrapiCompanyLogo | null;
  avatar?: StrapiCompanyLogo | null;
  publishTo?: string | null;
  website?: string | null;
  linkedin?: string | null;
  category?: string | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/** User-selectable filter criteria for speakers */
export interface SpeakerFilterOptions {
  search?: string;
  category?: string;
  company?: string;
}

/**
 * Resolves the full display name of a speaker.
 */
export function getSpeakerName(speaker: StrapiSpeaker): string {
  if (speaker.name && speaker.name.trim()) return speaker.name.trim();
  const parts = [speaker.firstName, speaker.lastName].filter(Boolean);
  if (parts.length > 0) return parts.join(" ").trim();
  return "Featured Speaker";
}

/**
 * Resolves the title / designation of a speaker.
 */
export function getSpeakerTitle(speaker: StrapiSpeaker): string {
  return (speaker.title || speaker.position || "").trim();
}

/**
 * Resolves the company / organization of a speaker.
 */
export function getSpeakerCompany(speaker: StrapiSpeaker): string {
  return (speaker.company || speaker.organization || "").trim();
}

/**
 * Resolves the image URL of a speaker.
 */
export function getSpeakerImage(speaker: StrapiSpeaker): string | null {
  const media = speaker.image || speaker.photo || speaker.profileImage || speaker.avatar;
  if (!media) return null;
  return media.formats?.thumbnail?.url || media.url || null;
}

/**
 * Fetches all speakers for the target website from Strapi, handling pagination
 * dynamically and applying the website source filter.
 */
export async function fetchSpeakers(
  publishTo: string = IMW_SPEAKER_PUBLISH_TO
): Promise<StrapiSpeaker[]> {
  const baseParams: Record<string, string> = {
    "filters[publishTo][$eq]": publishTo,
    populate: "*",
  };

  try {
    const allSpeakers = await fetchAllStrapiPages<StrapiSpeaker>(
      SPEAKERS_ENDPOINT,
      baseParams,
      25
    );

    // Apply the shared reusable filter for safety
    const isolatedSpeakers = filterByPublishTo(allSpeakers, publishTo);

    if (isDev) {
      console.log(
        `[speakers] ${isolatedSpeakers.length} speakers loaded for "${publishTo}" (${allSpeakers.length} total fetched)`
      );
    }

    return isolatedSpeakers;
  } catch (err) {
    if (isDev) {
      console.warn(`[speakers] fetchAllStrapiPages failed, falling back to direct GET:`, err);
    }
    const fallbackRes = await strapiGet<StrapiSpeaker>(
      `${SPEAKERS_ENDPOINT}?populate=*&filters[publishTo][$eq]=${encodeURIComponent(publishTo)}`
    );
    return filterByPublishTo(fallbackRes.data || [], publishTo);
  }
}

/**
 * Extracts distinct speaker categories strictly from isolated speakers.
 */
export function getDistinctSpeakerCategories(speakers: StrapiSpeaker[]): string[] {
  const categories = new Set<string>();
  for (const speaker of speakers) {
    if (speaker.category && speaker.category.trim()) {
      categories.add(speaker.category.trim());
    }
  }
  return Array.from(categories).sort();
}

/**
 * Extracts distinct companies strictly from isolated speakers.
 */
export function getDistinctSpeakerCompanies(speakers: StrapiSpeaker[]): string[] {
  const companies = new Set<string>();
  for (const speaker of speakers) {
    const comp = getSpeakerCompany(speaker);
    if (comp) {
      companies.add(comp);
    }
  }
  return Array.from(companies).sort();
}

/**
 * Applies user-selected search and filters against the isolated speaker dataset.
 */
export function applySpeakerFilters(
  speakers: StrapiSpeaker[],
  filters: SpeakerFilterOptions
): StrapiSpeaker[] {
  return speakers.filter((speaker) => {
    const name = getSpeakerName(speaker).toLowerCase();
    const title = getSpeakerTitle(speaker).toLowerCase();
    const company = getSpeakerCompany(speaker).toLowerCase();
    const bio = (speaker.bio || "").toLowerCase();
    const category = (speaker.category || "").toLowerCase();

    // Search query
    if (filters.search && filters.search.trim()) {
      const term = filters.search.toLowerCase().trim();
      const matchName = name.includes(term);
      const matchTitle = title.includes(term);
      const matchCompany = company.includes(term);
      const matchBio = bio.includes(term);
      const matchCategory = category.includes(term);
      if (!matchName && !matchTitle && !matchCompany && !matchBio && !matchCategory) {
        return false;
      }
    }

    // Category filter
    if (filters.category && filters.category !== "all") {
      if (category !== filters.category.toLowerCase()) {
        return false;
      }
    }

    // Company filter
    if (filters.company && filters.company !== "all") {
      if (company !== filters.company.toLowerCase()) {
        return false;
      }
    }

    return true;
  });
}
