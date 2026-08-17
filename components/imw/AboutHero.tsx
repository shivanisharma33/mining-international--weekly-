import React from "react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center bg-[#070c16] pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
      {/* Background Image & Gradients */}
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

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full text-left">
        <div className="max-w-3xl">
          <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            ABOUT IMW
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Uniting the global <br />
            <span>mining industry.</span>
          </h1>

          <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>

          {/* Subtext */}
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            For one week of events, connections <br className="hidden sm:inline" />
            and opportunities that drive the <br className="hidden sm:inline" />
            future of mining.
          </p>
        </div>
      </div>
    </section>
  );
}
