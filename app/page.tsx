import HeroSection from "./components/HeroSection";
import PartnersStrip from "./components/PartnersStrip";
import CoursesSection from "./components/CoursesSection";
import LearningPathsSection from "./components/LearningPathsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PartnersStrip />
      <CoursesSection />
      <LearningPathsSection />
    </main>
  );
}
