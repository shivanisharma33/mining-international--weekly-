import IMWHeader from "@/components/imw/IMWHeader";
import AboutView from "@/components/imw/AboutView";
import StayConnected from "@/components/imw/StayConnected";
import IMWFooter from "@/components/imw/IMWFooter";

export default function AboutPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white">
        <AboutView />
        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
