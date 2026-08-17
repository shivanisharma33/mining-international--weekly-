import React from "react";
import Link from "next/link";

export default function WhyAttend() {
  const cards = [
    {
      title: "Connect",
      description: "Meet the right people and expand your global network.",
      icon: (
        <svg className="w-9 h-9 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
        </svg>
      ),
    },
    {
      title: "Discover",
      description: "Explore new ideas and opportunities.",
      icon: (
        <svg className="w-9 h-9 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
      ),
    },
    {
      title: "Learn",
      description: "Gain insights from industry experts and global leaders.",
      icon: (
        <svg className="w-9 h-9 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path>
        </svg>
      ),
    },
    {
      title: "Lead",
      description: "Be part of shaping the future of the mining industry.",
      icon: (
        <svg className="w-9 h-9 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#fbfcfd] dark:bg-[#070a10] py-6 sm:py-8 border-b border-neutral-200/50 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Header Column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-[#005B82] text-xs sm:text-sm font-bold tracking-widest uppercase block">
                WHY ATTEND
              </span>
              <div className="w-8 h-[2px] bg-[#005B82] mt-1.5"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.08] my-4">
              A Week. <br />
              Unlimited Value.
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              From conferences and summits to networking receptions and site visits, IMW delivers unmatched value for every participant.
            </p>

          </div>

          {/* Right 4 Compact Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-neutral-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center justify-center gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-[#005B82]/10 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-neutral-950 mb-1 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-neutral-600 text-xs leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
