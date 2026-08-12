import React from "react";
import Link from "next/link";

export default function StayConnected() {
  return (
    <div className="connect">
      <div className="connect-band">
        <div className="cn-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
            <rect x="8" y="14" width="3" height="3" rx="0.5" />
          </svg>
        </div>
        <div className="cn-copy">
          <h3>Register Now</h3>
          <p className="text-white opacity-90">Secure your spot at International Mining Week.</p>
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
