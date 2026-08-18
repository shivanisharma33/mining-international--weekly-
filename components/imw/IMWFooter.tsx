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
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                <i className="fi fi-rs-marker text-sm mr-2 inline-flex items-center justify-center"></i>
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
