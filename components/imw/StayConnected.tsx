import React from "react";
import Link from "next/link";

export default function StayConnected() {
  return (
    <div className="connect">
      <div className="connect-band">
        <div className="cn-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v-2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        </div>
        <div className="cn-copy">
          <h3>Register Now</h3>
          <p>Secure your spot at International Mining Week.</p>
        </div>
        <div className="cn-cta">
          <Link href="/register" className="cn-register-btn">
            REGISTER{" "}
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
