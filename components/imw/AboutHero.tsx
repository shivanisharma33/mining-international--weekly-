import React from "react";

export default function AboutHero() {
  return (
    <section className="ab2-hero">
      {/* Background Image & Gradients (matching Homepage Hero) */}
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

      <div className="ab2-hero-inner max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full">
        <div className="ab2-kicker text-slate-300" style={{ color: "#cbd5e1" }}>ABOUT IMW</div>
        <h1>Uniting the global<br /><em>mining industry.</em></h1>
        <p className="ab2-lede">For one week of events, connections and opportunities that drive the future of mining.</p>
      </div>
    </section>
  );
}
