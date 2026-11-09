import Link from "next/link";

export default function CitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070c16] pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 m-0 border-b-0">
      {/* Bottom Accent Line */}
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
      <div className="absolute inset-y-0 left-0 w-full sm:w-[75%] lg:w-[60%] bg-gradient-to-r from-[#070c16] via-[#070c16]/85 to-transparent pointer-events-none z-0"></div>

      {/* Contact Content Box */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-[4.5vw]">
        <div className="max-w-[560px] flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#005B82]/20 border border-[#005B82]/40 shadow-xs backdrop-blur-xs mb-3">
            <svg className="w-2.5 h-2.5 text-sky-400 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <span className="text-sky-300 text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase">
              HAVE A QUESTION?
            </span>
            <svg className="w-2.5 h-2.5 text-sky-400 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.15] mb-2.5 tracking-tight">
            Get in Touch
          </h2>
          <div className="w-16 h-[3px] bg-[#005B82] rounded-full mb-4"></div>

          <p className="text-slate-100 font-normal text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 break-words">
            For more information about &apos;THE Event&apos; programming or registration, please contact{" "}
            <a
              href="mailto:jchoi@irinc.ca"
              className="underline font-bold text-white hover:text-sky-300 transition-colors break-all underline-offset-4 decoration-[#005B82]"
            >
              jchoi@irinc.ca
            </a>{" "}
            or call{" "}
            <a
              href="tel:+19055153508"
              className="underline font-bold text-white hover:text-sky-300 transition-colors whitespace-nowrap underline-offset-4 decoration-[#005B82]"
            >
              +1-905-515-3508
            </a>
            .
          </p>

          <Link
            className="bg-[#005B82] hover:bg-[#007baf] text-white text-xs sm:text-[13px] font-extrabold tracking-wider px-7 sm:px-8 py-3.5 rounded-xl uppercase inline-flex items-center gap-2.5 shadow-md shadow-[#005B82]/25 hover:shadow-lg hover:scale-[1.02] transition-all"
            href="/register"
          >
            <span>REGISTER HERE</span>
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
