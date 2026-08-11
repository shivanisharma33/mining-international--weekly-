import Link from "next/link";

export default function IMWHero() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[680px] flex flex-col justify-between overflow-hidden bg-[#070c16] pt-24 sm:pt-28 pb-10">
      {/* Background Image & Gradients */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-95"
        style={{ backgroundImage: "url('/imw_hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-[#0d1726]/90 to-transparent max-w-[70%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#03516E]/20 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#03516E]/30 blur-3xl rounded-full pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 pb-8 w-full my-auto text-left flex flex-col justify-between h-full">
        <div>
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            INTERNATIONAL MINING WEEK
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            One Week. <br />
            <span>Infinite Opportunities.</span>
          </h1>
          <div className="w-14 h-[3px] bg-[#C6112F] my-5 rounded-full"></div>
          <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed mb-8">
            The global mining industry comes together in Quebec City for a week of events, connections and opportunities.
          </p>

          {/* Action Buttons */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md mb-12">
            <Link
              className="px-6 py-3 rounded-lg bg-[#C6112F] hover:bg-[#a50e27] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2.5 shadow-md"
              href="/register"
            >
              <span>REGISTER NOW</span>
              <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </span>
            </Link>
            <a
              href="https://static1.squarespace.com/static/695c62b92250ae6cd2bc370f/t/6a1d7c9e6d6a9d62f57d4e93/1780317342457/IMW+PLENNARY+SESSIONS+%283%29.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-white hover:bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2.5"
            >
              <span>VIEW PROGRAM</span>
              <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Hero Bottom Stats Grid */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl">
          {/* Item 1: Date */}
          <div className="flex items-center gap-4">
            <svg className="w-9 h-9 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              ></path>
            </svg>
            <div className="text-white text-xs sm:text-sm font-bold leading-tight">
              <div>31 May -</div>
              <div>4 June 2027</div>
            </div>
          </div>

          {/* Item 2: Location */}
          <div className="flex items-center gap-4">
            <svg className="w-9 h-9 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
            </svg>
            <div className="text-white text-xs sm:text-sm font-bold leading-tight">
              <div>Québec City,</div>
              <div>Canada</div>
            </div>
          </div>

          {/* Item 3: Events */}
          <div className="flex items-center gap-4">
            <svg className="w-9 h-9 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              ></path>
            </svg>
            <div className="text-white text-xs sm:text-sm font-bold leading-tight">
              <div>15+ Partner Events</div>
              <div>Across the Week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
