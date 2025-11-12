import Collaborators from "@/features/home/collaborators";
import HeroSection from "@/features/home/hero-section";
export default function Home() {
  return (
    <div className="text-white">
      <HeroSection />
      <Collaborators/>
    </div>
  );
}
