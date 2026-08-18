import React from "react";
import Link from "next/link";

export default function StayConnected() {
  return (
    <div className="connect wrap">
      <div className="connect-band">
        <div className="cn-icon">
          <i className="fi fi-rr-calendar text-2xl text-[#005B82] flex items-center justify-center"></i>
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
