"use client";
import React from "react";
import Image from "next/image";

export default function OurPartnersGrid() {
  const diamondSponsorsList = [
    {
      name: "Mercury Group",
      src: "/assets/images/mg.webp",
      className: "max-h-8 sm:max-h-9 max-w-[140px] object-contain",
    },
    {
      name: "The Prospector News",
      src: "/assets/images/pro.png",
      className: "max-h-10 sm:max-h-11 max-w-[150px] scale-[2.7] object-contain",
    },
    {
      name: "QSL",
      src: "/assets/images/qsl-logo-transparent.png",
      className: "max-h-8 sm:max-h-9 max-w-[130px] object-contain",
    },
    {
      name: "Investissement Québec",
      src: "/assets/images/investissement-quebec-transparent.png",
      className: "max-h-7 sm:max-h-8 max-w-[160px] object-contain",
    },
    {
      name: "McMillan",
      src: "/assets/images/mcm.png",
      className: "max-h-8 sm:max-h-9 max-w-[140px] scale-[1.3] object-contain",
    },
    {
      name: "Air Borealis",
      src: "/assets/images/air-borealis-transparent.png",
      className: "max-h-7 sm:max-h-8 max-w-[170px] scale-[1.15] object-contain",
    },
    {
      name: "Apaton Finance",
      src: "/assets/images/apaton-finance-logo.svg",
      className: "max-h-7 sm:max-h-8 max-w-[145px] object-contain",
    },
    {
      name: "Canadian North",
      src: "/assets/images/Canadian-North-logo-main-rgb-1024x319.png",
      className: "max-h-7 sm:max-h-8 max-w-[150px] object-contain",
    },
    {
      name: "Cassels",
      src: "/assets/images/Cassels-logo-dark.svg",
      className: "max-h-7 sm:max-h-8 max-w-[145px] object-contain",
    },
    {
      name: "Government of Canada",
      src: "/assets/images/government-brand-22.02.svg",
      className: "max-h-12 sm:max-h-14 max-w-[140px] scale-[1.4] object-contain",
    },
    {
      name: "Marsh",
      src: "/assets/images/marsh-logo-transparent.png",
      className: "max-h-6 sm:max-h-7 max-w-[140px] object-contain",
    },
    {
      name: "Crux Investor",
      src: "/assets/images/642e8adf6f6728bf086ca90e_logo.svg",
      className: "max-h-7 sm:max-h-8 max-w-[150px] object-contain",
    },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] pt-10 sm:pt-14 pb-0 sm:pb-0 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#005B82]/40"></div>
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs">
              <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <h2 className="text-[#005B82] text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase">
                THE NEXUS OF INTERNATIONAL MINING
              </h2>
              <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
            </div>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#005B82]/40"></div>
          </div>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.
          </p>
        </div>

        {/* TIER 1: FOUNDING PARTNERS */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#005B82]/40"></div>
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs">
              <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <h3 className="text-[#005B82] text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase">
                FOUNDING PARTNERS
              </h3>
              <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
            </div>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#005B82]/40"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-6xl mx-auto">
            <a href="https://amq-inc.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-6 h-32 sm:h-36 w-[280px] sm:w-[310px] bg-white rounded-2xl border border-neutral-200/80 shadow-md transition-all hover:scale-105 hover:shadow-xl hover:border-[#005B82]/40">
              <Image src="/founding_amq.png" alt="Association minière du Québec" width={260} height={95} className="max-h-[90px] max-w-[250px] w-auto object-contain" />
            </a>

            <div className="hidden lg:block h-24 w-[1px] bg-neutral-200"></div>

            <a href="https://itfa.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-6 h-32 sm:h-36 w-[280px] sm:w-[310px] bg-white rounded-2xl border border-neutral-200/80 shadow-md transition-all hover:scale-105 hover:shadow-xl hover:border-[#005B82]/40">
              <Image src="/founding_itfa.png" alt="ITFA Logo" width={260} height={95} className="max-h-[90px] max-w-[250px] w-auto object-contain" />
            </a>

            <div className="hidden lg:block h-24 w-[1px] bg-neutral-200"></div>

            <a href="https://mining-investment-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-6 h-32 sm:h-36 w-[280px] sm:w-[310px] bg-white rounded-2xl border border-neutral-200/80 shadow-md transition-all hover:scale-105 hover:shadow-xl hover:border-[#005B82]/40">
              <Image src="/founding_the_event.png" alt="THE Mining Investment Event" width={260} height={95} className="max-h-[90px] max-w-[250px] w-auto object-contain" />
            </a>
          </div>
        </div>

        {/* TIER 2: DIAMOND SPONSORS */}
        <div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#005B82]/40"></div>
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs">
              <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <h3 className="text-[#005B82] text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase">
                DIAMOND SPONSORS
              </h3>
              <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
            </div>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#005B82]/40"></div>
          </div>

          {/* Auto-scrolling Slider */}
          <div className="relative overflow-hidden max-w-6xl mx-auto py-2">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fcfdfe] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fcfdfe] to-transparent z-10 pointer-events-none"></div>

            <div className="sponsor-slider-track items-center">
              {/* First set */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div
                  key={`a-${idx}`}
                  className="shrink-0 w-36 sm:w-44 lg:w-48 h-20 flex items-center justify-center px-3 transition-transform hover:scale-105"
                >
                  <img src={sponsor.src} alt={sponsor.name} className={sponsor.className} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div
                  key={`b-${idx}`}
                  className="shrink-0 w-36 sm:w-44 lg:w-48 h-20 flex items-center justify-center px-3 transition-transform hover:scale-105"
                >
                  <img src={sponsor.src} alt={sponsor.name} className={sponsor.className} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
