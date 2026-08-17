"use client";

import React, { useState } from "react";
import { IMW_PDF_PAGES } from "./pdfData";

type EventItem = {
  t: string;
  ic: string;
  title: string;
  sub: string;
  desc: string;
  tag: string;
};

type FeaturedEvent = {
  art: string;
  img?: string;
  title: string;
  date: string;
  time: string;
  loc: string;
  addr: string;
  who: string;
  about: string;
};

type DayData = {
  tab: string;
  head: string;
  events: EventItem[];
  featured: FeaturedEvent;
};

const AG_ICONS: Record<string, React.ReactNode> = {
  golf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M12 3v13M12 3l6 2.5L12 8" />
      <path d="M7 21c0-2 2.2-3.5 5-3.5s5 1.5 5 3.5" fill="none" />
    </svg>
  ),
  hand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
      <circle cx="16.5" cy="9" r="2.6" />
      <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
    </svg>
  ),
  podium: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M12 3v3M8 6h8M9 6l-1.5 5h9L15 6M7 21l2-10M17 21l-2-10M9.5 15h5" />
    </svg>
  ),
  panel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <circle cx="8" cy="7" r="2.4" />
      <circle cx="16" cy="7" r="2.4" />
      <path d="M4 14.5c.5-2.4 2-3.7 4-3.7s3.5 1.3 4 3.7M12 14.5c.5-2.4 2-3.7 4-3.7s3.5 1.3 4 3.7M5 18.5h14" />
    </svg>
  ),
  drink: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M6 4h12l-6 8zM12 12v6M8.5 20.5h7" />
    </svg>
  ),
  meet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M4 12h16" />
    </svg>
  ),
  gala: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M12 3.6l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.2 6.9 19l1.1-5.6-4.2-3.9 5.7-.7z" />
    </svg>
  ),
  tour: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M4 10h16M8 16v2.5M16 16v2.5" />
      <circle cx="8.5" cy="13" r="1" />
      <circle cx="15.5" cy="13" r="1" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <path d="M6 21V4M6 4h11l-2.5 3.5L17 11H6" />
    </svg>
  ),
};

function RenderArt({ theme, src }: { theme: string; src?: string }) {
  let imageSrc = src;
  if (!imageSrc) {
    if (theme === "golf") imageSrc = "/golf_featured_event.png";
    else if (theme === "gala") imageSrc = "/our_mission_networking.png";
    else if (theme === "stage") imageSrc = "/quebec_city_host.png";
    else imageSrc = "/imw_hero.png";
  }

  return (
    <img
      src={imageSrc}
      alt="Featured Event"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
    />
  );
}

const IMW_AGENDA: DayData[] = [
  {
    tab: "Mon, June 1",
    head: "Monday, June 1, 2026",
    events: [
      { t: "7:00 AM", ic: "golf", title: "ICONIC GOLF TOURNAMENT", sub: "La Tempête Golf Club", desc: "Kick off International Mining Week with the Iconic Golf Tournament at La Tempête — a full day of premium golf and networking.", tag: "Featured Event" },
      { t: "12:00 PM", ic: "hand", title: "INVESTOR WELCOME LUNCH", sub: "By Invitation Only", desc: "An exclusive gathering of investors, executives and special guests.", tag: "Networking" },
      { t: "2:00 PM", ic: "people", title: "OPENING CEREMONY", sub: "Québec City Convention Centre", desc: "Official opening of International Mining Week 2026.", tag: "Plenary Session" },
      { t: "2:30 PM", ic: "podium", title: "KEYNOTE ADDRESS", sub: "Global Outlook for the Mining Industry", desc: "Insights from global leaders on the future of mining.", tag: "Keynote" },
      { t: "4:00 PM", ic: "panel", title: "PANEL DISCUSSION", sub: "Capital, Commodities & Critical Minerals", desc: "Exploring investment trends and the future of critical minerals.", tag: "Panel" },
      { t: "6:00 PM", ic: "drink", title: "NETWORKING RECEPTION", sub: "Red Cloud Connect Lounge", desc: "Connect with industry leaders and peers in a relaxed setting.", tag: "Networking" },
    ],
    featured: {
      art: "golf",
      title: "ICONIC GOLF TOURNAMENT",
      date: "Monday, June 1, 2026",
      time: "7:00 AM – 4:00 PM",
      loc: "La Tempête Golf Club",
      addr: "Québec City, QC — Tickets Available",
      who: "Contact jchoi@irinc.ca",
      about: "Kick off International Mining Week with the Iconic Golf Tournament at La Tempête — a full day of premium golf and networking.",
    },
  },
  {
    tab: "Tue, June 2",
    head: "Tuesday, June 2, 2026",
    events: [
      { t: "7:00 AM", ic: "meet", title: "REGISTRATION & BREAKFAST", sub: "Centre des Congrès de Québec – Food Hall", desc: "Registration, buffet breakfast and 1×1 meeting check-in.", tag: "Networking" },
      { t: "8:00 AM", ic: "podium", title: "OPENING KEYNOTES", sub: "Government & Industry Leaders", desc: "Ministers and executives open THE Event's Producers & Developers day.", tag: "Keynote" },
      { t: "9:00 AM", ic: "people", title: "PRODUCER PRESENTATIONS", sub: "Producers & Developers – Room 400C", desc: "Back-to-back presentations from leading gold and base metal producers.", tag: "Presentations" },
      { t: "12:15 PM", ic: "panel", title: "NEXT-GEN MINING CAPITAL", sub: "Panel – Room 400C", desc: "The shift to sustainable, production-linked finance.", tag: "Panel" },
      { t: "3:00 PM", ic: "meet", title: "1×1 INVESTOR MEETINGS", sub: "Presented by Ventum Capital Markets – 400 A-B", desc: "Privately arranged meetings between companies and investors.", tag: "Meetings" },
      { t: "6:30 PM", ic: "gala", title: "SPONSORS GALA & CASINO NIGHT", sub: "Salon Galaxie / Galaxy Lounge", desc: "Coreshack and casino networking evening — dress to impress.", tag: "Networking" },
    ],
    featured: {
      art: "stage",
      title: "IMW PLENARY SESSIONS — NATIONAL INDIGENOUS SYMPOSIUM",
      date: "Tuesday, June 2, 2026",
      time: "9:00 AM – 4:30 PM",
      loc: "Beaufort Room, 2nd Floor",
      addr: "Quebec Hilton",
      who: "Host & Emcee: Lyndsay Malchuk, Apaton Finance",
      about: "A full day of plenary sessions — the geopolitical climate, SMRs for remote mining and Japanese investment — followed by the National Indigenous Symposium on Mining & Investment.",
    },
  },
  {
    tab: "Wed, June 3",
    head: "Wednesday, June 3, 2026",
    events: [
      { t: "7:00 AM", ic: "meet", title: "REGISTRATION & BREAKFAST", sub: "Lobby Area – Food Hall", desc: "Registration, breakfast and 1×1 meetings throughout the day.", tag: "Networking" },
      { t: "8:05 AM", ic: "podium", title: "QUÉBEC CRITICAL MINERALS STRATEGY", sub: "Keynote – Room 400C", desc: "Québec's strategy for the development of critical and strategic minerals.", tag: "Keynote" },
      { t: "9:45 AM", ic: "panel", title: "BEYOND THE MINE: SILVER SCARCITY", sub: "Panel – Room 400C", desc: "The physical silver scarcity and what it means for producers.", tag: "Panel" },
      { t: "12:15 PM", ic: "panel", title: "QUÉBEC FINANCING ECOSYSTEM", sub: "Québec Spotlight", desc: "Institutional investors on financing critical minerals in Québec.", tag: "Spotlight" },
      { t: "2:45 PM", ic: "panel", title: "POWERING THE TRANSITION", sub: "Critical Metals Panel", desc: "Copper, nickel, niobium and the metals powering the energy transition.", tag: "Panel" },
      { t: "6:00 PM", ic: "drink", title: "SPONSORS COCKTAILS & CORESHACK", sub: "Salon Galaxie Lounge", desc: "Evening cocktails and coreshack networking.", tag: "Networking" },
      { t: "9:00 PM", ic: "gala", title: "IMW AFTER DARK", sub: "Red Cloud Connect Lounge – QCC", desc: "Late-night networking event for the whole mining week.", tag: "Networking" },
    ],
    featured: {
      art: "gala",
      title: "IMW AFTER DARK",
      date: "Wednesday, June 3, 2026",
      time: "9:00 PM – Midnight",
      loc: "Loggia",
      addr: "Centre des congrès de Québec",
      who: "All IMW Attendees",
      about: "The signature late-night gathering of International Mining Week — music, connections and conversations that carry the industry forward.",
    },
  },
  {
    tab: "Thu, June 4",
    head: "Thursday, June 4, 2026",
    events: [
      { t: "8:05 AM", ic: "podium", title: "KEYNOTE: APART FROM GOLD, WHAT ELSE?", sub: "Adrian Day Asset Management", desc: "A contrarian look at value across the metals complex.", tag: "Keynote" },
      { t: "9:45 AM", ic: "panel", title: "YUKON SPOTLIGHT", sub: "Regional Exploration Showcase", desc: "Explorers and developers active across the Yukon.", tag: "Spotlight" },
      { t: "12:00 PM", ic: "panel", title: "NEWFOUNDLAND & LABRADOR SPOTLIGHT", sub: "Government & Company Showcase", desc: "Opening keynote and panel on Atlantic Canada's mining momentum.", tag: "Spotlight" },
      { t: "1:45 PM", ic: "panel", title: "WHAT MAKES A SUCCESSFUL JUNIOR?", sub: "Panel – Room 400C", desc: "Veteran CEOs on building juniors that endure.", tag: "Panel" },
      { t: "3:45 PM", ic: "people", title: "STUDENT PARTNERSHIP AWARDS", sub: "SHE-Co & Student Initiatives", desc: "Celebrating the next generation of mining professionals.", tag: "Presentations" },
      { t: "4:00 PM", ic: "drink", title: "AU REVOIR COCKTAILS", sub: "Presented by IR.INC – Red Cloud Connect Lounge", desc: "Farewell cocktails to close the conference program.", tag: "Networking" },
    ],
    featured: {
      art: "gala",
      title: "QMA GALA & DISTINCTION AWARDS",
      date: "Thursday, June 4, 2026",
      time: "6:00 PM – 11:00 PM",
      loc: "Quebec Hilton",
      addr: "1100 Boul. René-Lévesque E, Québec",
      who: "QMA Conference Attendees",
      about: "The Québec Mining Association's gala evening and Distinction Awards close out the QMA conference at the Quebec Hilton.",
    },
  },
  {
    tab: "Fri, June 5",
    head: "Friday, June 5, 2026",
    events: [
      { t: "9:00 AM", ic: "tour", title: "MINE SITE & FACILITY TOURS", sub: "Regional Site Visits", desc: "Guided visits to operating mines and processing facilities.", tag: "Tour" },
      { t: "10:00 AM", ic: "meet", title: "PARTNER EVENTS & WORKSHOPS", sub: "Various Venues", desc: "Specialized workshops hosted by IMW partner organizations.", tag: "Workshops" },
      { t: "12:30 PM", ic: "hand", title: "CLOSING LUNCH", sub: "Networking Lunch", desc: "A final opportunity to connect before the week wraps.", tag: "Networking" },
      { t: "2:00 PM", ic: "flag", title: "IMW CLOSING CEREMONY", sub: "Highlights & 2027 Announcement", desc: "Week highlights, awards and the road to IMW 2027.", tag: "Plenary Session" },
    ],
    featured: {
      art: "tour",
      title: "MINE SITE & FACILITY TOURS",
      date: "Friday, June 5, 2026",
      time: "9:00 AM – 12:00 PM",
      loc: "Departures from QCC",
      addr: "Centre des Congrès de Québec",
      who: "Pre-Registration Required",
      about: "See mining in action with guided visits to regional operations — transportation provided, spaces limited.",
    },
  },
];

export default function AgendaView() {
  const [agIdx, setAgIdx] = useState<number>(0); // -1 = all days, 0 = Mon, etc.
  const [pdfPage, setPdfPage] = useState<number>(0);
  const [pdfZoom, setPdfZoom] = useState<number>(100);

  const activeDay = agIdx >= 0 ? IMW_AGENDA[agIdx] : null;
  const featured = activeDay ? activeDay.featured : IMW_AGENDA[0].featured;

  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = IMW_PDF_PAGES[pdfPage];
    link.download = `IMW-2026-Official-Schedule-Page-${pdfPage + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pview on" id="pv-agenda">
      {/* AGENDA HERO */}
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

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full text-left">
          <div className="max-w-3xl">
            <span className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-4">
              AGENDA
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              IMW 2026 Agenda
            </h1>
            <div className="w-14 h-[3px] bg-[#005B82] my-5 rounded-full"></div>
            <p className="text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed mb-8">
              Explore the full schedule of sessions, keynotes, panels and networking{"\u00a0"}events.
            </p>
            <div className="ag-hero-btns flex flex-wrap items-center gap-3">
              <a className="btn-red" href="#agPdf">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round">
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M4 9.5h16M8 3v4M16 3v4" />
                </svg>{" "}
                VIEW FULL SCHEDULE (PDF)
              </a>
              <button className="btn-ghost" onClick={handleDownloadPdf}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v11M7.5 11.5L12 16l4.5-4.5M5 19.5h14" />
                </svg>{" "}
                DOWNLOAD AGENDA
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* AGENDA MAIN */}
      <section className="agenda-main py-6 sm:py-10">
        {/* STANDALONE WIDE FEATURED EVENT CARD (Matches Image 1) */}
        <div className="wrap mb-8 sm:mb-10">
          <div className="feat-card">
            <div className="fc-img">
              <RenderArt theme={featured.art} src={featured.img} />
            </div>
            <div className="fc-body">
              <span className="fc-pill">FEATURED EVENT</span>
              <h3>{featured.title}</h3>
              <div className="fc-meta">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round">
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M4 9.5h16M8 3v4M16 3v4" />
                </svg>
                <span>{featured.date}</span>
              </div>
              <div className="fc-meta">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.5V12l3 2" />
                </svg>
                <span>{featured.time}</span>
              </div>
              <div className="fc-meta">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round">
                  <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                  <circle cx="12" cy="11" r="2.3" />
                </svg>
                <span>
                  {featured.loc}
                  <small>{featured.addr}</small>
                </span>
              </div>
              <div className="fc-meta">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                  <circle cx="16.5" cy="9" r="2.6" />
                  <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
                </svg>
                <span>{featured.who}</span>
              </div>
              <div className="fc-about">
                <b>About this Event</b>
                <p>{featured.about}</p>
                <a className="btn-navy" href="#agPdf">
                  VIEW DETAILS{" "}
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>



        {/* OFFICIAL SCHEDULE — PDF Section */}
        <div className="wrap ag-pdf mt-8 sm:mt-12" id="agPdf">
          <div className="sec-title">
            <h2>OFFICIAL SCHEDULE — PDF</h2>
          </div>
          <p className="text-center text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-6 whitespace-nowrap overflow-x-auto">
            Tickets for THE Mining Investment Event, ITFA and QMA are available at{" "}
            <a href="https://www.internationalminingweek.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#005B82] hover:underline">
              internationalminingweek.com
            </a>
            ,{" "}
            <a href="https://www.itfa.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#005B82] hover:underline">
              itfa.com
            </a>{" "}
            and{" "}
            <a href="https://www.amq.ca" target="_blank" rel="noopener noreferrer" className="font-bold text-[#005B82] hover:underline">
              amq.ca
            </a>
            .
          </p>

          <div className="pdfv">
            {/* Sidebar Thumbnails */}
            <div className="pdfv-thumbs">
              {IMW_PDF_PAGES.map((pageSrc, i) => (
                <button
                  key={i}
                  className={`pdfv-thumb ${pdfPage === i ? "on" : ""}`}
                  onClick={() => setPdfPage(i)}
                  aria-label={`View page ${i + 1}`}
                >
                  <img src={pageSrc} alt={`Thumbnail Page ${i + 1}`} />
                  <span>{i + 1}</span>
                </button>
              ))}
            </div>

            {/* Main Stage & Control Bar */}
            <div className="pdfv-main">
              <div className="pdfv-bar">
                <button
                  className="pdfv-btn"
                  onClick={() => setPdfPage((prev) => Math.max(0, prev - 1))}
                  disabled={pdfPage === 0}
                  aria-label="Previous page"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 6l-6 6 6 6" />
                  </svg>
                </button>
                <span className="lbl">{pdfPage + 1} / {IMW_PDF_PAGES.length}</span>
                <button
                  className="pdfv-btn"
                  onClick={() => setPdfPage((prev) => Math.min(IMW_PDF_PAGES.length - 1, prev + 1))}
                  disabled={pdfPage === IMW_PDF_PAGES.length - 1}
                  aria-label="Next page"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 6l6 6-6 6" />
                  </svg>
                </button>
                <span className="grow"></span>
                <button
                  className="pdfv-btn"
                  onClick={() => setPdfZoom((z) => Math.max(60, z - 20))}
                  aria-label="Zoom out"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M6 12h12" />
                  </svg>
                </button>
                <span className="lbl">{pdfZoom}%</span>
                <button
                  className="pdfv-btn"
                  onClick={() => setPdfZoom((z) => Math.min(180, z + 20))}
                  aria-label="Zoom in"
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </button>
                <button className="pdfv-dl" onClick={handleDownloadPdf}>
                  DOWNLOAD PDF{" "}
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v11M7.5 11.5L12 16l4.5-4.5M5 19.5h14" />
                  </svg>
                </button>
              </div>

              <div className="pdfv-stage">
                <img
                  src={IMW_PDF_PAGES[pdfPage]}
                  alt={`Official Schedule Page ${pdfPage + 1}`}
                  style={{ transform: `scale(${pdfZoom / 100})`, transformOrigin: "top center" }}
                  className="w-full block transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
