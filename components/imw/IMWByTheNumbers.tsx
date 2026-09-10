import React from "react";

export default function IMWByTheNumbers() {
  return (
    <div className="ab2-ribbon max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full">
      <div className="ab2-ribbon-in">
        <div className="col-span-full flex items-center justify-center gap-3 sm:gap-4 mb-4">
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#005B82]/40"></div>
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs">
            <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <span className="text-[#005B82] text-xs font-extrabold tracking-[0.22em] uppercase">
              IMW BY THE NUMBERS
            </span>
            <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
          </div>
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#005B82]/40"></div>
        </div>
        <div className="ab2-rb">
          <b>Many</b>
          <span>Partner Events</span>
        </div>
        <div className="ab2-rb">
          <b>100+</b>
          <span>Countries Represented</span>
        </div>
        <div className="ab2-rb">
          <b>10,000+</b>
          <span>Industry Professionals</span>
        </div>
        <div className="ab2-rb">
          <b>1</b>
          <span>Unmissable Week</span>
        </div>
      </div>
    </div>
  );
}

