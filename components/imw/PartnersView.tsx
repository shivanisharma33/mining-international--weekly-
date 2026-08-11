import React from "react";

export default function PartnersView() {
  return (
    <div className="pview on" id="pv-partners">
      {/* PARTNERS HERO */}
      <section className="ab-hero pt-hero relative overflow-hidden">
        <img
          src="/imw_hero.png"
          alt="International Mining Week Partners Hero"
          className="hero-art absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="hero-scrim"></div>
        <div className="wrap pt-hero-inner relative z-10">
          <div className="eyebrow">OUR PARTNERS</div>
          <h1>
            Stronger Together.<br />
            <span className="rd">Greater Impact.</span>
          </h1>
          <p className="pt-dek">Our partners play a vital role in making International Mining Week the leading global platform for the mining industry.</p>
          <div className="pt-mini">
            <div className="pt-mini-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                <circle cx="16.5" cy="9" r="2.6" />
                <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
              </svg>
              <div>
                <b>Connect</b>
                <p>Build valuable relationships</p>
              </div>
            </div>
            <div className="pt-mini-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11v3l3 1 2 5 2-1-1.5-4H11l7 4V5l-7 4H7z" />
                <path d="M19 9a4 4 0 0 1 0 5" />
              </svg>
              <div>
                <b>Elevate</b>
                <p>Increase brand visibility and recognition</p>
              </div>
            </div>
            <div className="pt-mini-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="12" cy="12" r="4.8" />
                <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
              </svg>
              <div>
                <b>Impact</b>
                <p>Drive the future of the mining industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS BODY */}
      <section className="partners-body">
        <div className="wrap">
          <div className="pb-title">
            <h2>OUR PARTNERS</h2>
          </div>
          <p className="pb-intro">We are proud to collaborate with industry-leading organizations and companies that share our vision for a sustainable and innovative future.</p>

          <div className="tier-label">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M12 3.6l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.2 6.9 19l1.1-5.6-4.2-3.9 5.7-.7z" />
            </svg>
            <b>FOUNDING PARTNERS</b>
          </div>
          <div className="fp-strip">
            <div>
              <svg width="200" height="82" viewBox="0 0 230 96">
                <circle cx="42" cy="40" r="30" fill="#c8102e" />
                <path d="M28 54 L42 22 L50 40 L56 30 L64 54 Z" fill="#fff" opacity=".9" />
                <circle cx="58" cy="60" r="16" fill="#8c0f22" />
                <text x="88" y="34" fontFamily="Inter,sans-serif" fontSize="17" fontWeight="600" fill="#131720">
                  Association
                </text>
                <text x="88" y="55" fontFamily="Inter,sans-serif" fontSize="17" fontWeight="600" fill="#131720">
                  minière
                </text>
                <text x="88" y="78" fontFamily="Inter,sans-serif" fontSize="19" fill="#131720">
                  du <tspan fontWeight="700">Québec</tspan>
                </text>
              </svg>
            </div>
            <div>
              <svg width="94" height="94" viewBox="0 0 120 120">
                <g strokeWidth="9" fill="none" strokeDasharray="10 8">
                  <circle cx="60" cy="60" r="44" stroke="#131720" />
                  <circle cx="60" cy="60" r="44" stroke="#c8102e" strokeDasharray="10 26" strokeDashoffset="-18" />
                </g>
                <text x="60" y="70" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="27" fontWeight="900" fill="#131720">
                  ITFA
                </text>
              </svg>
            </div>
            <div>
              <svg width="96" height="96" viewBox="0 0 200 200">
                <defs>
                  <path id="fArcT_pt" d="M 40 100 A 60 60 0 0 1 160 100" />
                  <path id="fArcB_pt" d="M 34 100 A 66 66 0 0 0 166 100" />
                </defs>
                <circle cx="100" cy="100" r="95" fill="#fff" stroke="#131720" strokeWidth="5" />
                <circle cx="100" cy="100" r="70" fill="#131720" />
                <circle cx="100" cy="100" r="58" fill="#fff" />
                <text fontFamily="Georgia,serif" fontSize="17" fontWeight="700" fill="#131720" letterSpacing="3">
                  <textPath href="#fArcT_pt" startOffset="50%" textAnchor="middle">
                    Québec City
                  </textPath>
                </text>
                <text fontFamily="Georgia,serif" fontSize="15" fontWeight="700" fill="#131720" letterSpacing="4">
                  <textPath href="#fArcB_pt" startOffset="50%" textAnchor="middle">
                    Canada
                  </textPath>
                </text>
                <text x="100" y="84" textAnchor="middle" fontFamily="Georgia,serif" fontSize="19" fontWeight="700" fill="#131720">
                  THE
                </text>
                <text x="100" y="102" textAnchor="middle" fontFamily="Georgia,serif" fontSize="15" fontStyle="italic" fill="#131720">
                  Mining
                </text>
                <text x="100" y="118" textAnchor="middle" fontFamily="Georgia,serif" fontSize="15" fontStyle="italic" fill="#131720">
                  Investment
                </text>
                <text x="100" y="138" textAnchor="middle" fontFamily="Georgia,serif" fontSize="18" fontWeight="700" fill="#131720">
                  EVENT
                </text>
              </svg>
            </div>
          </div>

          <div className="tier-label">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M7 4h10l4 5-9 11L3 9z" />
              <path d="M3 9h18M9.5 4L8 9l4 11 4-11-1.5-5" />
            </svg>
            <b>DIAMOND SPONSORS</b>
          </div>
          <div className="logo-grid">
            <div className="logo-tile">
              <svg width="30" height="18" viewBox="0 0 40 24">
                <path d="M4 18 Q14 2 24 8 L36 4 L28 12 Q18 20 4 18 Z" fill="#e2b93b" />
                <path d="M4 18 Q16 12 28 12" stroke="#0c2f33" strokeWidth="2.5" fill="none" />
              </svg>
              <span className="wm" style={{ color: "#0c2f33", fontSize: "16px", letterSpacing: ".04em" }}>
                AGNICO EAGLE
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ fontFamily: "Georgia,serif", color: "#123a6d", fontSize: "21px", letterSpacing: ".18em", borderBottom: "2.5px solid #123a6d", paddingBottom: "4px" }}>
                BARRICK
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ color: "#101820", fontSize: "31px" }}>
                Teck
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ fontFamily: "Georgia,serif", color: "#1a1a1a", fontSize: "20px", letterSpacing: ".16em", border: "1.5px solid #8a6d1f", padding: "7px 16px" }}>
                KINROSS
              </span>
            </div>
          </div>

          <div className="tier-label">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M4 8l4 3 4-6 4 6 4-3-1.5 10h-13z" />
              <path d="M6 20.5h12" strokeLinecap="round" />
            </svg>
            <b>PLATINUM SPONSORS</b>
          </div>
          <div className="logo-grid">
            <div className="logo-tile">
              <span className="wm" style={{ fontFamily: "Georgia,serif", color: "#1a1a1a", fontSize: "20px", letterSpacing: ".2em", fontWeight: 700 }}>
                GLENCORE
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ color: "#003da6", fontSize: "21px", fontStyle: "italic" }}>
                Newmont<sub style={{ fontSize: "9px" }}>.</sub>
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ fontFamily: "'Playfair Display',Georgia,serif", color: "#d5001c", fontSize: "22px", fontWeight: 700 }}>
                Rio Tinto
              </span>
            </div>
            <div className="logo-tile">
              <svg width="26" height="18" viewBox="0 0 34 24">
                <path d="M2 4 L13 20 L17 12 Z" fill="#118e6f" />
                <path d="M17 12 L21 20 L32 4 L20 10 Z" fill="#e2b93b" />
              </svg>
              <span className="wm" style={{ color: "#5c6672", fontSize: "19px", letterSpacing: ".16em" }}>
                VALE
              </span>
            </div>
          </div>

          <div className="tier-label">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="9" r="5" />
              <path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5" />
            </svg>
            <b>GOLD SPONSORS</b>
          </div>
          <div className="logo-grid g5">
            <div className="logo-tile">
              <span className="wm" style={{ color: "#e65400", fontSize: "27px" }}>
                BHP
              </span>
            </div>
            <div className="logo-tile">
              <svg width="30" height="12" viewBox="0 0 40 16">
                <path d="M2 12 Q14 0 38 4 Q22 6 6 14 Z" fill="url(#eraGrad)" />
                <defs>
                  <linearGradient id="eraGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#f0a13c" />
                    <stop offset="1" stopColor="#1f3a8f" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="wm" style={{ color: "#1f2a6d", fontSize: "19px", fontWeight: 600, letterSpacing: ".02em" }}>
                eramet
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ fontFamily: "Georgia,serif", color: "#8a6d1f", fontSize: "17px", letterSpacing: ".04em" }}>
                <span style={{ border: "1.5px solid #8a6d1f", padding: "2px 4px", marginRight: "4px", fontSize: "12px" }}>▦</span>IAMGOLD
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ color: "#c8102e", fontSize: "18px", lineHeight: 1.05, textAlign: "center", whiteSpace: "normal" }}>
                lundin<br />mining
              </span>
            </div>
            <div className="logo-tile">
              <span className="wm" style={{ color: "#131720", fontSize: "23px", fontWeight: 700, letterSpacing: "-.02em" }}>
                metso
              </span>
            </div>
            <div className="logo-tile">
              <svg width="26" height="20" viewBox="0 0 30 24">
                <path d="M2 4h12l-4 7h12l-16 9 5-9H2z" fill="#c8102e" />
              </svg>
              <span className="wm" style={{ color: "#123a6d", fontSize: "12px", lineHeight: 1.2, whiteSpace: "normal", textAlign: "left" }}>
                NATIONAL<br />BANK
              </span>
            </div>
            <div className="logo-tile">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#131720" strokeWidth="2.2" />
                <path d="M15.5 8.5c-.6-1-1.9-1.6-3.4-1.6-1.8 0-3.1.9-3.1 2.3 0 3 6.8 1.5 6.8 4.6 0 1.5-1.4 2.4-3.3 2.4-1.7 0-3.1-.7-3.7-1.9" stroke="#131720" strokeWidth="1.7" fill="none" strokeLinecap="round" />
              </svg>
              <span className="wm" style={{ color: "#131720", fontSize: "15px", letterSpacing: ".1em" }}>
                SANDVIK
              </span>
            </div>
            <div className="logo-tile">
              <svg width="26" height="14" viewBox="0 0 34 18">
                <path d="M2 9 L9 3 L9 7 L16 2 L16 7 L23 3 L23 9 L16 14 L16 10 L9 15 L9 10 Z" fill="#e87722" />
              </svg>
              <span className="wm" style={{ color: "#e87722", fontSize: "16px", fontWeight: 700 }}>
                srk <span style={{ color: "#7b8494", fontWeight: 500 }}>consulting</span>
              </span>
            </div>
            <div className="logo-tile more" style={{ gridColumn: "span 2" }}>
              <b>And More...</b>
              <span>Join our growing list of partners</span>
            </div>
          </div>

          <div className="partner-cta">
            <div className="pc-band">
              <div className="pc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15" />
                </svg>
              </div>
              <div className="pc-copy">
                <h3>Partner With Us</h3>
                <p>Be part of the most important mining event of the year.</p>
              </div>
              <a className="btn-ghost-gold" href="#">
                BECOME A PARTNER{" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
