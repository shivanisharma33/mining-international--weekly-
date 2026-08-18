import React from "react";

export default function OurMission() {
  return (
    <section className="ab2-sec" id="ab2-mission">
      <div className="ab2-ms">
        <div className="ab2-ms-visual">
          <div className="ab2-ms-photo">
            <img
              src="/our_mission_networking.png"
              alt="Business executives networking at International Mining Week"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ab2-ms-chip">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9.5h16M8 3v4M16 3v4"/></svg>June 1–5, 2026 · Québec City
          </div>
        </div>
        <div className="ab2-ms-body">
          <div className="ab2-eyebrow ab2-eyebrow-dash">OUR MISSION</div>
          <h2 className="ab2-ms-h">THE Nexus of<br /><em>International Mining</em></h2>
          <p>Join us for North America's first International Mining Week, taking place from June 1 to 5, 2026, in Quebec City, Canada.</p>
          <p>IMW will showcase a collaboration among key partners hosting concurrent activities alongside THE Mining Investment Event.</p>
          <p>This unique partnership aims to unite global mining firms, related industries, supply chain specialists, investors, and governmental representatives.</p>
          <div className="ab2-ms-meta">
            <div className="ab2-ms-mi">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9.5h16M8 3v4M16 3v4"/></svg>
              <div><em>DATE</em><b>June 1–5, 2026</b></div>
            </div>
            <div className="ab2-ms-mi">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z"/><circle cx="12" cy="11" r="2.4"/></svg>
              <div><em>LOCATION</em><b>Québec City, Canada</b></div>
            </div>
          </div>
          <div className="ab2-ms-cta">
            <a className="ab2-btn-solid" href="/assets/images/about_english.pdf" target="_blank" rel="noopener noreferrer">
              LEARN MORE ABOUT IMW <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="ab2-delivers ab2-delivers-row">
        <div className="ab2-dl-t">WHAT IMW DELIVERS</div>
        <div className="ab2-dl-cols">
          <div className="ab2-dl">
            <span className="ab2-dl-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19"/><circle cx="16.5" cy="9" r="2.6"/><path d="M16 14.6c2.4.1 4 1.6 4.5 4.4"/></svg></span>
            <div><b>Global Industry Network</b><p>Connect with leaders, investors, companies and innovators from around the world.</p></div>
          </div>
          <div className="ab2-dl">
            <span className="ab2-dl-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round"><path d="M9.5 18h5M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.2 1.3 1.3 2.1h4.4c.1-.8.5-1.5 1.3-2.1A6 6 0 0 0 12 3z"/></svg></span>
            <div><b>Insightful Content</b><p>Access high-quality conferences, keynotes and panels covering key industry topics.</p></div>
          </div>
          <div className="ab2-dl">
            <span className="ab2-dl-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15"/></svg></span>
            <div><b>Real Opportunities</b><p>Build partnerships, discover solutions and create opportunities that move the industry forward.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
