import React from "react";
import Link from "next/link";

export default function IMWFooter() {
  return (
    <footer className="w-full bg-[#06090f] text-neutral-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main 6-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Column 1: Logo & Bio */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-white font-black text-2xl tracking-tighter leading-none">
                IMW
              </div>
              <div className="h-6 w-[1.5px] bg-neutral-600"></div>
              <div className="flex flex-col leading-[1.1] text-white font-extrabold text-[10px] uppercase tracking-tight">
                <span>INTERNATIONAL</span>
                <span>MINING WEEK</span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-xs">
              Uniting the global mining industry for one week of events, connections and opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: IMW */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase mb-1">
              IMW
            </h3>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              About IMW
            </Link>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              What is IMW?
            </Link>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Host City
            </Link>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Sustainability
            </Link>
            <Link href="/media" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Media Kit
            </Link>
          </div>

          {/* Column 3: EVENTS */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase mb-1">
              EVENTS
            </h3>
            <Link href="/events" className="text-neutral-400 hover:text-white text-xs transition-colors">
              All Events
            </Link>
            <Link href="/events" className="text-neutral-400 hover:text-white text-xs transition-colors">
              THE Event
            </Link>
            <Link href="/events" className="text-neutral-400 hover:text-white text-xs transition-colors">
              QMA Conference
            </Link>
            <Link href="/events" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Supply Chain Forum
            </Link>
            <Link href="/events" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Innovation Summit
            </Link>
          </div>

          {/* Column 4: ATTENDEES */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase mb-1">
              ATTENDEES
            </h3>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Why Attend
            </Link>
            <Link href="/register" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Register
            </Link>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Plan Your Visit
            </Link>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Accommodation
            </Link>
            <Link href="/about" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Travel
            </Link>
          </div>

          {/* Column 5: NEWS */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase mb-1">
              NEWS
            </h3>
            <Link href="/news" className="text-neutral-400 hover:text-white text-xs transition-colors">
              News
            </Link>
            <Link href="/news" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Press Releases
            </Link>
            <Link href="/media" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Photo Gallery
            </Link>
            <Link href="/contact" className="text-neutral-400 hover:text-white text-xs transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Column 6: GET IN TOUCH */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase mb-1">
              GET IN TOUCH
            </h3>

            <a href="mailto:info@internationalminingweek.com" className="flex items-center gap-2 text-neutral-400 hover:text-white text-xs transition-colors">
              <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              <span className="truncate">info@internationalminingweek.com</span>
            </a>

            <a href="tel:+14185551234" className="flex items-center gap-2 text-neutral-400 hover:text-white text-xs transition-colors">
              <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.464-5.123-3.763-6.587-6.587l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>+1 418 555 1234</span>
            </a>

            <div className="flex items-start gap-2 text-neutral-400 text-xs">
              <svg className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span>Québec City, Québec</span>
                <span>Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 International Mining Week. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-600">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
