import React from "react";
import Link from "next/link";

export default function WhyAttend() {
  return (
    <section className="ab2-sec" id="ab2-why">
      <div className="ab2-bento">
        <div className="ab2-b-intro">
          <div className="ab2-eyebrow text-slate-300" style={{ color: "#cbd5e1" }}>WHY ATTEND</div>
          <h3>A Week.<br />Unlimited Value.</h3>
          <p>From conferences and summits to networking receptions and site visits, IMW delivers unmatched value for every participant.</p>
          <Link className="btn-outline-red" href="/agenda">
            VIEW EVENTS <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <img
              src="/assets/images/connect.png"
              alt="Connect icon"
              className="w-[22px] h-[22px] object-contain"
              style={{ filter: "invert(24%) sepia(85%) saturate(1637%) hue-rotate(174deg) brightness(94%) contrast(101%)" }}
            />
          </span>
          <b>Connect</b>
          <p>Meet the right people and expand your global network.</p>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4-4" /></svg>
          </span>
          <b>Discover</b>
          <p>Explore new ideas, technologies and market opportunities.</p>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3.5v9" />
              <path d="M12 3.5c-2-1.7-5.5-1.7-5.5 1v5.5c3 1.2 5.5 2.5 5.5 2.5" />
              <path d="M12 3.5c2-1.7 5.5-1.7 5.5 1v5.5c-3 1.2-5.5 2.5-5.5 2.5" />
              <path d="M5.5 6.5H4C2.6 6.5 1.5 7.6 1.5 9v6c0 1.7 1.3 3 3 3h15c1.7 0 3-1.3 3-3V9c0-1.4-1.1-2.5-2.5-2.5H18.5" />
              <path d="M12 18v3.5" />
              <path d="M8 21.5h8" />
            </svg>
          </span>
          <b>Learn</b>
          <p>Gain insights from industry experts and global leaders.</p>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.8" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
          </span>
          <b>Lead</b>
          <p>Be part of shaping the future of the mining industry.</p>
        </div>
      </div>
    </section>
  );
}
