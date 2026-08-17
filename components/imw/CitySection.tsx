import Link from "next/link";

export default function CitySection() {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] flex items-center overflow-hidden bg-neutral-900">
      {/* Bottom Red Line Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#005B82] rounded-full z-20"></div>

      {/* Panoramic Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Mining Investment Post 2.avif"
          alt="Québec City panoramic skyline and Canadian flag"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient Overlay for Left Side Content Legibility */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/90 to-transparent pointer-events-none z-0"></div>

      {/* Contact Content Box */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        <div className="max-w-[440px] flex flex-col items-start text-left py-8 sm:py-10">
          <span className="text-[#005B82] text-xs font-bold tracking-[0.25em] uppercase mb-2 block">
            HAVE A QUESTION?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#1a1f2c] dark:text-white leading-[1.2] mb-3">
            Get in Touch
          </h2>
          <div className="w-16 h-[3px] bg-[#005B82] rounded-full mb-4"></div>
          <p className="text-neutral-800 dark:text-white font-semibold text-xs sm:text-[13px] leading-relaxed mb-6 break-words">
            For more information about &apos;THE Event&apos; programming or registration, please contact{" "}
            <a
              href="mailto:jchoi@irinc.ca"
              className="underline font-bold text-neutral-900 dark:text-white hover:text-[#005B82] dark:hover:text-[#005B82] transition-colors break-all"
            >
              jchoi@irinc.ca
            </a>{" "}
            or call{" "}
            <a
              href="tel:+19055153508"
              className="underline font-bold text-neutral-900 dark:text-white hover:text-[#005B82] dark:hover:text-[#005B82] transition-colors whitespace-nowrap"
            >
              +1-905-515-3508
            </a>
            .
          </p>
          <Link
            className="bg-[#005B82] hover:bg-[#023B50] text-white text-xs sm:text-[13px] font-extrabold tracking-wider px-7 py-3.5 rounded-lg uppercase inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all"
            href="/register"
          >
            <span>Register Here</span>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8"></circle>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.5L14 12L10.5 15.5M14 12H8.5"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
