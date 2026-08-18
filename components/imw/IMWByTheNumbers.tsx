import React from "react";

export default function IMWByTheNumbers() {
  const stats = [
    {
      number: "15+",
      label: "Partner Events",
    },
    {
      number: "100+",
      label: "Countries Represented",
    },
    {
      number: "10,000+",
      label: "Industry Professionals",
    },
    {
      number: "1",
      label: "Unmissable Week",
    },
  ];

  return (
    <section className="w-full bg-[#06090e] text-white py-10 sm:py-12 border-y border-white/10 overflow-hidden relative">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-[#005B82]/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Title Label */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0084B4] animate-pulse"></span>
              <span className="text-[#0084B4] text-xs font-bold tracking-widest uppercase">
                AT A GLANCE
              </span>
            </div>
            <h2 className="text-white text-lg sm:text-xl font-black tracking-wider uppercase leading-snug">
              IMW BY THE <br className="hidden lg:inline" />
              NUMBERS
            </h2>
            <div className="w-12 h-[3px] bg-[#005B82] mt-3 rounded-full"></div>
          </div>

          {/* 4 Stat Columns Grid */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start pt-4 md:pt-0 md:px-6 lg:px-8 group transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#38bdf8] group-hover:to-white transition-all duration-300">
                  {item.number}
                </div>
                <div className="text-neutral-300 text-xs sm:text-sm font-semibold tracking-wide leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

