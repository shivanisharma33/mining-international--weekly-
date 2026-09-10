"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  fetchParticipatingCompanies,
  applyCompanyFilters,
  getDistinctCompanyTypes,
  getDistinctCompanyLocations,
  IMW_COMPANY_PUBLISH_TO,
  type ParticipatingCompany,
  type CompanyFilterOptions,
} from "@/lib/api/companies";
import { filterByPublishTo } from "@/lib/api/client";

export default function CompaniesView() {
  const [companies, setCompanies] = useState<ParticipatingCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const loadCompanies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchParticipatingCompanies(IMW_COMPANY_PUBLISH_TO);
      // Client-side safety guarantee: strictly International Mining Week
      setCompanies(filterByPublishTo(data, IMW_COMPANY_PUBLISH_TO));
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[CompaniesView] Failed to fetch companies:", err);
      }
      setError("Unable to load participating companies at this time. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  // Fixed IMW dataset
  const imwCompanies = filterByPublishTo(companies, IMW_COMPANY_PUBLISH_TO);

  // Distinct filter options
  const availableTypes = getDistinctCompanyTypes(imwCompanies);
  const availableLocations = getDistinctCompanyLocations(imwCompanies);

  // Apply user-selected filters
  const filterOptions: CompanyFilterOptions = {
    search: searchQuery,
    type: selectedType,
    location: selectedLocation,
  };
  const filteredCompanies = applyCompanyFilters(imwCompanies, filterOptions);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedLocation("all");
  };

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    selectedType !== "all" ||
    selectedLocation !== "all";

  const showEmpty = !loading && filteredCompanies.length === 0;

  return (
    <div className="pview on" id="pv-companies">
      {/* HERO */}
      <section className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center bg-[#070c16] pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-95"
            style={{ backgroundImage: "url('/imw_hero.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#0d1726]/90 to-transparent max-w-[70%]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#03516E]/20 to-transparent"></div>
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#03516E]/30 blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full text-left">
          <div className="max-w-3xl">
            <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
              PARTICIPATING ORGANIZATIONS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Participating <br />
              <span>Companies</span>
            </h1>
            <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
            <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed mb-8">
              Explore the mining companies, producers, developers and strategic organizations participating in International Mining{"\u00a0"}Week.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS & CONTENT */}
      <section className="w-full pt-10 sm:pt-14 pb-0 sm:pb-0 bg-[#fcfdfe]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm mb-8">
            <div className="relative flex-grow max-w-md">
              <input
                type="search"
                placeholder="Search companies, tickers, commodities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:border-[#005B82] transition-colors"
                aria-label="Search participating companies"
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M20 20l-4-4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {availableTypes.length > 0 && (
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm bg-white text-neutral-700 focus:outline-none focus:border-[#005B82]"
                >
                  <option value="all">All Types</option>
                  {availableTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              )}

              {availableLocations.length > 0 && (
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm bg-white text-neutral-700 focus:outline-none focus:border-[#005B82]"
                >
                  <option value="all">All Locations</option>
                  {availableLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              )}

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#005B82] hover:bg-sky-50 border border-sky-200 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-20 text-center">
              <div className="inline-block w-8 h-8 border-4 border-[#005B82] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-semibold text-neutral-600">Loading International Mining Week companies...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="my-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm text-center">
              {error}
            </div>
          )}

          {/* Company Cards Grid */}
          {!loading && filteredCompanies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCompanies.map((company) => {
                const logoUrl = company.logo?.formats?.thumbnail?.url || company.logo?.url;

                return (
                  <div
                    key={company.documentId || company.id}
                    className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:border-[#005B82]/50 group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-slate-50 border border-neutral-100 flex items-center justify-center p-2 mb-4 overflow-hidden">
                      {logoUrl ? (
                        <img
                          src={logoUrl}
                          alt={`${company.companyName} logo`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor" className="w-8 h-8 text-[#005B82]/60">
                          <path d="M4 21h16M6 21V8l4-3v16M14 21V10h4v11M9.5 9h.01M9.5 12h.01M9.5 15h.01" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-base font-extrabold text-neutral-900 group-hover:text-[#005B82] transition-colors mb-1">
                      {company.companyName}
                    </h3>

                    {company.ticker && (
                      <span className="text-xs font-bold text-[#005B82] tracking-wider mb-2">
                        {company.ticker}
                      </span>
                    )}

                    {(company.type || company.location) && (
                      <span className="text-xs text-neutral-500 mb-2">
                        {[company.type, company.location].filter(Boolean).join(" • ")}
                      </span>
                    )}

                    {company.commodities && company.commodities.length > 0 && (
                      <div className="flex flex-wrap gap-1 justify-center mt-2 mb-3">
                        {company.commodities.map((c, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}

                    {company.website && (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[#005B82] hover:underline pt-3"
                      >
                        <span>Visit Website</span>
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Clean Empty State */}
          {showEmpty && (
            <div className="py-20 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-[#005B82]">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8">
                  <path d="M4 21h16M6 21V8l4-3v16M14 21V10h4v11M9.5 9h.01M9.5 12h.01M9.5 15h.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-1">No participating companies available</h3>
              <p className="text-xs text-neutral-500 mb-6">
                Participating companies for International Mining Week will be announced soon.
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-[#005B82] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#004766] transition-all"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-16 bg-slate-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-sky-400 text-xs font-extrabold tracking-widest uppercase block mb-2">
              GET INVOLVED
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Interested in Participating or Showcasing?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mining companies and industry partners are invited to participate in 1-on-1 executive meetings, corporate showcases and plenary sessions.
            </p>
          </div>
          <Link
            href="/register"
            className="px-8 py-4 rounded-xl bg-[#005B82] hover:bg-[#007baf] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shrink-0"
          >
            REGISTER HERE →
          </Link>
        </div>
      </section>
    </div>
  );
}
