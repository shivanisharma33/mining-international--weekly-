import React from "react";

export default function FoundingPartners() {
  return (
    <section className="founding" id="founding">
      <div className="wrap">
        <div className="flex items-center justify-center gap-3 mb-10 text-center">
          <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
          <h2 className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            FOUNDING PARTNERS
          </h2>
          <div className="w-10 h-[1.5px] bg-[#005B82]"></div>
        </div>
        <div className="fp-grid">
          <div className="fp-item">
            <div className="fp-logo">
              <a href="https://amq-inc.com/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                <img src="/image 93.png" alt="Association minière du Québec" className="max-h-[85px] w-auto object-contain" />
              </a>
            </div>
            <p>Representing Québec's mining industry and supporting a responsible and sustainable future.</p>
          </div>
          <div className="fp-item">
            <div className="fp-logo">
              <a href="https://itfa.org/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                <img src="/image 92.png" alt="ITFA" className="max-h-[85px] w-auto object-contain" />
              </a>
            </div>
            <p>A global non-profit organization advancing trade, investment and development in the extractive sector.</p>
          </div>
          <div className="fp-item">
            <div className="fp-logo">
              <a href="https://mining-investment-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                <img src="/founding_the_event.png" alt="THE Mining Investment Event" className="max-h-[105px] w-auto object-contain" />
              </a>
            </div>
            <p>The premier mining investment event connecting investors, companies and opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
