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
              <a href="https://amq-inc.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center transition-transform hover:scale-105">
                <img src="/founding_amq.png" alt="Association minière du Québec" className="h-[75px] max-w-[210px] w-auto object-contain" />
              </a>
            </div>
            <p>Representing Québec&apos;s mining industry and supporting a responsible, sustainable future.</p>
          </div>
          <div className="fp-item">
            <div className="fp-logo">
              <a href="https://itfa.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center transition-transform hover:scale-105">
                <img src="/founding_itfa.png" alt="ITFA" className="h-[75px] max-w-[210px] w-auto object-contain" />
              </a>
            </div>
            <p>Advancing trade, investment, and development across the global extractive sector.</p>
          </div>
          <div className="fp-item">
            <div className="fp-logo">
              <a href="https://mining-investment-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center transition-transform hover:scale-105">
                <img src="/founding_the_event.png" alt="THE Mining Investment Event" className="h-[75px] max-w-[210px] w-auto object-contain" />
              </a>
            </div>
            <p>Connecting global investors, mining companies, and strategic industry opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
