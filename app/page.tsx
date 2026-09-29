import HeroSection from "./components/HeroSection";
import PartnersStrip from "./components/PartnersStrip";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PartnersStrip />
    </main>
  );
}
