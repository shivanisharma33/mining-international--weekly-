import React from "react";
import Link from "next/link";

export default function IMWFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="ft">
          <div className="ft-brand">
            <Link className="brand" href="/" aria-label="International Mining Week">
              <div className="imw-logo-box">
                <span className="imw-logo-top">International</span>
                <span className="imw-logo-bottom">MINING WEEK</span>
              </div>
            </Link>
            <p>Uniting the global mining industry for one week of events, connections and opportunities.</p>
            <div className="ft-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinejoin="round">
                  <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
                  <path d="M10.5 10l4 2-4 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>IMW</h4>
            <Link className="lnk" href="/about">About IMW</Link>
            <Link className="lnk" href="/about">What is IMW?</Link>
            <Link className="lnk" href="/about">Host City</Link>
            <Link className="lnk" href="/about">Sustainability</Link>
            <Link className="lnk" href="/about">Media Kit</Link>
          </div>
          <div>
            <h4>GET IN TOUCH</h4>
            <ul className="ft-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
                info@internationalminingweek.com
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                +1 418 555 1234
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                  <circle cx="12" cy="11" r="2.3" />
                </svg>
                Québec City, Québec, Canada
              </li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-bottom-inner justify-center text-center">
            <span>© 2026 International Mining Week. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
