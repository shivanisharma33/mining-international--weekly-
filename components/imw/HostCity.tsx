import React from "react";
import Image from "next/image";

export default function HostCity() {
  const highlights = [
    {
      line1: "Historic",
      line2: "Charm",
      icon: (
        <svg className="w-6 h-6 shrink-0" style={{ color: "var(--red)" }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5h-15V21"></path>
        </svg>
      ),
    },
    {
      line1: "Vibrant",
      line2: "Culture",
      icon: (
        <svg className="w-6 h-6 shrink-0" style={{ color: "var(--red)" }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 9v6m-3-3h6"></path>
        </svg>
      ),
    },
    {
      line1: "World-Class",
      line2: "Hospitality",
      icon: (
        <svg className="w-6 h-6 shrink-0" style={{ color: "var(--red)" }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
        </svg>
      ),
    },
    {
      line1: "Centrally",
      line2: "Connected",
      icon: (
        <svg className="w-6 h-6 shrink-0" style={{ color: "var(--red)" }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white !bg-white text-neutral-900 border-b border-neutral-200/60 transition-colors duration-300 overflow-hidden">
      {/* SVG ClipPath for smooth curve */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="host-city-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.58,0 C 0.78,0 0.92,0.12 0.97,0.35 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1440px] mx-auto min-h-[380px] sm:min-h-[440px] flex flex-col lg:flex-row items-stretch bg-white !bg-white">
        {/* Left Side: Full-height curved photograph */}
        <div className="w-full lg:w-[46%] relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <div
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: "url(#host-city-curve)" }}
          >
            <Image
              src="/quebec_city_host.png"
              alt="Quebec City Host Location"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Content & Highlights (Pure White Background) */}
        <div className="w-full lg:w-[54%] py-12 sm:py-16 px-6 sm:px-10 lg:px-14 flex flex-col justify-center bg-white !bg-white">
          <div className="mb-3">
            <span style={{ color: "var(--red)" }} className="text-xs sm:text-sm font-bold tracking-widest uppercase block">
              OUR HOST CITY
            </span>
            <div className="w-8 h-[2px] mt-2" style={{ background: "var(--red)" }}></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 !text-neutral-900 tracking-tight leading-[1.08] my-5">
            Québec City <br />
            A World-Class Destination
          </h2>

          <p className="text-neutral-600 !text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Rich in history, culture and innovation, Québec City provides the perfect setting for International Mining Week.
          </p>

          {/* Bottom 4 Feature Badges with Dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 pt-2">
            {highlights.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 pt-3 sm:pt-0 ${idx > 0 ? "sm:pl-4" : ""}`}>
                {item.icon}
                <div className="flex flex-col text-xs sm:text-sm font-extrabold text-neutral-900 !text-neutral-900 leading-tight">
                  <span>{item.line1}</span>
                  <span>{item.line2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
