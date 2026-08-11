import React from "react";
import Link from "next/link";
import HostCity from "./HostCity";

export default function AboutView() {
  return (
    <div className="pview on" id="pv-about">
      {/* ABOUT HERO */}
      <section className="hero">
        <img
          src="/imw_hero.png"
          alt="Québec City Château Frontenac — International Mining Week"
          className="hero-art object-cover w-full h-full"
        />
        <div className="hero-scrim"></div>
        <div className="wrap hero-inner">
          <div className="eyebrow">ABOUT IMW</div>
          <h1>
            UNITING THE GLOBAL<br />
            MINING<br />
            <span className="rd">INDUSTRY.</span>
          </h1>
          <p className="hero-dek">
            For one week of events, connections and opportunities that drive the future of mining.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission">
        <div className="wrap mission-grid">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>
              OUR MISSION
            </div>
            <h2>THE Nexus of International Mining</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0 18px", flexWrap: "wrap" }}>
              {["INVESTORS", "ISSUERS", "GOVERNMENTS", "SUPPLY CHAINS"].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "var(--red)",
                    background: "var(--red-soft)",
                    borderRadius: "20px",
                    border: "1px solid rgba(3, 81, 110, 0.12)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mp" style={{ marginBottom: "12px" }}>
              Join us for North America's first International Mining Week, taking place from June 1 to 5, 2026, in Quebec City, Canada.
            </p>
            <p className="mp" style={{ marginBottom: "12px" }}>
              IMW will showcase a collaboration among key partners hosting concurrent activities alongside THE Mining Investment Event.
            </p>
            <p className="mp" style={{ marginBottom: "24px" }}>
              This unique partnership aims to unite global mining firms, related industries, supply chain specialists, investors, and governmental representatives.
            </p>
            <Link className="btn-outline-red" href="/agenda">
              LEARN MORE ABOUT IMW{" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="mission-photo flex justify-center items-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80">
              <img
                src="/our_mission_networking.png"
                alt="Business executives networking at International Mining Week"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div>
            <div className="feat-row">
              <span className="feat-ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                  <circle cx="16.5" cy="9" r="2.6" />
                  <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
                </svg>
              </span>
              <div>
                <b>Global Industry Network</b>
                <p>Connect with leaders, investors, companies and innovators from around the world.</p>
              </div>
            </div>
            <div className="feat-row">
              <span className="feat-ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9.5 18h5M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.2 1.3 1.3 2.1h4.4c.1-.8.5-1.5 1.3-2.1A6 6 0 0 0 12 3z" />
                </svg>
              </span>
              <div>
                <b>Insightful Content</b>
                <p>Access high-quality conferences, keynotes and panels addressing the most important industry topics.</p>
              </div>
            </div>
            <div className="feat-row">
              <span className="feat-ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15" />
                </svg>
              </span>
              <div>
                <b>Real Opportunities</b>
                <p>Build partnerships, discover solutions and create opportunities that move the industry forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers">
        <div className="wrap numbers-grid">
          <div className="num-label">
            IMW BY THE<br />
            NUMBERS
          </div>
          <div className="nb-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <rect x="4" y="5" width="16" height="15" rx="2" />
              <path d="M4 9.5h16M8 3v4M16 3v4M8 13.5h2M14 13.5h2M8 17h2" />
            </svg>
            <b>15+</b>
            <span>Partner Events</span>
          </div>
          <div className="nb-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
            </svg>
            <b>100+</b>
            <span>Countries Represented</span>
          </div>
          <div className="nb-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
              <circle cx="16.5" cy="9" r="2.6" />
              <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
            </svg>
            <b>10,000+</b>
            <span>Industry Professionals</span>
          </div>
          <div className="nb-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7.5V12l3 2" />
            </svg>
            <b>1</b>
            <span>Unmissable Week</span>
          </div>
        </div>
      </section>

      {/* WHY ATTEND */}
      <section className="why">
        <div className="wrap why-grid">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>
              WHY ATTEND
            </div>
            <h2>
              A Week.<br />
              Unlimited Value.
            </h2>
            <p className="wp">
              From conferences and summits to networking receptions and site visits, IMW delivers unmatched value for every participant.
            </p>
            <Link className="btn-outline-red" href="/agenda">
              VIEW EVENTS{" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="why-cards">
            <div className="why-card">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="6" cy="6" r="2.4" />
                <circle cx="18" cy="6" r="2.4" />
                <circle cx="6" cy="18" r="2.4" />
                <circle cx="18" cy="18" r="2.4" />
                <circle cx="12" cy="12" r="2.4" />
                <path d="M8 7.5l2.2 2.7M16 7.5l-2.2 2.7M8 16.5l2.2-2.7M16 16.5l-2.2-2.7" />
              </svg>
              <b>Connect</b>
              <p>Meet the right people and expand your global network.</p>
            </div>
            <div className="why-card">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M20 20l-4-4" />
              </svg>
              <b>Discover</b>
              <p>Explore new ideas, technologies and market opportunities.</p>
            </div>
            <div className="why-card">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 18l5-6 3.5 3L19 7" />
                <path d="M14.5 7H19v4.5" />
              </svg>
              <b>Learn</b>
              <p>Gain insights from industry experts and global leaders.</p>
            </div>
            <div className="why-card">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="12" cy="12" r="4.8" />
                <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
              </svg>
              <b>Lead</b>
              <p>Be part of shaping the future of the mining industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOST CITY */}
      <HostCity />
    </div>
  );
}
