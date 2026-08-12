import React from "react";
import PartnersHero from "./PartnersHero";
import OurPartnersGrid from "./OurPartnersGrid";
import PartnerWithUsBanner from "./PartnerWithUsBanner";

export default function PartnersView() {
  return (
    <div className="w-full flex flex-col" id="pv-partners">
      <PartnersHero />
      <OurPartnersGrid />
      <PartnerWithUsBanner />
    </div>
  );
}

