import React from "react";
import Link from "next/link";

export default function WhyAttend() {
  return (
    <section className="ab2-sec" id="ab2-why">
      <div className="ab2-bento">
        <div className="ab2-b-intro">
          <div className="ab2-eyebrow" style={{ color: "#38bdf8" }}>WHY ATTEND</div>
          <h3>A Week.<br />Unlimited Value.</h3>
          <p>From conferences and summits to networking receptions and site visits, IMW delivers unmatched value for every participant.</p>
          <Link className="btn-outline-red" href="/agenda">
            VIEW EVENTS <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="18" r="2.4"/><circle cx="12" cy="12" r="2.4"/><path d="M8 7.5l2.2 2.7M16 7.5l-2.2 2.7M8 16.5l2.2-2.7M16 16.5l-2.2-2.7"/></svg>
          </span>
          <b>Connect</b>
          <p>Meet the right people and expand your global network.</p>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/></svg>
          </span>
          <b>Discover</b>
          <p>Explore new ideas, technologies and market opportunities.</p>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18l5-6 3.5 3L19 7"/><path d="M14.5 7H19v4.5"/></svg>
          </span>
          <b>Learn</b>
          <p>Gain insights from industry experts and global leaders.</p>
        </div>
        <div className="ab2-b">
          <span className="ab2-b-ic">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>
          </span>
          <b>Lead</b>
          <p>Be part of shaping the future of the mining industry.</p>
        </div>
      </div>
    </section>
  );
}
