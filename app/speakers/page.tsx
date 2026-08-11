import IMWHeader from "@/components/imw/IMWHeader";
import SpeakersView from "@/components/imw/SpeakersView";
import StayConnected from "@/components/imw/StayConnected";
import IMWFooter from "@/components/imw/IMWFooter";

export default function SpeakersPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white">
        <SpeakersView />
        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
