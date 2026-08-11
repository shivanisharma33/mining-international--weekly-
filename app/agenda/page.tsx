import IMWHeader from "@/components/imw/IMWHeader";
import AgendaView from "@/components/imw/AgendaView";
import StayConnected from "@/components/imw/StayConnected";
import IMWFooter from "@/components/imw/IMWFooter";

export default function AgendaPage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white">
        <AgendaView />
        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
