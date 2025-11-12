import Collaborators from "@/features/home/collaborators";
import HeroSection from "@/features/home/hero-section";
import OurSolutions from "@/features/home/our-solutions";
export default function Home() {
  return (
    <div className="text-white">
      <HeroSection />
      <Collaborators/>
      <OurSolutions/>
    </div>
  );
}
