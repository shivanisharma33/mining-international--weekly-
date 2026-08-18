import React from "react";

export default function PartnersHero() {
  const features = [
    {
      title: "Connect",
      description: "Build valuable\nrelationships",
      icon: (
        <img
          src="/assets/images/connect.png"
          alt="Connect"
          className="w-7 h-7 shrink-0 object-contain"
          style={{ filter: "invert(24%) sepia(98%) saturate(1374%) hue-rotate(167deg) brightness(95%) contrast(101%)" }}
        />
      ),
    },
    {
      title: "Elevate",
      description: "Increase brand visibility &\nrecognition",
      icon: (
        <svg className="w-7 h-7 text-[#005B82] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.287a6 6 0 010 7.427M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"></path>
        </svg>
      ),
    },
    {
      title: "Impact",
      description: "Drive the future of the\nmining industry",
      icon: (
        <svg className="w-7 h-7 text-[#005B82] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

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

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full text-left">
        <div className="max-w-3xl">
          {/* Top Tagline */}
          <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            OUR PARTNERS
          </span>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Stronger Together. <br />
            <span>Greater Impact.</span>
          </h1>

          {/* Teal Accent Line */}
          <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>

          {/* Body Paragraph */}
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8">
            Our partners play a vital role in making International Mining Week the leading global platform for the mining{"\u00a0"}industry.
          </p>

          {/* Action Button for Sponsors PDF */}
          <div className="mb-10">
            <a
              href="/assets/images/IMW+SPONSORS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#005B82] hover:bg-[#007baf] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <text x="6.5" y="16.5" fontFamily="sans-serif" fontSize="6.5" fontWeight="900" fill="currentColor" stroke="none">PDF</text>
              </svg>
              <span>VIEW SPONSORS (PDF)</span>
            </a>
          </div>

          {/* Bottom 3 Features Grid with Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {features.map((item, idx) => (
              <div key={idx} className={`flex items-start gap-3.5 pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""}`}>
                {item.icon}
                <div>
                  <h3 className="text-white font-extrabold text-base sm:text-lg mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {item.description}
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
