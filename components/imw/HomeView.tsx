import React from "react";
import Link from "next/link";

export default function HomeView() {
  return (
    <div className="pview on" id="pv-home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <img
          src="/imw_hero.png"
          alt="Québec City Château Frontenac — International Mining Week"
          className="hero-art object-cover w-full h-full"
        />
        <div className="hero-scrim"></div>
        <div className="wrap hero-inner">
          <div className="eyebrow">INTERNATIONAL MINING WEEK</div>
          <h1>
            ONE WEEK.<br />
            INFINITE<br />
            <span className="rd">OPPORTUNITIES.</span>
          </h1>
          <p className="hero-dek">
            The global mining industry comes together in Québec City for a week of events, connections and opportunities.
          </p>
          <div className="hero-btns">
            <a className="btn-red" href="#">
              REGISTER NOW{" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn-ghost" href="#explore">
              VIEW EVENTS{" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* info card */}
      <div className="info-card">
        <div className="ic-item">
          <span className="ic-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <rect x="4" y="5" width="16" height="15" rx="2" />
              <path d="M4 9.5h16M8 3v4M16 3v4M8 13.5h2M14 13.5h2M8 17h2" />
            </svg>
          </span>
          <div>
            <b>June 1–5, 2026</b>
            <p>Five days of high-impact events and activities.</p>
          </div>
        </div>
        <div className="ic-item">
          <span className="ic-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
              <circle cx="12" cy="11" r="2.3" />
            </svg>
          </span>
          <div>
            <b>
              Québec City,<br />
              Canada
            </b>
            <p>A world-class destination rich in history and culture.</p>
          </div>
        </div>
        <div className="ic-item">
          <span className="ic-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
              <circle cx="16.5" cy="9" r="2.6" />
              <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
            </svg>
          </span>
          <div>
            <b>
              15+ Partner Events<br />
              Across the Week
            </b>
            <p>Conferences, forums, summits and networking opportunities.</p>
          </div>
        </div>
      </div>

      {/* ================= EXPLORE ================= */}
      <section className="explore" id="explore">
        <div className="wrap">
          <div className="sec-title">
            <h2>EXPLORE THE WEEK</h2>
          </div>
          <div className="explore-grid">
            <Link className="ex-card" href="/agenda">
              <span className="ex-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M4 9.5h16M8 3v4M16 3v4M8 13.5h2M11 13.5h2M14 13.5h2M8 16.5h2M11 16.5h2" />
                </svg>
              </span>
              <h3>Partner Events</h3>
              <p>Discover a comprehensive lineup of conferences, forums, summits and networking events throughout the week.</p>
              <span className="ex-arrow">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link className="ex-card" href="/agenda">
              <span className="ex-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
                </svg>
              </span>
              <h3>Agenda</h3>
              <p>View the full schedule of daily sessions, keynotes, panels and networking activities to plan your week.</p>
              <span className="ex-arrow">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link className="ex-card" href="/speakers">
              <span className="ex-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
                  <circle cx="12" cy="8.5" r="3.4" />
                  <path d="M5.5 20c.8-3.6 3.3-5.5 6.5-5.5s5.7 1.9 6.5 5.5" />
                  <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" opacity=".35" />
                </svg>
              </span>
              <h3>Speakers</h3>
              <p>Explore the lineup of global industry leaders, experts and visionaries shaping the future of mining.</p>
              <span className="ex-arrow">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link className="ex-card" href="/partners">
              <span className="ex-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15" />
                </svg>
              </span>
              <h3>Sponsors</h3>
              <p>Meet our valued sponsors who are driving innovation, supporting the industry and making this week possible.</p>
              <span className="ex-arrow">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOUNDING PARTNERS ================= */}
      <section className="founding" id="founding">
        <div className="wrap">
          <div className="sec-title">
            <h2>FOUNDING PARTNERS</h2>
          </div>
          <div className="fp-grid">
            <div className="fp-item">
              <div className="fp-logo">
                <img src="/image 93.png" alt="Association minière du Québec" className="max-h-[85px] w-auto object-contain" />
              </div>
              <p>Representing Québec's mining industry and supporting a responsible and sustainable future.</p>
            </div>
            <div className="fp-item">
              <div className="fp-logo">
                <img src="/image 92.png" alt="ITFA" className="max-h-[85px] w-auto object-contain" />
              </div>
              <p>A global non-profit organization advancing trade, investment and development in the extractive sector.</p>
            </div>
            <div className="fp-item">
              <div className="fp-logo">
                <img src="/founding_the_event.png" alt="THE Mining Investment Event" className="max-h-[105px] w-auto object-contain" />
              </div>
              <p>The premier mining investment event connecting investors, companies and opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
