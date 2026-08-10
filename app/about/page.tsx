import IMWHeader from "@/components/imw/IMWHeader";
import AboutHero from "@/components/imw/AboutHero";
import OurMission from "@/components/imw/OurMission";
import IMWByTheNumbers from "@/components/imw/IMWByTheNumbers";
import WhyAttend from "@/components/imw/WhyAttend";
import HostCity from "@/components/imw/HostCity";
import IMWFooter from "@/components/imw/IMWFooter";

export default function AboutPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white dark:bg-[#090d16] transition-colors duration-300">
        <AboutHero />
        <OurMission />
        <IMWByTheNumbers />
        <WhyAttend />
        <HostCity />
      </main>
      <IMWFooter />
    </>
  );
}
