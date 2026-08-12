"use client";
import React from "react";
import Image from "next/image";

export default function OurPartnersGrid() {
  const diamondSponsorsList = [
    { name: "Group 145", src: "/assets/images/Group-145.svg", isDark: false },
    { name: "Sponsor Logo", src: "/assets/images/642e8adf6f6728bf086ca90e_logo.svg", isDark: false },
    { name: "Air Borealis", src: "/assets/images/AirBorealis-Logo.png", isDark: true },
    { name: "Apaton Finance", src: "/assets/images/apaton-finance-logo.svg", isDark: false },
    { name: "Canadian North", src: "/assets/images/Canadian-North-logo-main-rgb-1024x319.png", isDark: false },
    { name: "Cassels", src: "/assets/images/Cassels-logo-white.svg", isDark: true },
    { name: "Government Brand", src: "/assets/images/government-brand-22.02.svg", isDark: false },
    { name: "Marsh", src: "/assets/images/marsh-logo-white.svg", isDark: true },
    { name: "MG", src: "/assets/images/mg.webp", isDark: false },
    { name: "2025 Sponsors — THE Event", src: "/assets/images/pro.png", isDark: true },
    { name: "QSL", src: "/assets/images/QSL-logo.svg", isDark: true },
    { name: "Investissement Québec", src: "/Investissement Québec revamped _ Emergex.png", isDark: false },
    { name: "Accepted Offer", src: "/I am delighted to announce that I have accepted an offer____.png", isDark: false },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] py-16 sm:py-20 md:py-24 border-b border-neutral-200/60 transition-colors duration-300">
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

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.
          </p>
        </div>

        {/* TIER 1: FOUNDING PARTNERS */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
            <h3 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              FOUNDING PARTNERS
            </h3>
            <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
            <a href="https://amq-inc.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 h-28 sm:h-36 w-auto min-w-[200px] max-w-[280px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm transition-transform hover:scale-105">
              <Image src="/founding_amq.png" alt="Association minière du Québec" width={240} height={100} className="max-h-full max-w-full object-contain" />
            </a>

            <div className="hidden sm:block h-24 w-[1px] bg-neutral-200"></div>

            <a href="https://itfa.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 h-28 sm:h-36 w-auto min-w-[200px] max-w-[280px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm transition-transform hover:scale-105">
              <Image src="/founding_itfa.png" alt="ITFA Logo" width={220} height={100} className="max-h-full max-w-full object-contain" />
            </a>

            <div className="hidden sm:block h-24 w-[1px] bg-neutral-200"></div>

            <a href="https://mining-investment-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 h-28 sm:h-36 w-auto min-w-[200px] max-w-[280px] bg-white rounded-2xl border border-neutral-200/80 shadow-sm transition-transform hover:scale-105">
              <Image src="/founding_the_event.png" alt="THE Mining Investment Event" width={240} height={100} className="max-h-full max-w-full object-contain" />
            </a>
          </div>
        </div>

        {/* TIER 2: DIAMOND SPONSORS */}
        <div>
          <div className="flex items-center justify-center gap-3 my-10">
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

            <div className="sponsor-slider-track">
              {/* First set */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div key={`a-${idx}`} className={`sponsor-slide ${sponsor.isDark ? 'sponsor-slide-dark' : ''}`}>
                  <img src={sponsor.src} alt={sponsor.name} className="max-h-14 max-w-[80%] w-auto object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div key={`b-${idx}`} className={`sponsor-slide ${sponsor.isDark ? 'sponsor-slide-dark' : ''}`}>
                  <img src={sponsor.src} alt={sponsor.name} className="max-h-14 max-w-[80%] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
