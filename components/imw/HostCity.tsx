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
    <section className="relative w-full bg-white border-b border-neutral-200/60 py-8 sm:py-12 lg:py-14 overflow-hidden">
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
            {/* Block 1: Eyebrow Label with Top Accent Line */}
            <div>
              <span className="text-[#005B82] text-xs sm:text-sm font-extrabold tracking-widest uppercase block">
                OUR HOST CITY
              </span>
              <div className="w-14 h-[3px] bg-[#005B82] mt-2 rounded-full"></div>
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
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-0 w-full divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/90 pt-1">
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
