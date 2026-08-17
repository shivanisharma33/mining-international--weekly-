import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurMission() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 border-b border-neutral-100 transition-colors duration-300">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="mb-3">
              <span className="text-[#005B82] text-xs sm:text-sm font-bold tracking-widest uppercase block">
                OUR MISSION
              </span>
              <div className="w-8 h-[2px] bg-[#005B82] mt-2"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] my-4">
              THE Nexus of <br />
              International Mining
            </h2>

            <div className="font-bold text-[#005B82] tracking-wide text-xs sm:text-sm uppercase mb-4">
              INVESTORS – ISSUERS – GOVERNMENTS – SUPPLY CHAINS
            </div>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3">
              Join us for North America's first International Mining Week, taking place from June 1 to 5, 2026, in Quebec City, Canada.
            </p>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3">
              IMW will showcase a collaboration among key partners hosting concurrent activities alongside THE Mining Investment Event.
            </p>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
              This unique partnership aims to unite global mining firms, related industries, supply chain specialists, investors, and governmental representatives.
            </p>

            <div>
              <a
                href="/assets/images/about_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#005B82] text-[#005B82] hover:border-[#005B82] hover:shadow-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs"
              >
                <span>LEARN MORE ABOUT IMW</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Center Column: Networking Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/60">
              <Image
                src="/our_mission_networking.png"
                alt="Business executives networking at International Mining Week"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          {/* Right Column: 3 Feature Items with Red Circle Icons */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-6 sm:gap-8">
            {/* Item 1 */}
            <div className="flex items-start gap-4 pb-6 border-b border-neutral-200/60">
              <div className="w-12 h-12 rounded-full bg-[#005B82] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 mb-1.5 leading-snug">
                  Global Industry Network
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Connect with leaders, investors, companies and innovators from around the world.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 pb-6 border-b border-neutral-200/60">
              <div className="w-12 h-12 rounded-full bg-[#005B82] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M12 3c-3.314 0-6 2.686-6 6 0 2.15 1.134 4.034 2.836 5.084.58.358.914.992.914 1.666V16.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-.75c0-.674.334-1.308.914-1.666C16.866 13.034 18 11.15 18 9c0-3.314-2.686-6-6-6z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 mb-1.5 leading-snug">
                  Insightful Content
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Access high-quality conferences, keynotes and panels addressing the most important industry topics.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#005B82] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 mb-1.5 leading-snug">
                  Real Opportunities
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Build partnerships, discover solutions and create opportunities that move the industry forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
