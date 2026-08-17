import React from "react";
import Link from "next/link";
import IMWHeader from "@/components/imw/IMWHeader";
import IMWFooter from "@/components/imw/IMWFooter";
import StayConnected from "@/components/imw/StayConnected";

export default function EventsPage() {
  const events = [
    {
      title: "THE Mining Investment Event",
      category: "Investment & Capital",
      date: "June 1 - 3, 2026",
      location: "Château Frontenac & Convention Centre",
      description:
        "Canada’s premier mining investment event connecting global investors, mining executives, corporate leaders and government representatives.",
      tag: "Featured Event",
    },
    {
      title: "Association minière du Québec (AMQ) Conference",
      category: "Industry & Governance",
      date: "June 2 - 4, 2026",
      location: "Québec City Convention Centre",
      description:
        "Bringing together key industry leaders to discuss sustainable mining practices, regulatory frameworks, innovation and community relations.",
      tag: "Founding Partner Event",
    },
    {
      title: "Global Extractive Supply Chain Forum",
      category: "Supply Chain & Operations",
      date: "June 3, 2026",
      location: "Convention Centre - Main Hall",
      description:
        "Exploring resilient procurement strategies, green logistics, technology integration and critical mineral supply chain security.",
      tag: "Special Forum",
    },
    {
      title: "Mining Innovation & Sustainability Summit",
      category: "Technology & Environment",
      date: "June 4, 2026",
      location: "Innovation Pavilion",
      description:
        "Showcasing next-generation clean tech, electrification of mining fleets, AI in exploration and zero-emission mining operations.",
      tag: "Tech Summit",
    },
    {
      title: "Guided Regional Mine Visits",
      category: "Excursions & Site Visits",
      date: "June 5, 2026",
      location: "Departs from Convention Centre",
      description:
        "Exclusive site tours to leading Quebec mining operations and research facilities with expert guides and transportation provided.",
      tag: "Field Tour",
    },
    {
      title: "International Mining Week Gala & Awards",
      category: "Networking & Gala",
      date: "June 4, 2026 (Evening)",
      location: "Grand Ballroom, Québec Convention Centre",
      description:
        "Celebrate industry excellence, leadership and sustainability achievements at the official IMW 2026 evening gala dinner.",
      tag: "Gala Event",
    },
  ];

  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white dark:bg-[#070b14]">
        {/* Events Hero */}
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

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full text-left">
            <div className="max-w-3xl">
              <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                15+ PARTNER EVENTS ACROSS THE WEEK
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                Events &amp; Conferences
              </h1>
              <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
              <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed">
                Explore conferences, forums, summits, gala evenings and field visits taking place throughout International Mining{"\u00a0"}Week.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="w-full py-8 sm:py-10 px-6 sm:px-10 lg:px-[4.5vw] max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f2430] dark:text-white uppercase tracking-wider">
                Featured Partner Events
              </h2>
              <div className="w-16 h-[3px] bg-[#005B82] mt-2 rounded-full"></div>
            </div>
            <Link
              href="/agenda"
              className="px-6 py-2.5 rounded-lg bg-[#005B82] hover:bg-[#023B50] text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              View Detailed Daily Agenda →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0e1424] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#005B82]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-extrabold text-[#005B82] uppercase tracking-wider bg-sky-50 dark:bg-sky-950/50 px-2.5 py-1 rounded-md">
                      {evt.category}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-500 border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 rounded">
                      {evt.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#005B82] transition-colors mb-3">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                    </svg>
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center p-8 bg-neutral-50 dark:bg-[#0d121f] rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Ready to Attend?</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-lg mx-auto mb-6">
              Register now to access all partner events or customize your single event pass.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#005B82] hover:bg-[#023B50] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
            >
              <span>REGISTER FOR IMW 2026</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </Link>
          </div>
        </section>

        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
