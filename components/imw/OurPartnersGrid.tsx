"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  fetchParticipatingCompanies,
  IMW_COMPANY_PUBLISH_TO,
  type ParticipatingCompany,
} from "@/lib/api/companies";
import { filterByPublishTo } from "@/lib/api/client";

export default function OurPartnersGrid() {
  const [companies, setCompanies] = useState<ParticipatingCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const diamondSponsorsList = [
    { name: "Mercury Group", src: "/assets/images/mg.webp" },
    { name: "The Prospector News", src: "/assets/images/pro.png" },
    { name: "QSL", src: "/assets/images/qsl-logo-transparent.png" },
    { name: "Investissement Québec", src: "/assets/images/investissement-quebec-transparent.png" },
    { name: "McMillan", src: "/assets/images/mcm.png" },
    { name: "Air Borealis", src: "/assets/images/air-borealis-transparent.png" },
    { name: "Apaton Finance", src: "/assets/images/apaton-finance-logo.svg" },
    { name: "Canadian North", src: "/assets/images/Canadian-North-logo-main-rgb-1024x319.png" },
    { name: "Cassels", src: "/assets/images/Cassels-logo-dark.svg" },
    { name: "Government of Canada", src: "/assets/images/government-brand-22.02.svg" },
    { name: "Marsh", src: "/assets/images/marsh-logo-transparent.png" },
    { name: "Crux Investor", src: "/assets/images/642e8adf6f6728bf086ca90e_logo.svg" },
  ];
  

  const loadCompanies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchParticipatingCompanies(IMW_COMPANY_PUBLISH_TO);
      // Client-side isolation safety filter
      setCompanies(filterByPublishTo(data, IMW_COMPANY_PUBLISH_TO));
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[OurPartnersGrid] Failed to fetch IMW companies:", err);
      }
      setError("Unable to load participating companies.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  const imwCompanies = filterByPublishTo(companies, IMW_COMPANY_PUBLISH_TO);

  return (
    <section className="w-full bg-[#fcfdfe] py-10 sm:py-14 md:py-16 border-b border-neutral-200/60 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3 text-center">
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
            <h2 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              OUR PARTNERS
            </h2>
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          </div>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.
          </p>
        </div>

        {/* TIER 1: FOUNDING PARTNERS */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8 text-center">
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
            <h3 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              FOUNDING PARTNERS
            </h3>
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
            <a href="https://amq-inc.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 h-28 sm:h-32 w-[240px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm transition-transform hover:scale-105">
              <Image src="/founding_amq.png" alt="Association minière du Québec" width={220} height={80} className="max-h-[75px] max-w-[200px] w-auto object-contain" />
            </a>

            <div className="hidden sm:block h-20 w-[1px] bg-neutral-200"></div>

            <a href="https://itfa.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 h-28 sm:h-32 w-[240px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm transition-transform hover:scale-105">
              <Image src="/founding_itfa.png" alt="ITFA Logo" width={220} height={80} className="max-h-[75px] max-w-[200px] w-auto object-contain" />
            </a>

            <div className="hidden sm:block h-20 w-[1px] bg-neutral-200"></div>

            <a href="https://mining-investment-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 h-28 sm:h-32 w-[240px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm transition-transform hover:scale-105">
              <Image src="/founding_the_event.png" alt="THE Mining Investment Event" width={220} height={80} className="max-h-[75px] max-w-[200px] w-auto object-contain" />
            </a>
          </div>
        </div>

        {/* TIER 2: DIAMOND SPONSORS */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 my-10 text-center">
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
            <h3 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              DIAMOND SPONSORS
            </h3>
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          </div>

          {/* Auto-scrolling Slider */}
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fcfdfe] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fcfdfe] to-transparent z-10 pointer-events-none"></div>

            <div className="sponsor-slider-track items-center">
              {/* First set */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div key={`a-${idx}`} className="shrink-0 w-32 sm:w-36 h-16 flex items-center justify-center px-2 transition-transform hover:scale-105">
                  <img src={sponsor.src} alt={sponsor.name} className="max-h-10 max-w-[90%] w-auto object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div key={`b-${idx}`} className="shrink-0 w-32 sm:w-36 h-16 flex items-center justify-center px-2 transition-transform hover:scale-105">
                  <img src={sponsor.src} alt={sponsor.name} className="max-h-10 max-w-[90%] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TIER 3: PARTICIPATING COMPANIES (STRAPI INTEGRATED) */}
        <div>
          <div className="flex items-center justify-center gap-3 my-10 text-center">
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
            <h3 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              PARTICIPATING COMPANIES
            </h3>
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          </div>

          {loading && (
            <div className="py-12 text-center">
              <div className="inline-block w-6 h-6 border-3 border-[#005B82] border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-xs text-neutral-500 font-medium">Loading participating companies...</p>
            </div>
          )}

          {error && !loading && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-center max-w-md mx-auto">
              {error}
            </div>
          )}

          {!loading && imwCompanies.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {imwCompanies.map((company) => {
                const logoUrl = company.logo?.formats?.thumbnail?.url || company.logo?.url;
                return (
                  <div
                    key={company.documentId || company.id}
                    className="p-4 bg-white rounded-xl border border-neutral-200/80 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all hover:border-[#005B82]/40"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      {logoUrl ? (
                        <img src={logoUrl} alt={company.companyName} className="max-h-full max-w-full object-contain" />
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor" className="w-6 h-6 text-[#005B82]">
                          <path d="M4 21h16M6 21V8l4-3v16M14 21V10h4v11M9.5 9h.01M9.5 12h.01M9.5 15h.01" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs font-bold text-neutral-800 line-clamp-1">{company.companyName}</span>
                    {company.ticker && <span className="text-[10px] font-semibold text-[#005B82] mt-0.5">{company.ticker}</span>}
                  </div>
                );
              })}
            </div>
          )}

          {!loading && imwCompanies.length === 0 && (
            <div className="text-center py-10 px-4 bg-slate-50/60 border border-dashed border-slate-200 rounded-2xl max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-neutral-700 mb-1">
                Participating Companies
              </p>
              <p className="text-xs text-neutral-500 mb-4">
                Participating companies for International Mining Week will be announced soon.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005B82] hover:underline"
              >
                <span>Register to Participate</span>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" stroke="currentColor" className="w-3.5 h-3.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
