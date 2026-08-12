import React from "react";

export default function IMWByTheNumbers() {
  return (
    <section className="w-full bg-[#06090e] text-white py-12 sm:py-16 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left Title Label */}
          <div className="lg:col-span-3 pr-4">
            <span className="text-[#005B82] text-xs sm:text-sm font-bold tracking-widest uppercase leading-snug block">
              IMW BY THE <br />
              NUMBERS
            </span>
            <div className="w-8 h-[2px] bg-[#005B82] mt-2.5"></div>
          </div>

          {/* 4 Stat Columns Grid */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="flex flex-col items-start pt-4 md:pt-0 md:px-8">
              <div className="text-[#005B82] mb-3">
                <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1.5">
                15+
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-medium">
                Partner Events
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start pt-4 md:pt-0 md:px-8">
              <div className="text-[#005B82] mb-3">
                <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-18.432 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253"></path>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1.5">
                100+
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-medium">
                Countries Represented
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-start pt-4 md:pt-0 md:px-8">
              <div className="text-[#005B82] mb-3">
                <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1.5">
                10,000+
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-medium">
                Industry Professionals
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-start pt-4 md:pt-0 md:px-8">
              <div className="text-[#005B82] mb-3">
                <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1.5">
                1
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-medium">
                Unmissable Week
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
