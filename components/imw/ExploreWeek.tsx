import React from "react";
import Link from "next/link";

export default function ExploreWeek() {
  const cards = [
    {
      title: "Partner",
      href: "/partners",
      desc: "Discover conferences, forums and activities happening all week.",
      icon: (
        <img
          src="/assets/images/hand2.jpg"
          alt="Partner"
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain mix-blend-multiply"
        />
      ),
    },
    {
      title: "Agenda",
      href: "/agenda",
      desc: "View the full schedule of events and plan your week.",
      icon: (
        <img
          src="/agenda_icon.png"
          alt="Agenda"
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain mix-blend-multiply"
        />
      ),
    },
    {
      title: "Speakers",
      href: "/speakers",
      desc: "Explore the lineup of industry leaders and expert speakers.",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-800 group-hover:text-[#005B82] transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      title: "Media & Partners",
      href: "/partners",
      desc: "Meet our media & partners driving the industry forward.",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-800 group-hover:text-[#005B82] transition-colors ml-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="explore-the-week" className="relative w-full pt-10 sm:pt-14 pb-0 sm:pb-0 bg-white transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#005B82]/40"></div>
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs">
            <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <h2 className="text-[#005B82] text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase">
              EXPLORE THE WEEK
            </h2>
            <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
          </div>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#005B82]/40"></div>
        </div>

        {/* 4 Cards Grid - Perfectly Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5 xl:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <Link key={idx} href={card.href} className="flex flex-col h-full group">
              <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 xl:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 h-full flex-1">
                {/* Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#005B82]/10 transition-all duration-300">
                  {card.icon}
                </div>

                {/* Title Container with unified height for perfect baseline alignment */}
                <div className="h-10 sm:h-12 flex items-center justify-center px-1 mb-1">
                  <h3 className="text-base sm:text-lg lg:text-[17px] xl:text-xl font-extrabold text-[#1f2430] group-hover:text-[#005B82] transition-colors leading-snug whitespace-nowrap">
                    {card.title}
                  </h3>
                </div>

                {/* Accent Line */}
                <div className="w-8 h-[2px] bg-[#005B82] mb-4 rounded-full transition-all duration-300 group-hover:w-12 shrink-0"></div>

                {/* Description */}
                <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed min-h-[2.75rem] sm:min-h-[3rem] flex items-start justify-center">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
