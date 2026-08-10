import IMWHeader from "@/components/imw/IMWHeader";
import IMWHero from "@/components/imw/IMWHero";
import FoundingPartners from "@/components/imw/FoundingPartners";
import ExploreWeek from "@/components/imw/ExploreWeek";
import CitySection from "@/components/imw/CitySection";
import IMWFooter from "@/components/imw/IMWFooter";

export default function IMWPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white dark:bg-[#090d16] transition-colors duration-300">
        <IMWHero />
        <FoundingPartners />
        <ExploreWeek />
        <CitySection />
      </main>
      <IMWFooter />
    </>
  );
}
