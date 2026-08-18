"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function IMWHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  return (
    <>
      {/* ================= UTILITY BAR ================= */}
      <div className="util">
        <div className="wrap util-inner">
          <div className="util-item">
            <i className="fi fi-rr-calendar text-sm mr-1.5 flex items-center justify-center"></i>
            June 1–5, 2026
          </div>
          <div className="util-item">
            <i className="fi fi-rs-marker text-sm mr-1.5 flex items-center justify-center"></i>
            Québec City, Canada
          </div>
          <div className="util-item">Canada's Premier Mining Week</div>
          <div className="util-social">
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
      </div>

      {/* ================= HEADER ================= */}
      <header className="site">
        <div className="wrap hdr">
          <Link className="brand" href="/" aria-label="International Mining Week">
            <div className="imw-logo-box">
              <span className="imw-logo-top">International</span>
              <span className="imw-logo-bottom">MINING WEEK</span>
            </div>
          </Link>
          <nav className="main" aria-label="Primary">
            <div className="nav-item">
              <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                About IMW
              </Link>
            </div>
            <div className="nav-item">
              <Link className={`nav-link ${isActive("/agenda") ? "active" : ""}`} href="/agenda">
                Agenda
              </Link>
            </div>
            <div className="nav-item">
              <Link className={`nav-link ${isActive("/partners") ? "active" : ""}`} href="/partners">
                Partners
              </Link>
            </div>
            <div className="nav-item">
              <Link className={`nav-link ${isActive("/speakers") ? "active" : ""}`} href="/speakers">
                Speakers
              </Link>
            </div>
          </nav>
          <Link href="/register" className="btn-register" style={{ marginLeft: "auto" }}>
            <span>REGISTER NOW</span>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" style={{ width: "14px", height: "14px" }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <button
            className="burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About IMW</Link>
          <Link href="/agenda" onClick={() => setIsMobileMenuOpen(false)}>Agenda</Link>
          <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)}>Partners</Link>
          <Link href="/speakers" onClick={() => setIsMobileMenuOpen(false)}>Speakers</Link>
          <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)}>Sponsors</Link>
          <Link href="/#news" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="btn-register" style={{ display: "inline-flex", justifyContent: "center" }}>Register Now</Link>
        </div>
      </header>
    </>
  );
}

