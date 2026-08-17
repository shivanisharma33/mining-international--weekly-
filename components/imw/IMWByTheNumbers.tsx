import React from "react";

export default function IMWByTheNumbers() {
  const stats = [
    {
      number: "15+",
      label: "Partner Events",
      icon: (
        <svg className="w-5 h-5 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9 3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm-3 0h.008v.008H9V15zm6 0h.008v.008H15V15z"></path>
        </svg>
      ),
    },
    {
      number: "100+",
      label: "Countries Represented",
      icon: (
        <svg className="w-5 h-5 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.25 14.25 0 00-3.75 9 14.25 14.25 0 003.75 9 14.25 14.25 0 003.75-9A14.25 14.25 0 0012 3z"></path>
        </svg>
      ),
    },
    {
      number: "10,000+",
      label: "Industry Professionals",
      icon: (
        <svg className="w-5 h-5 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
        </svg>
      ),
    },
    {
      number: "1",
      label: "Unmissable Week",
      icon: (
        <svg className="w-5 h-5 text-[#005B82]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#06090e] text-white py-8 sm:py-10 border-y border-white/10 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Title Label */}
          <div className="lg:col-span-3">
            <span className="text-white text-xs sm:text-sm font-black tracking-[0.2em] uppercase leading-snug block">
              IMW BY THE <br className="hidden lg:inline" />
              NUMBERS
            </span>
            <div className="w-10 h-[3px] bg-white mt-3 rounded-full"></div>
          </div>

          {/* 4 Stat Columns Grid */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start pt-4 md:pt-0 md:px-5 lg:px-6">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-3.5 shadow-xs">
                  {item.icon}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight mb-1 leading-none">
                  {item.number}
                </div>
                <div className="text-neutral-300 text-xs sm:text-sm font-medium tracking-normal mt-1 leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
