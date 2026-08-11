import React from "react";

export default function StayConnected() {
  return (
    <div className="connect">
      <div className="connect-band">
        <div className="cn-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
            <path d="M4 7l8 6 8-6" />
          </svg>
        </div>
        <div className="cn-copy">
          <h3>Stay Connected</h3>
          <p>Subscribe to receive the latest news, updates and event highlights.</p>
        </div>
        <div className="cn-form">
          <input type="email" placeholder="Enter your email address" aria-label="Email address" />
          <button type="button">
            SUBSCRIBE{" "}
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
