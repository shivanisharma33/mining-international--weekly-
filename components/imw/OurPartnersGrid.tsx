import React from "react";
import Image from "next/image";

export default function OurPartnersGrid() {
  const diamondSponsors = [
    {
      name: "AGNICO EAGLE",
      logo: (
        <div className="flex items-center justify-center gap-2 font-black text-[#1e293b] text-base tracking-wider">
          <svg className="w-6 h-6 text-[#eab308]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z"/>
          </svg>
          <span>AGNICO EAGLE</span>
        </div>
      ),
    },
    {
      name: "BARRICK",
      logo: (
        <div className="flex items-center justify-center gap-1 font-black text-[#1d4ed8] text-lg tracking-widest uppercase border-b-2 border-[#f59e0b] pb-0.5">
          BARRICK
        </div>
      ),
    },
    {
      name: "Teck",
      logo: (
        <div className="flex items-center justify-center gap-1 font-extrabold text-[#0f172a] text-2xl tracking-tight">
          <span>Teck</span>
          <span className="w-2 h-2 rounded-full bg-[#C6112F]"></span>
        </div>
      ),
    },
    {
      name: "KINROSS",
      logo: (
        <div className="px-4 py-1.5 border border-[#854d0e] text-[#854d0e] font-serif font-bold text-sm tracking-widest uppercase">
          KINROSS
        </div>
      ),
    },
  ];

  const platinumSponsors = [
    {
      name: "GLENCORE",
      logo: (
        <div className="font-serif font-normal text-neutral-800 text-xl tracking-widest uppercase">
          GLENCORE
        </div>
      ),
    },
    {
      name: "Newmont",
      logo: (
        <div className="font-extrabold text-[#1d4ed8] text-lg tracking-wide uppercase">
          Newmont<span className="text-[#3b82f6]">.</span>
        </div>
      ),
    },
    {
      name: "RioTinto",
      logo: (
        <div className="font-black text-[#dc2626] text-xl tracking-tight">
          RioTinto
        </div>
      ),
    },
    {
      name: "VALE",
      logo: (
        <div className="flex items-center justify-center gap-2 font-black text-[#475569] text-lg tracking-widest">
          <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L2 12l10 9 10-9-10-9zm0 3.5l6.5 6.5-6.5 6.5L5.5 13 12 6.5z"/>
          </svg>
          <span>VALE</span>
        </div>
      ),
    },
  ];

  const goldSponsorsRow1 = [
    {
      name: "BHP",
      logo: (
        <div className="font-black text-[#ea580c] text-2xl tracking-tighter">
          BHP
        </div>
      ),
    },
    {
      name: "eramet",
      logo: (
        <div className="flex items-center justify-center gap-1.5">
          <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 19h20L12 2z"/>
          </svg>
          <span className="font-bold text-[#1e3a8a] text-lg">eramet</span>
        </div>
      ),
    },
    {
      name: "IAMGOLD",
      logo: (
        <div className="flex items-center justify-center gap-1 font-serif font-bold text-[#78350f] text-sm tracking-widest uppercase border-y border-[#78350f] py-0.5">
          IAMGOLD
        </div>
      ),
    },
    {
      name: "lundin mining",
      logo: (
        <div className="flex flex-col items-center font-bold text-[#b91c1c] text-xs uppercase leading-tight tracking-wider">
          <span>lundin</span>
          <span>mining</span>
        </div>
      ),
    },
    {
      name: "metso",
      logo: (
        <div className="font-black text-[#0f172a] text-xl tracking-tight lowercase">
          metso
        </div>
      ),
    },
  ];

  const goldSponsorsRow2 = [
    {
      name: "NATIONAL BANK",
      logo: (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-[#dc2626] transform rotate-45"></div>
          <div className="flex flex-col text-left font-black text-[#1e293b] text-[10px] uppercase leading-tight">
            <span>NATIONAL</span>
            <span>BANK</span>
          </div>
        </div>
      ),
    },
    {
      name: "SANDVIK",
      logo: (
        <div className="flex items-center justify-center gap-2 font-black text-[#0f172a] text-sm tracking-widest">
          <svg className="w-4 h-4 text-[#0f172a]" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"/>
          </svg>
          <span>SANDVIK</span>
        </div>
      ),
    },
    {
      name: "srk consulting",
      logo: (
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
          <div className="flex flex-col text-left text-neutral-500 font-semibold text-[10px] leading-tight">
            <span className="font-bold text-[#ea580c] text-xs">srk</span>
            <span>consulting</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] dark:bg-[#070a10] py-16 sm:py-20 md:py-24 border-b border-neutral-200/60 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-[1.5px] bg-[#C6112F]"></div>
            <h2 className="text-[#C6112F] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              OUR PARTNERS
            </h2>
            <div className="w-10 h-[1.5px] bg-[#C6112F]"></div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.
          </p>
        </div>

        {/* TIER 1: FOUNDING PARTNERS */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-amber-400"></div>
            <span className="text-[#C6112F] text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <span>⭐</span> FOUNDING PARTNERS <span>⭐</span>
            </span>
            <div className="w-12 h-[1px] bg-amber-400"></div>
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

        {/* TIER 2: DIAMOND SPONSORS */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-400"></div>
            <span className="text-[#C6112F] text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <span>💎</span> DIAMOND SPONSORS
            </span>
            <div className="w-12 h-[1px] bg-amber-400"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {diamondSponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl h-24 px-6 flex items-center justify-center border border-neutral-200/80 shadow-xs hover:shadow-md transition-all"
              >
                {sponsor.logo}
              </div>
            ))}
          </div>
        </div>

        {/* TIER 3: PLATINUM SPONSORS */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-400"></div>
            <span className="text-[#C6112F] text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <span>⚜️</span> PLATINUM SPONSORS
            </span>
            <div className="w-12 h-[1px] bg-amber-400"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {platinumSponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl h-24 px-6 flex items-center justify-center border border-neutral-200/80 shadow-xs hover:shadow-md transition-all"
              >
                {sponsor.logo}
              </div>
            ))}
          </div>
        </div>

        {/* TIER 4: GOLD SPONSORS */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-400"></div>
            <span className="text-[#C6112F] text-xs sm:text-sm font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              <span>🪙</span> GOLD SPONSORS
            </span>
            <div className="w-12 h-[1px] bg-amber-400"></div>
          </div>

          {/* Row 1: 5 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-4">
            {goldSponsorsRow1.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl h-24 px-4 flex items-center justify-center border border-neutral-200/80 shadow-xs hover:shadow-md transition-all"
              >
                {sponsor.logo}
              </div>
            ))}
          </div>

          {/* Row 2: 3 cards + 1 callout card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {goldSponsorsRow2.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl h-24 px-4 flex items-center justify-center border border-neutral-200/80 shadow-xs hover:shadow-md transition-all"
              >
                {sponsor.logo}
              </div>
            ))}

            {/* Special Callout Card: And More... */}
            <div className="bg-white rounded-2xl h-24 px-4 flex flex-col items-center justify-center text-center border border-dashed border-[#C6112F]/40 shadow-xs hover:shadow-md transition-all">
              <span className="text-[#C6112F] font-extrabold text-sm mb-0.5">
                And More...
              </span>
              <span className="text-neutral-500 text-xs">
                Join our growing list of partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
