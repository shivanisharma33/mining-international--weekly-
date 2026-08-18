import React from "react";
import AboutHero from "./AboutHero";
import IMWByTheNumbers from "./IMWByTheNumbers";
import OurMission from "./OurMission";
import WhyAttend from "./WhyAttend";

export default function AboutView() {
  return (
    <div className="w-full flex flex-col" id="pv-about">
      <AboutHero />
      <IMWByTheNumbers />
      <div className="ab2-shell max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full">
        <div className="ab2-flow">
          <OurMission />
          <WhyAttend />
        </div>
      </div>
    </div>
  );
}


