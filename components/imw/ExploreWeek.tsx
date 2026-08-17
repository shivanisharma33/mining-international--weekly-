import Link from "next/link";

export default function ExploreWeek() {
  return (
    <section id="explore-the-week" className="relative w-full py-10 sm:py-14 bg-white transition-colors duration-300">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-3 mb-12 text-center">
          <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          <h2 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            EXPLORE THE WEEK
          </h2>
          <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Partner */}
          <Link href="/partners" className="h-full">
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 text-neutral-800 group-hover:bg-[#005B82]/10 group-hover:text-[#005B82] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 group-hover:text-[#005B82] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2.5"></rect>
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"></line>
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"></line>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <rect x="7" y="12" width="3" height="2" rx="0.5" fill="currentColor"></rect>
                  <rect x="14" y="12" width="3" height="2" rx="0.5" fill="currentColor"></rect>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] group-hover:text-[#005B82] transition-colors mb-1.5">
                Partner
              </h3>
              <div className="w-8 h-[2px] bg-[#005B82] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
                Discover conferences, forums and activities happening all week.
              </p>
            </div>
          </Link>

          {/* Card 2: Agenda */}
          <Link href="/agenda" className="h-full">
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 text-neutral-800 group-hover:bg-[#005B82]/10 group-hover:text-[#005B82] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 group-hover:text-[#005B82] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2.5"></rect>
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"></line>
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"></line>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <circle cx="8" cy="13" r="1" fill="currentColor"></circle>
                  <circle cx="12" cy="13" r="1" fill="currentColor"></circle>
                  <circle cx="16" cy="13" r="1" fill="currentColor"></circle>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] group-hover:text-[#005B82] transition-colors mb-1.5">
                Agenda
              </h3>
              <div className="w-8 h-[2px] bg-[#005B82] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
                View the full schedule of events and plan your week.
              </p>
            </div>
          </Link>

          {/* Card 3: Speakers */}
          <Link href="/speakers" className="h-full">
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 text-neutral-800 group-hover:bg-[#005B82]/10 group-hover:text-[#005B82] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 group-hover:text-[#005B82] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] group-hover:text-[#005B82] transition-colors mb-1.5">
                Speakers
              </h3>
              <div className="w-8 h-[2px] bg-[#005B82] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
                Explore the lineup of industry leaders and expert speakers.
              </p>
            </div>
          </Link>

          {/* Card 4: Media & Partners */}
          <Link href="/partners" className="h-full">
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-7 sm:p-9 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 text-neutral-800 group-hover:bg-[#005B82]/10 group-hover:text-[#005B82] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 group-hover:text-[#005B82] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5L12 6.5L17 11.5M7 17.5L12 12.5L17 17.5"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] group-hover:text-[#005B82] transition-colors mb-1.5">
                Media &amp; Partners
              </h3>
              <div className="w-8 h-[2px] bg-[#005B82] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
                Meet our valued media &amp; partners driving the mining industry forward.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
