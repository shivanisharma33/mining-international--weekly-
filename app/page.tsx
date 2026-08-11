import IMWHeader from "@/components/imw/IMWHeader";
import HomeView from "@/components/imw/HomeView";
import StayConnected from "@/components/imw/StayConnected";
import IMWFooter from "@/components/imw/IMWFooter";

export default function HomePage() {
  return (
    <>
      <IMWHeader />
      <main className="flex flex-col flex-grow w-full bg-white">
        <HomeView />
        <StayConnected />
      </main>
      <IMWFooter />
    </>
  );
}
