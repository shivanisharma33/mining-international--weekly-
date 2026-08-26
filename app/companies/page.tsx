import React from "react";
import IMWHeader from "@/components/imw/IMWHeader";
import CompaniesView from "@/components/imw/CompaniesView";
import StayConnected from "@/components/imw/StayConnected";
import IMWFooter from "@/components/imw/IMWFooter";

export default function CompaniesPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white">
        <CompaniesView />
        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
