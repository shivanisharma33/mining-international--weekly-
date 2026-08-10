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
    <header className="fixed top-0 z-50 w-full shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#070a10] text-neutral-300 py-2.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left info items */}
          <div className="flex items-center gap-3 sm:gap-5 text-neutral-300 font-medium text-[11px] sm:text-xs md:text-sm overflow-x-auto no-scrollbar whitespace-nowrap">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-neutral-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
              </svg>
              <span>June 1–5, 2026</span>
            </span>

            <span className="text-neutral-600">|</span>

            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-neutral-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
              </svg>
              <span>Québec City, Canada</span>
            </span>

            <span className="text-neutral-600 hidden md:inline">|</span>

            <span className="hidden md:inline text-neutral-300">
              Canada's Premier Mining Week
            </span>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-4 shrink-0 pl-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <div className="bg-white border-b border-neutral-200/80 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="text-neutral-950 font-black text-2xl sm:text-3xl tracking-tighter leading-none">
              IMW
            </div>
            <div className="h-7 w-[1.5px] bg-neutral-300"></div>
            <div className="flex flex-col leading-[1.15] text-neutral-900 font-extrabold text-[11px] sm:text-xs uppercase tracking-tight">
              <span>INTERNATIONAL</span>
              <span>MINING WEEK</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm xl:text-base font-extrabold text-neutral-900">
            {/* About IMW */}
            <Link
              href="/about"
              className={`relative py-1 flex items-center gap-1 transition-colors ${
                isActive("/about")
                  ? "text-[#C6112F]"
                  : "text-neutral-900 hover:text-[#C6112F]"
              }`}
            >
              <span>About IMW</span>
              <svg className="w-4 h-4 text-current transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#C6112F]"></span>
              )}
            </Link>

            {/* Events */}
            <Link
              href="/events"
              className={`relative py-1 flex items-center gap-1 transition-colors ${
                isActive("/events")
                  ? "text-[#C6112F]"
                  : "text-neutral-900 hover:text-[#C6112F]"
              }`}
            >
              <span>Events</span>
              <svg className="w-4 h-4 text-current transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
              {isActive("/events") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#C6112F]"></span>
              )}
            </Link>

            {/* Partners */}
            <Link
              href="/partners"
              className={`relative py-1 transition-colors ${
                isActive("/partners")
                  ? "text-[#C6112F]"
                  : "text-neutral-900 hover:text-[#C6112F]"
              }`}
            >
              <span>Partners</span>
              {isActive("/partners") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#C6112F]"></span>
              )}
            </Link>

            {/* News */}
            <Link
              href="/news"
              className={`relative py-1 transition-colors ${
                isActive("/news")
                  ? "text-[#C6112F]"
                  : "text-neutral-900 hover:text-[#C6112F]"
              }`}
            >
              <span>News</span>
              {isActive("/news") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#C6112F]"></span>
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`relative py-1 transition-colors ${
                isActive("/contact")
                  ? "text-[#C6112F]"
                  : "text-neutral-900 hover:text-[#C6112F]"
              }`}
            >
              <span>Contact</span>
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#C6112F]"></span>
              )}
            </Link>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/register"
              className="px-6 py-2.5 rounded-lg bg-[#C6112F] hover:bg-[#a50d26] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors shadow-xs"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="bg-white border-b border-neutral-200 px-6 py-4 flex flex-col gap-3 shadow-lg lg:hidden">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className={`py-2 text-sm font-bold ${isActive("/") ? "text-[#C6112F]" : "text-neutral-800 hover:text-[#C6112F]"}`}>
            Home
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className={`py-2 text-sm font-bold ${isActive("/about") ? "text-[#C6112F]" : "text-neutral-800 hover:text-[#C6112F]"}`}>
            About IMW
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/events" className={`py-2 text-sm font-bold ${isActive("/events") ? "text-[#C6112F]" : "text-neutral-800 hover:text-[#C6112F]"}`}>
            Events
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/partners" className={`py-2 text-sm font-bold ${isActive("/partners") ? "text-[#C6112F]" : "text-neutral-800 hover:text-[#C6112F]"}`}>
            Partners
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/news" className={`py-2 text-sm font-bold ${isActive("/news") ? "text-[#C6112F]" : "text-neutral-800 hover:text-[#C6112F]"}`}>
            News
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className={`py-2 text-sm font-bold ${isActive("/contact") ? "text-[#C6112F]" : "text-neutral-800 hover:text-[#C6112F]"}`}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
