import CoursesSection from "./components/CoursesSection";
import HeroSection from "./components/HeroSection";
import LearningPaths from "./components/LearningPaths";
import PartnersStrip from "./components/PartnersStrip";
import ProGrowth from "./components/ProGrowth";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PartnersStrip />
      <CoursesSection />
      <LearningPaths />
      <ProGrowth />
    </main>
  );
}
