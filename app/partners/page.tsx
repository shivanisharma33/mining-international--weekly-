import IMWHeader from "@/components/imw/IMWHeader";
import PartnersHero from "@/components/imw/PartnersHero";
import OurPartnersGrid from "@/components/imw/OurPartnersGrid";
import PartnerWithUsBanner from "@/components/imw/PartnerWithUsBanner";
import IMWFooter from "@/components/imw/IMWFooter";

export default function PartnersPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white dark:bg-[#090d16] transition-colors duration-300">
        <PartnersHero />
        <OurPartnersGrid />
        <PartnerWithUsBanner />
      </main>
      <IMWFooter />
    </>
  );
}
