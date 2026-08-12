import React from "react";
import AboutHero from "./AboutHero";
import OurMission from "./OurMission";
import IMWByTheNumbers from "./IMWByTheNumbers";
import WhyAttend from "./WhyAttend";
import HostCity from "./HostCity";

export default function AboutView() {
  return (
    <div className="w-full flex flex-col" id="pv-about">
      <AboutHero />
      <OurMission />
      <IMWByTheNumbers />
      <WhyAttend />
      <HostCity />
    </div>
  );
}


