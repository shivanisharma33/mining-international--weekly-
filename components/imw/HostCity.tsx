import React from "react";
import Image from "next/image";

export default function HostCity() {
  const highlights = [
    {
      line1: "Historic",
      line2: "Charm",
      icon: (
        <svg
          className="w-6 h-6 shrink-0 text-[#005B82]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5h-15V21"
          />
        </svg>
      ),
    },
    {
      line1: "Vibrant",
      line2: "Culture",
      icon: (
        <svg
          className="w-6 h-6 shrink-0 text-[#005B82]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
        </svg>
      ),
    },
    {
      line1: "World-Class",
      line2: "Hospitality",
      icon: (
        <svg
          className="w-6 h-6 shrink-0 text-[#005B82]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      line1: "Centrally",
      line2: "Connected",
      icon: (
        <svg
          className="w-6 h-6 shrink-0 text-[#005B82]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-neutral-200/60 py-8 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Straight Rectangular Image Container (No curve/rounded corners) */}
          <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden">
            <Image
              src="/quebec_city_host.png"
              alt="Québec City Host Location"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Right Side: Text Content with Equal Vertical Spacing */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-3.5 pl-0 lg:pl-4">
            {/* Block 1: Eyebrow Label with Top Accent Line */}
            <div>
              <div className="w-10 h-[1.5px] bg-[#005B82] mb-1.5"></div>
              <span className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase block">
                OUR HOST CITY
              </span>
            </div>

            {/* Block 2: Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-[#131720] tracking-tight leading-snug">
              Québec City <br />
              <span>A World-Class Destination</span>
            </h2>

            {/* Block 3: Paragraph Description */}
            <p className="text-[#4b5563] text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              Rich in history, culture and innovation, Québec City provides the perfect setting for International Mining Week.
            </p>

            {/* Block 4: Equal 4-Feature Row with Dividers & Equal Spacing */}
            <div className="pt-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-0 w-full divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/90 pt-3 border-t border-neutral-100 sm:border-t-0">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1.5 py-1 ${idx === 0
                      ? "sm:pr-3"
                      : idx === highlights.length - 1
                        ? "sm:pl-3"
                        : "sm:px-3"
                      }`}
                  >
                    {item.icon}
                    <div className="flex flex-col text-xs sm:text-sm font-normal text-[#131720] leading-snug">
                      <span>{item.line1}</span>
                      <span>{item.line2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
