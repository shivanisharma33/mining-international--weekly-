import Image from "next/image";

export default function FoundingPartners() {
  return (
    <section className="relative w-full py-10 sm:py-14 bg-white !bg-white text-slate-900 border-b border-neutral-200 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1e293b] !text-[#1e293b] uppercase tracking-[0.15em]">
          FOUNDING PARTNERS
        </h2>
        <div className="w-12 h-[2.5px] bg-[#C6112F] mx-auto mt-2 mb-6 sm:mb-8 rounded-full"></div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Logo 1 */}
          <div className="flex items-center justify-center p-4 sm:p-5 h-28 sm:h-36 md:h-40 w-auto min-w-[200px] max-w-[240px] sm:max-w-[300px] md:max-w-[340px] bg-white !bg-white dark:bg-white rounded-2xl border border-neutral-200/90 shadow-sm">
            <img src="/founding_itfa.png" alt="ITFA Logo" className="max-h-full max-w-full object-contain" />
          </div>

          <div className="hidden sm:block h-24 sm:h-32 md:h-36 w-[1.5px] bg-neutral-300/80"></div>

          {/* Logo 2 */}
          <div className="flex items-center justify-center p-4 sm:p-5 h-28 sm:h-36 md:h-40 w-auto min-w-[220px] max-w-[280px] sm:max-w-[360px] md:max-w-[400px] bg-white !bg-white dark:bg-white rounded-2xl border border-neutral-200/90 shadow-sm">
            <img src="/founding_amq.png" alt="Association minière du Québec" className="max-h-full max-w-full object-contain" />
          </div>

          <div className="hidden sm:block h-24 sm:h-32 md:h-36 w-[1.5px] bg-neutral-300/80"></div>

          {/* Logo 3 */}
          <div className="flex items-center justify-center p-4 sm:p-5 h-28 sm:h-36 md:h-40 w-auto min-w-[200px] max-w-[240px] sm:max-w-[300px] md:max-w-[340px] bg-white !bg-white dark:bg-white rounded-2xl border border-neutral-200/90 shadow-sm">
            <img src="/founding_the_event.png" alt="THE Mining Investment Event Logo" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
