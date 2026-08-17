"use client";
import React from "react";
import Image from "next/image";

export default function OurPartnersGrid() {
  const diamondSponsorsList = [
    { name: "Mercury Group", src: "/assets/images/mg.webp" },
    { name: "The Prospector News", src: "/assets/images/pro-masthead-logo.png" },
    { name: "QSL", src: "/assets/images/qsl-logo-transparent.png" },
    { name: "Investissement Québec", src: "/assets/images/investissement-quebec-transparent.png" },
    { name: "McMillan", src: "/assets/images/Group-145.svg" },
    { name: "Air Borealis", src: "/assets/images/air-borealis-transparent.png" },
    { name: "Apaton Finance", src: "/assets/images/apaton-finance-logo.svg" },
    { name: "Canadian North", src: "/assets/images/Canadian-North-logo-main-rgb-1024x319.png" },
    { name: "Cassels", src: "/assets/images/Cassels-logo-dark.svg" },
    { name: "Government of Canada", src: "/assets/images/government-brand-22.02.svg" },
    { name: "Marsh", src: "/assets/images/marsh-logo-transparent.png" },
    { name: "Crux Investor", src: "/assets/images/642e8adf6f6728bf086ca90e_logo.svg" },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] py-10 sm:py-14 md:py-16 border-b border-neutral-200/60 transition-colors duration-300">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-3">
            <h2 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              OUR PARTNERS
            </h2>
          </div>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.
          </p>
        </div>

        {/* TIER 1: FOUNDING PARTNERS */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              FOUNDING PARTNERS
            </h3>
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
        <div>
          <div className="flex items-center justify-center my-10">
            <h3 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              DIAMOND SPONSORS
            </h3>
          </div>

          {/* Auto-scrolling Slider */}
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fcfdfe] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fcfdfe] to-transparent z-10 pointer-events-none"></div>

            <div className="sponsor-slider-track">
              {/* First set */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div key={`a-${idx}`} className="sponsor-slide">
                  <img src={sponsor.src} alt={sponsor.name} className="max-h-12 max-w-[82%] w-auto object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {diamondSponsorsList.map((sponsor, idx) => (
                <div key={`b-${idx}`} className="sponsor-slide">
                  <img src={sponsor.src} alt={sponsor.name} className="max-h-12 max-w-[82%] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

