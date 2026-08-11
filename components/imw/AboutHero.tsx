import React from "react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px] flex items-center overflow-hidden bg-[#070c16] pt-32 sm:pt-40 pb-16">
      {/* Background Image & Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-90"
        style={{ backgroundImage: "url('/imw_hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#0d1726]/90 to-transparent max-w-4xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#03516E]/20 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#03516E]/25 blur-3xl rounded-full pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="mb-4">
            <span className="text-[#C6112F] text-xs sm:text-sm font-bold tracking-widest uppercase block">
              ABOUT IMW
            </span>
            <div className="w-8 h-[2px] bg-[#C6112F] mt-2"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8">
            Uniting the global <br />
            mining industry.
          </h1>

          {/* Subtext with Vertical Red Accent Line */}
          <div className="flex items-stretch gap-4 max-w-xl">
            <div className="w-[3px] bg-[#C6112F] rounded-full shrink-0"></div>
            <p className="text-neutral-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              For one week of events, connections <br className="hidden sm:inline" />
              and opportunities that drive the <br className="hidden sm:inline" />
              future of mining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
