import React from "react";
import Link from "next/link";

export default function IMWHero() {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center bg-[#070c16] pt-24 sm:pt-28 pb-20 sm:pb-24">
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

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-left">
        <div className="max-w-3xl">
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            INTERNATIONAL MINING WEEK
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            One Week. <br />
            <span>Infinite Opportunities.</span>
          </h1>
          <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
          <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed mb-8">
            The global mining industry comes together in Quebec City for a week of events, connections and opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="px-6 py-3.5 rounded-lg bg-[#005B82] hover:bg-[#023B50] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2.5 shadow-md"
              href="/register"
            >
              <span>REGISTER NOW</span>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </Link>
            <a
              href="#explore-the-week"
              className="px-6 py-3.5 rounded-lg border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2.5"
            >
              <span>VIEW EVENTS</span>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
