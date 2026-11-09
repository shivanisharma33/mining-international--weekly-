import React from "react";

export default function FoundingPartners() {
  const partners = [
    {
      name: "Association minière du Québec",
      href: "https://amq-inc.com/",
      logo: "/founding_amq.png",
      alt: "Association minière du Québec",
      desc: "Representing Québec's mining industry and supporting a responsible, sustainable\u00a0future.",
    },
    {
      name: "ITFA",
      href: "https://itfa.org/",
      logo: "/founding_itfa.png",
      alt: "ITFA",
      desc: "Advancing trade, investment and development across the global extractive\u00a0sector.",
    },
    {
      name: "THE Mining Investment Event",
      href: "https://mining-investment-six.vercel.app/",
      logo: "/founding_the_event.png",
      alt: "THE Mining Investment Event",
      desc: "Connecting global investors, mining companies and strategic industry\u00a0opportunities.",
    },
  ];

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-10 sm:pb-14" id="founding">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#005B82]/40"></div>
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs">
            <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <h2 className="text-[#005B82] text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase">
              FOUNDING PARTNERS
            </h2>
            <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
          </div>
          <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#005B82]/40"></div>
        </div>

        {/* 3 Cards Grid - Perfectly Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full group"
            >
              <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 h-full flex-1">
                {/* Logo Container with fixed uniform height */}
                <div className="h-28 sm:h-32 flex items-center justify-center mb-5 w-full">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-20 sm:h-24 max-w-[260px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Description with unified min-height and baseline */}
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-[320px] min-h-[2.75rem] sm:min-h-[3rem] flex items-start justify-center">
                  {partner.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

