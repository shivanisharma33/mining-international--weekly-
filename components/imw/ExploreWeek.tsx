import Link from "next/link";

export default function ExploreWeek() {
  return (
    <section id="explore-the-week" className="relative w-full py-10 sm:py-14 bg-white transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
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
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 p-3.5 group-hover:bg-[#005B82]/10 transition-all duration-300">
                <img src="/assets/images/hand2.jpg" alt="Partner Handshake" className="w-full h-full object-contain mix-blend-multiply" />
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
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 p-[17px] sm:p-5 group-hover:bg-[#005B82]/10 transition-all duration-300">
                <img src="/agenda_icon.png" alt="Agenda" className="w-full h-full object-contain mix-blend-multiply" />
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
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
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
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#005B82]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mb-5 text-neutral-800 group-hover:bg-[#005B82]/10 group-hover:text-[#005B82] transition-all duration-300">
                <svg className="w-6 h-6 text-neutral-800 group-hover:text-[#005B82] transition-colors ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f2430] group-hover:text-[#005B82] transition-colors mb-1.5">
                Media &amp; Partners
              </h3>
              <div className="w-8 h-[2px] bg-[#005B82] mb-3.5 rounded-full transition-all duration-300 group-hover:w-12"></div>
              <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
                Meet our media &amp; partners driving the industry forward.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
