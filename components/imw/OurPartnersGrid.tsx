import React from "react";
import Image from "next/image";

export default function OurPartnersGrid() {
  const diamondSponsorsList = [
    { name: "Group 145", src: "/assets/images/Group-145.svg" },
    { name: "Sponsor Logo", src: "/assets/images/642e8adf6f6728bf086ca90e_logo.svg" },
    { name: "Air Borealis", src: "/assets/images/AirBorealis-Logo.png", isDark: true },
    { name: "Apaton Finance", src: "/assets/images/apaton-finance-logo.svg" },
    { name: "Canadian North", src: "/assets/images/Canadian-North-logo-main-rgb-1024x319.png" },
    { name: "Cassels", src: "/assets/images/Cassels-logo-white.svg", isDark: true },
    { name: "Government Brand", src: "/assets/images/government-brand-22.02.svg" },
    { name: "Marsh", src: "/assets/images/marsh-logo-white.svg", isDark: true },
    { name: "MG", src: "/assets/images/mg.webp" },
    { name: "Pro Masthead", src: "/assets/images/pro-masthead-2011-large.png", isDark: true },
    { name: "QSL", src: "/assets/images/QSL-logo.svg", isDark: true },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] dark:bg-[#070a10] py-16 sm:py-20 md:py-24 border-b border-neutral-200/60 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
            <h2 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              OUR PARTNERS
            </h2>
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.
          </p>
        </div>

        {/* TIER 1: FOUNDING PARTNERS */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#005B82]"></div>
            <span className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <span>⭐</span> FOUNDING PARTNERS <span>⭐</span>
            </span>
            <div className="w-12 h-[1px] bg-[#005B82]"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
            {/* Logo 1: AMQ */}
            <div className="flex items-center justify-center p-4 h-28 sm:h-36 w-auto min-w-[200px] max-w-[280px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
              <Image src="/founding_amq.png" alt="Association minière du Québec" width={240} height={100} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="hidden sm:block h-24 w-[1px] bg-neutral-200 dark:bg-neutral-800"></div>

            {/* Logo 2: ITFA */}
            <div className="flex items-center justify-center p-4 h-28 sm:h-36 w-auto min-w-[200px] max-w-[280px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
              <Image src="/founding_itfa.png" alt="ITFA Logo" width={220} height={100} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="hidden sm:block h-24 w-[1px] bg-neutral-200 dark:bg-neutral-800"></div>

            {/* Logo 3: THE Event */}
            <div className="flex items-center justify-center p-4 h-28 sm:h-36 w-auto min-w-[200px] max-w-[280px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm">
              <Image src="/founding_the_event.png" alt="THE Mining Investment Event" width={240} height={100} className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>

        {/* TIER 2: DIAMOND SPONSORS HEADER */}
        <div>
          <div className="flex items-center justify-center gap-4 my-10">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#005B82] to-[#005B82]"></div>
            <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#005B82]/10 via-[#005B82]/10 to-[#005B82]/10 border border-[#005B82]/50 shadow-sm flex items-center gap-2.5">
              <svg className="w-5 h-5 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10l4 5-9 11L3 9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9.5 4L8 9l4 11 4-11-1.5-5" />
              </svg>
              <span className="text-[#131720] dark:text-white font-black text-sm sm:text-base tracking-[0.2em] uppercase">
                DIAMOND SPONSORS
              </span>
            </div>
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#005B82] to-[#005B82]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {diamondSponsorsList.map((sponsor, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl h-32 px-5 py-4 flex items-center justify-center border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-cyan-900/10 overflow-hidden ${sponsor.isDark
                  ? "bg-[#090d16] border-neutral-800 hover:border-[#005B82]/60"
                  : "bg-gradient-to-br from-white via-slate-50/50 to-neutral-100/60 border-neutral-200/90 dark:border-neutral-800 hover:border-[#005B82]/60"
                  }`}
              >
                {/* Reflective glow accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#005B82]/10 via-transparent to-cyan-500/10 transition-opacity duration-500 pointer-events-none"></div>

                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className="max-h-14 max-w-[80%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

