import React from "react";
import IMWHero from "./IMWHero";
import StatsBanner from "./StatsBanner";
import ExploreWeek from "./ExploreWeek";
import FoundingPartners from "./FoundingPartners";
import HostCity from "./HostCity";

export default function HomeView() {
  return (
    <div className="w-full flex flex-col" id="pv-home">
      <IMWHero />
      <StatsBanner />
      <ExploreWeek />
      <FoundingPartners />
      <HostCity />
    </div>
  );
}
