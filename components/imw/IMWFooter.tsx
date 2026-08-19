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
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group relative overflow-hidden text-slate-300 hover:text-white hover:bg-[#005B82] hover:border-[#005B82] hover:shadow-[0_0_15px_rgba(0,91,130,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative overflow-hidden text-slate-300 hover:text-white hover:bg-[#005B82] hover:border-[#005B82] hover:shadow-[0_0_15px_rgba(0,91,130,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative overflow-hidden text-slate-300 hover:text-white hover:bg-[#005B82] hover:border-[#005B82] hover:shadow-[0_0_15px_rgba(0,91,130,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>IMW</h4>
            <Link className="lnk" href="/about">About IMW</Link>
            <Link className="lnk" href="/agenda">Agenda</Link>
            <Link className="lnk" href="/partners">Partners</Link>
            <Link className="lnk" href="/speakers">Speakers</Link>
            <a className="lnk" href="/assets/images/about_english.pdf" target="_blank" rel="noopener noreferrer">Media Kit (PDF)</a>
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
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                  <circle cx="12" cy="11" r="2.2" />
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
