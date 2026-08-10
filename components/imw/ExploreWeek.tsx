import Link from "next/link";

export default function ExploreWeek() {
  return (
    <section id="about-imw-section" className="relative w-full py-16 sm:py-24 bg-white dark:bg-[#090d16] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f2430] dark:text-white uppercase tracking-wider">
            EXPLORE THE WEEK
          </h2>
          <div className="w-16 h-[3px] bg-[#C6112F] mt-2.5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Partner */}
          <a
            href="https://static1.squarespace.com/static/695c62b92250ae6cd2bc370f/t/69fda4c82dce4a46e87e0f4a/1778230472696/IMW+SPONSORS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <div className="bg-white dark:bg-[#131b2e] border border-neutral-300/90 dark:border-[#233049] rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-2xs hover:shadow-xl hover:border-[#C6112F]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-200/80 dark:bg-slate-800 flex items-center justify-center shrink-0 mb-5 text-neutral-800 dark:text-slate-200 group-hover:bg-[#fde8eb] dark:group-hover:bg-rose-950/60 group-hover:text-[#C6112F] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 dark:text-slate-200 group-hover:text-[#C6112F] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2.5"></rect>
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"></line>
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"></line>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <rect x="7" y="12" width="3" height="2" rx="0.5" fill="currentColor"></rect>
                  <rect x="14" y="12" width="3" height="2" rx="0.5" fill="currentColor"></rect>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] dark:text-white group-hover:text-[#C6112F] transition-colors mb-1.5">
                Partner
              </h3>
              <div className="w-8 h-[2px] bg-[#C6112F] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[260px]">
                Discover conferences, forums and activities happening all week.
              </p>
            </div>
          </a>

          {/* Card 2: Agenda */}
          <a
            href="https://static1.squarespace.com/static/695c62b92250ae6cd2bc370f/t/6a1d7c9e6d6a9d62f57d4e93/1780317342457/IMW+PLENNARY+SESSIONS+%283%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <div className="bg-white dark:bg-[#131b2e] border border-neutral-300/90 dark:border-[#233049] rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-2xs hover:shadow-xl hover:border-[#C6112F]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-200/80 dark:bg-slate-800 flex items-center justify-center shrink-0 mb-5 text-neutral-800 dark:text-slate-200 group-hover:bg-[#fde8eb] dark:group-hover:bg-rose-950/60 group-hover:text-[#C6112F] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 dark:text-slate-200 group-hover:text-[#C6112F] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2.5"></rect>
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"></line>
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"></line>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <circle cx="8" cy="13" r="1" fill="currentColor"></circle>
                  <circle cx="12" cy="13" r="1" fill="currentColor"></circle>
                  <circle cx="16" cy="13" r="1" fill="currentColor"></circle>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] dark:text-white group-hover:text-[#C6112F] transition-colors mb-1.5">
                Agenda
              </h3>
              <div className="w-8 h-[2px] bg-[#C6112F] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[260px]">
                View the full schedule of events and plan your week.
              </p>
            </div>
          </a>

          {/* Card 3: Speakers */}
          <Link href="/speakers" className="h-full">
            <div className="bg-white dark:bg-[#131b2e] border border-neutral-300/90 dark:border-[#233049] rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-2xs hover:shadow-xl hover:border-[#C6112F]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-200/80 dark:bg-slate-800 flex items-center justify-center shrink-0 mb-5 text-neutral-800 dark:text-slate-200 group-hover:bg-[#fde8eb] dark:group-hover:bg-rose-950/60 group-hover:text-[#C6112F] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 dark:text-slate-200 group-hover:text-[#C6112F] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] dark:text-white group-hover:text-[#C6112F] transition-colors mb-1.5">
                Speakers
              </h3>
              <div className="w-8 h-[2px] bg-[#C6112F] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[260px]">
                Explore the lineup of industry leaders and expert speakers.
              </p>
            </div>
          </Link>

          {/* Card 4: Media & Partners */}
          <Link href="/sponsors" className="h-full">
            <div className="bg-white dark:bg-[#131b2e] border border-neutral-300/90 dark:border-[#233049] rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-2xs hover:shadow-xl hover:border-[#C6112F]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-200/80 dark:bg-slate-800 flex items-center justify-center shrink-0 mb-5 text-neutral-800 dark:text-slate-200 group-hover:bg-[#fde8eb] dark:group-hover:bg-rose-950/60 group-hover:text-[#C6112F] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 dark:text-slate-200 group-hover:text-[#C6112F] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5L12 6.5L17 11.5M7 17.5L12 12.5L17 17.5"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] dark:text-white group-hover:text-[#C6112F] transition-colors mb-1.5">
                Media &amp; Partners
              </h3>
              <div className="w-8 h-[2px] bg-[#C6112F] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[260px]">
                Meet our valued media &amp; partners driving the mining industry forward.
              </p>
            </div>
          </Link>

          {/* Card 5: Brochure */}
          <Link href="#" className="h-full">
            <div className="bg-white dark:bg-[#131b2e] border border-neutral-300/90 dark:border-[#233049] rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-2xs hover:shadow-xl hover:border-[#C6112F]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-200/80 dark:bg-slate-800 flex items-center justify-center shrink-0 mb-5 text-neutral-800 dark:text-slate-200 group-hover:bg-[#fde8eb] dark:group-hover:bg-rose-950/60 group-hover:text-[#C6112F] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 dark:text-slate-200 group-hover:text-[#C6112F] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] dark:text-white group-hover:text-[#C6112F] transition-colors mb-1.5">
                Brochure
              </h3>
              <div className="w-8 h-[2px] bg-[#C6112F] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[260px]">
                Download the official brochure and share with your network.
              </p>
            </div>
          </Link>

          {/* Card 6: About IMW */}
          <Link href="#about-imw-section" className="h-full">
            <div className="bg-white dark:bg-[#131b2e] border border-neutral-300/90 dark:border-[#233049] rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-2xs hover:shadow-xl hover:border-[#C6112F]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-200/80 dark:bg-slate-800 flex items-center justify-center shrink-0 mb-5 text-neutral-800 dark:text-slate-200 group-hover:bg-[#fde8eb] dark:group-hover:bg-rose-950/60 group-hover:text-[#C6112F] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 dark:text-slate-200 group-hover:text-[#C6112F] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v5"></path>
                  <circle cx="12" cy="8" r="0.75" fill="currentColor"></circle>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] dark:text-white group-hover:text-[#C6112F] transition-colors mb-1.5">
                About IMW
              </h3>
              <div className="w-8 h-[2px] bg-[#C6112F] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[260px]">
                Learn more about International Mining Week.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
