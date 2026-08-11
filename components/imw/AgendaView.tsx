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

function RenderArt({ theme }: { theme: string }) {
  if (theme === "golf") {
    return (
      <svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
        <defs>
          <linearGradient id="gsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f5c46b" />
            <stop offset=".55" stopColor="#e89a4e" />
            <stop offset="1" stopColor="#c9762f" />
          </linearGradient>
        </defs>
        <rect width="560" height="320" fill="url(#gsky)" />
        <circle cx="470" cy="88" r="40" fill="#fbe7ac" />
        <g fill="#2f4a20">
          <ellipse cx="70" cy="160" rx="34" ry="48" />
          <ellipse cx="120" cy="150" rx="26" ry="40" />
          <ellipse cx="500" cy="150" rx="30" ry="44" />
          <ellipse cx="540" cy="164" rx="22" ry="34" />
        </g>
        <g fill="#3d2a1a">
          <rect x="200" y="120" width="180" height="60" />
          <path d="M200 120 L290 78 L380 120 Z" />
          <rect x="248" y="96" width="14" height="24" />
        </g>
        <g fill="#f3d98c" opacity=".85">
          <rect x="216" y="136" width="10" height="12" />
          <rect x="244" y="136" width="10" height="12" />
          <rect x="272" y="136" width="10" height="12" />
          <rect x="300" y="136" width="10" height="12" />
          <rect x="328" y="136" width="10" height="12" />
          <rect x="356" y="136" width="10" height="12" />
        </g>
        <path d="M0 320 L0 210 Q140 180 280 196 Q430 212 560 190 L560 320 Z" fill="#4c7a2e" />
        <path d="M0 320 L0 258 Q200 236 380 252 Q490 260 560 248 L560 320 Z" fill="#5d9138" />
        <ellipse cx="330" cy="268" rx="90" ry="18" fill="#6da344" />
        <circle cx="300" cy="262" r="9" fill="#fff" />
        <ellipse cx="300" cy="273" rx="12" ry="3" fill="#3f6a26" opacity=".5" />
        <g>
          <rect x="368" y="216" width="3" height="44" fill="#333" />
          <path d="M371 216 L392 223 L371 230 Z" fill="#03516E" />
        </g>
      </svg>
    );
  }
  if (theme === "gala") {
    return (
      <svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
        <defs>
          <linearGradient id="gala" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#160f22" />
            <stop offset="1" stopColor="#301631" />
          </linearGradient>
        </defs>
        <rect width="560" height="320" fill="url(#gala)" />
        <g fill="#f3b95c" opacity=".7">
          <circle cx="80" cy="60" r="2" />
          <circle cx="180" cy="40" r="1.6" />
          <circle cx="300" cy="66" r="2" />
          <circle cx="420" cy="44" r="1.6" />
          <circle cx="500" cy="70" r="2" />
        </g>
        <g fill="#f0c96a">
          <path d="M280 60 l6 12 13 2-9.5 9 2.3 13-11.8-6.3-11.8 6.3 2.3-13-9.5-9 13-2z" />
        </g>
        <g opacity=".85">
          <ellipse cx="150" cy="250" rx="60" ry="12" fill="#3a2340" />
          <ellipse cx="400" cy="262" rx="76" ry="14" fill="#3a2340" />
        </g>
        <g fill="#1d1428">
          <circle cx="140" cy="200" r="16" />
          <rect x="126" y="216" width="28" height="52" rx="8" />
          <circle cx="190" cy="206" r="14" />
          <rect x="178" y="220" width="24" height="46" rx="7" />
          <circle cx="380" cy="196" r="16" />
          <rect x="366" y="212" width="28" height="54" rx="8" />
          <circle cx="430" cy="204" r="14" />
          <rect x="418" y="218" width="24" height="48" rx="7" />
        </g>
        <g fill="#e8cdd2" opacity=".25">
          <path d="M60 320 L110 160 L160 320 Z" />
          <path d="M330 320 L380 150 L430 320 Z" />
        </g>
      </svg>
    );
  }
  if (theme === "stage") {
    return (
      <svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
        <defs>
          <linearGradient id="stg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#101a2c" />
            <stop offset="1" stopColor="#1c2c4a" />
          </linearGradient>
        </defs>
        <rect width="560" height="320" fill="url(#stg)" />
        <g fill="#e8cdd2" opacity=".18">
          <path d="M120 320 L180 100 L240 320 Z" />
          <path d="M320 320 L380 100 L440 320 Z" />
        </g>
        <rect x="90" y="220" width="380" height="26" rx="4" fill="#0b1322" />
        <rect x="110" y="150" width="340" height="70" rx="6" fill="#22314e" />
        <g fill="#101a2c">
          <circle cx="180" cy="130" r="13" />
          <rect x="169" y="143" width="22" height="34" rx="6" />
          <circle cx="280" cy="126" r="14" />
          <rect x="268" y="140" width="24" height="37" rx="6" />
          <circle cx="380" cy="130" r="13" />
          <rect x="369" y="143" width="22" height="34" rx="6" />
        </g>
        <g fill="#03516E">
          <rect x="252" y="176" width="56" height="8" rx="2" />
        </g>
        <g fill="#f3b95c" opacity=".8">
          <rect x="130" y="162" width="8" height="8" />
          <rect x="422" y="162" width="8" height="8" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <defs>
        <linearGradient id="tsk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fb6d9" />
          <stop offset=".7" stopColor="#cfe0ee" />
          <stop offset="1" stopColor="#a8bfd2" />
        </linearGradient>
      </defs>
      <rect width="560" height="320" fill="url(#tsk)" />
      <circle cx="110" cy="70" r="34" fill="#fdf3d0" />
      <path d="M0 230 L120 140 L230 230 Z" fill="#5a6b7d" />
      <path d="M170 230 L300 120 L440 230 Z" fill="#41505f" />
      <path d="M380 230 L480 160 L560 230 Z" fill="#5a6b7d" />
      <path d="M282 138 L300 120 L318 138 L300 152 Z" fill="#e8eef4" />
      <rect y="230" width="560" height="90" fill="#7a5a3a" />
      <path d="M0 250 Q140 238 280 248 Q430 258 560 246 L560 262 Q420 272 270 262 Q130 254 0 264 Z" fill="#5e4127" />
      <g>
        <rect x="200" y="196" width="160" height="46" rx="8" fill="#03516E" />
        <rect x="212" y="204" width="30" height="18" rx="3" fill="#e8eef4" />
        <rect x="250" y="204" width="30" height="18" rx="3" fill="#e8eef4" />
        <rect x="288" y="204" width="30" height="18" rx="3" fill="#e8eef4" />
        <rect x="326" y="204" width="22" height="18" rx="3" fill="#e8eef4" />
        <circle cx="228" cy="244" r="10" fill="#1a1a1a" />
        <circle cx="332" cy="244" r="10" fill="#1a1a1a" />
      </g>
    </svg>
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
      <section className="ab-hero relative overflow-hidden">
        <img
          src="/imw_hero.png"
          alt="International Mining Week Event Hero"
          className="hero-art absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="hero-scrim"></div>
        <div className="wrap ag-hero-inner relative z-10">
          <div className="eyebrow">AGENDA</div>
          <h1>IMW 2026 Agenda</h1>
          <p className="pt-dek">Explore the full schedule of sessions, keynotes, panels, and networking events.</p>
          <div className="ag-hero-btns">
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
      </section>

      {/* DAY TABS */}
      <div className="day-tabs">
        <button className={`day-tab all ${agIdx === -1 ? "on" : ""}`} onClick={() => setAgIdx(-1)}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round">
            <rect x="4" y="5" width="16" height="15" rx="2" />
            <path d="M4 9.5h16M8 3v4M16 3v4" />
          </svg>{" "}
          All Days
        </button>
        {IMW_AGENDA.map((d, i) => (
          <button key={i} className={`day-tab ${agIdx === i ? "on" : ""}`} onClick={() => setAgIdx(i)}>
            {d.tab}
          </button>
        ))}
      </div>

      {/* AGENDA MAIN */}
      <section className="agenda-main py-10 sm:py-16">
        {/* STANDALONE WIDE FEATURED EVENT CARD (Matches Image 1) */}
        <div className="wrap mb-12 sm:mb-16">
          <div className="feat-card">
            <div className="fc-img">
              <RenderArt theme={featured.art} />
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
        <div className="wrap ag-pdf mt-16 sm:mt-24" id="agPdf">
          <div className="sec-title">
            <h2>OFFICIAL SCHEDULE — PDF</h2>
          </div>
          <p className="ag-tickets">
            Tickets for THE Mining Investment Event, ITFA and QMA are available at{" "}
            <a href="https://www.internationalminingweek.com" target="_blank" rel="noopener">
              internationalminingweek.com
            </a>
            ,{" "}
            <a href="https://www.itfa.com" target="_blank" rel="noopener">
              itfa.com
            </a>{" "}
            and{" "}
            <a href="https://www.amq.ca" target="_blank" rel="noopener">
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

        {/* Experience Plan Band */}
        <div className="wrap mt-12 sm:mt-16">
          <div className="plan-band">
            <div className="plan-ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M4 9.5h16M8 3v4M16 3v4M8 13.5h2M11 13.5h2M14 13.5h2M8 16.5h2M11 16.5h2" />
              </svg>
            </div>
            <div className="plan-copy">
              <h3>Plan Your IMW Experience</h3>
              <p>Build your personalized agenda and make the most of your week in Québec City.</p>
            </div>
            <button className="btn-outline-red" onClick={handleDownloadPdf}>
              VIEW FULL SCHEDULE (PDF){" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11M7.5 11.5L12 16l4.5-4.5M5 19.5h14" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
