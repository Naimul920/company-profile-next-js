import Collaborators from "@/features/home/collaborators";
import HeroCarousel from "@/features/home/hero-carousel";
import SolutionsCarousel from "@/features/home/solutions-carousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Collaborators />
      <SolutionsCarousel />
    </>
  );
}
