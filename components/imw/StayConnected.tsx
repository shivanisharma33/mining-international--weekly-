import React from "react";
import Link from "next/link";

export default function StayConnected() {
  return (
    <section className="w-full py-10 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        <div className="relative w-full rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)] p-7 sm:p-10 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#070c16]">
          
          {/* Background Image & Gradient Overlays matching Hero Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-700"
              style={{ backgroundImage: "url('/imw_hero.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#0d1726]/90 to-[#070c16]/80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#03516E]/20 to-transparent"></div>
            </div>
          </div>

          {/* Left Side: Info without icon */}
          <div className="relative z-10 flex flex-col text-center sm:text-left gap-2 max-w-3xl">
            <span className="text-white text-xs sm:text-xs font-black tracking-[0.2em] uppercase mb-1">
              CANADA'S PREMIER MINING WEEK
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2 whitespace-nowrap">
              Register for International Mining Week
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-[#c9d4e2] text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                </svg>
                June 1–5, 2026
              </span>
              <span className="text-[#4a5c74] font-bold">•</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Québec City, Canada
              </span>
            </div>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto border border-white/50 hover:border-white text-white font-black text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              <span>REGISTER NOW</span>
              <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/agenda"
              className="inline-flex items-center justify-center w-full sm:w-auto border border-white/40 hover:border-white text-white font-black text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              VIEW EVENTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
