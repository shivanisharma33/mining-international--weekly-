import React from "react";
import Image from "next/image";

export default function HostCity() {
  const highlights = [
    {
      line1: "Historic",
      line2: "Charm",
      icon: (
        <Image
          src="/icons/bank.png"
          alt="Historic Charm"
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain"
        />
      ),
    },
    {
      line1: "Vibrant",
      line2: "Culture",
      icon: (
        <Image
          src="/icons/clover-alt.png"
          alt="Vibrant Culture"
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain"
        />
      ),
    },
    {
      line1: "World-Class",
      line2: "Hospitality",
      icon: (
        <Image
          src="/assets/images/hotel (1).png"
          alt="World-Class Hospitality"
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain"
        />
      ),
    },
    {
      line1: "Centrally",
      line2: "Connected",
      icon: (
        <Image
          src="/assets/images/chart-connected.png"
          alt="Centrally Connected"
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain"
        />
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
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
            {/* Block 1: Eyebrow Label */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#005B82]/8 border border-[#005B82]/20 shadow-xs backdrop-blur-xs mb-1">
                <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
                <span className="text-[#005B82] text-xs font-extrabold tracking-[0.22em] uppercase">
                  OUR HOST CITY
                </span>
                <svg className="w-2.5 h-2.5 text-[#005B82] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
              </div>
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

            {/* Block 4: 4-Feature Row Aligned to Section Margin */}
            <div className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-0 w-full divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 py-2 ${
                      idx === 0
                        ? "sm:pr-4 sm:pl-0"
                        : idx === highlights.length - 1
                        ? "sm:pl-4 sm:pr-0"
                        : "sm:px-4"
                    }`}
                  >
                    {item.icon}
                    <div className="flex flex-col text-xs sm:text-sm font-semibold text-[#131720] leading-tight">
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
