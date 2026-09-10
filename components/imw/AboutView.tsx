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
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[4.5vw] w-full flex flex-col space-y-10 sm:space-y-14 pt-10 sm:pt-14 pb-0">
        <OurMission />
        <WhyAttend />
      </div>
    </div>
  );
}


