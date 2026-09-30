import HeroSection from "./components/HeroSection";
import PartnersStrip from "./components/PartnersStrip";
import CoursesSection from "./components/CoursesSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PartnersStrip />
      <CoursesSection />
    </main>
  );
}
