import React from "react";
import Link from "next/link";

export default function PartnerWithUsBanner() {
  return (
    <section className="w-full bg-[#f8f9fa] dark:bg-[#070a10] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-[1340px] mx-auto">
        <div className="relative w-full bg-[#070b14] rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 overflow-hidden">
          {/* Subtle Topography Overlay Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none"></div>

          {/* Left: Handshake Red Circle & Text */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
            {/* Circle with Exact Handshake Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#005B82] flex items-center justify-center shrink-0 shadow-lg p-3">
              <img src="/handshake_icon.png" alt="Partner Handshake" className="w-full h-full object-contain filter invert brightness-200" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                Partner With Us
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-medium max-w-xl">
                Be part of the most important mining event of the year.
              </p>
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            <a
              href="/assets/images/IMW+SPONSORS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#005B82] hover:bg-[#007baf] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md group"
            >
              <span>VIEW SPONSORS PDF</span>
              <svg className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#005B82] hover:border-[#007baf] bg-transparent hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md group"
            >
              <span>BECOME A PARTNER</span>
              <svg className="w-4 h-4 text-[#005B82] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
