import React from "react";
import IMWHeader from "@/components/imw/IMWHeader";
import IMWFooter from "@/components/imw/IMWFooter";
import PartnersView from "@/components/imw/PartnersView";
import StayConnected from "@/components/imw/StayConnected";

export default function SponsorsPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white dark:bg-[#070b14]">
        <PartnersView />
        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
