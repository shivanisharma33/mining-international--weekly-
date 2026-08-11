import React from "react";

export default function PartnersHero() {
  const features = [
    {
      title: "Connect",
      description: "Build valuable relationships",
      icon: (
        <svg className="w-7 h-7 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
        </svg>
      ),
    },
    {
      title: "Elevate",
      description: "Increase brand visibility and recognition",
      icon: (
        <svg className="w-7 h-7 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.287a6 6 0 010 7.427M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"></path>
        </svg>
      ),
    },
    {
      title: "Impact",
      description: "Drive the future of the mining industry",
      icon: (
        <svg className="w-7 h-7 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[560px] md:min-h-[600px] flex items-center overflow-hidden bg-[#070c16] pt-32 sm:pt-40 pb-16">
      {/* Background Image & Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-90"
        style={{ backgroundImage: "url('/imw_hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#0d1726]/90 to-transparent max-w-4xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#03516E]/20 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#03516E]/25 blur-3xl rounded-full pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Tagline */}
          <div className="mb-4">
            <span className="text-[#C6112F] text-xs sm:text-sm font-bold tracking-widest uppercase block">
              OUR PARTNERS
            </span>
            <div className="w-8 h-[2px] bg-[#C6112F] mt-2"></div>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            Stronger Together. <br />
            <span className="text-[#C6112F]">Greater Impact.</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8">
            Our partners play a vital role in making International Mining Week the leading global platform for the mining industry.
          </p>

          {/* Gold Accent Line */}
          <div className="w-10 h-[1.5px] bg-[#f59e0b] mb-10"></div>

          {/* Bottom 3 Features Grid with Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {features.map((item, idx) => (
              <div key={idx} className={`flex items-start gap-3.5 pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""}`}>
                {item.icon}
                <div>
                  <h3 className="text-white font-extrabold text-base sm:text-lg mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
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
