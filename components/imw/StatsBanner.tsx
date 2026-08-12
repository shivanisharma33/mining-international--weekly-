import React from "react";

export default function StatsBanner() {
  return (
    <div className="relative z-30 w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="-mt-16 sm:-mt-20 mb-4 sm:mb-8">
          <div className="bg-[#0b1424] border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
              {/* Item 1: Date */}
              <div className="flex items-start gap-4 pt-2 md:pt-0 md:pr-6">
                <div className="w-10 h-10 rounded-lg bg-[#005B82]/20 flex items-center justify-center shrink-0 text-[#0084B4] mt-0.5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
                    <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <rect x="7" y="12" width="3" height="2" rx="0.5" fill="currentColor" />
                    <rect x="14" y="12" width="3" height="2" rx="0.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                    June 1–5, 2026
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mt-1 leading-snug">
                    Five days of high-impact events and activities.
                  </p>
                </div>
              </div>

              {/* Item 2: Location */}
              <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-8">
                <div className="w-10 h-10 rounded-lg bg-[#005B82]/20 flex items-center justify-center shrink-0 text-[#0084B4] mt-0.5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                    Québec City, Canada
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mt-1 leading-snug">
                    A world-class destination rich in history and culture.
                  </p>
                </div>
              </div>

              {/* Item 3: Partner Events */}
              <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-8">
                <div className="w-10 h-10 rounded-lg bg-[#005B82]/20 flex items-center justify-center shrink-0 text-[#0084B4] mt-0.5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                    15+ Partner Events Across the Week
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mt-1 leading-snug">
                    Conferences, forums, summits and networking opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
