import React from "react";

export default function FoundingPartners() {
  return (
    <section className="founding" id="founding">
      <div className="wrap">
        <div className="sec-title">
          <h2>FOUNDING PARTNERS</h2>
        </div>
        <div className="fp-grid">
          <div className="fp-item">
            <div className="fp-logo">
              <img src="/image 93.png" alt="Association minière du Québec" className="max-h-[85px] w-auto object-contain" />
            </div>
            <p>Representing Québec's mining industry and supporting a responsible and sustainable future.</p>
          </div>
          <div className="fp-item">
            <div className="fp-logo">
              <img src="/image 92.png" alt="ITFA" className="max-h-[85px] w-auto object-contain" />
            </div>
            <p>A global non-profit organization advancing trade, investment and development in the extractive sector.</p>
          </div>
          <div className="fp-item">
            <div className="fp-logo">
              <img src="/founding_the_event.png" alt="THE Mining Investment Event" className="max-h-[105px] w-auto object-contain" />
            </div>
            <p>The premier mining investment event connecting investors, companies and opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
