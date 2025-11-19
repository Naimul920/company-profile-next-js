import Collaborators from "@/features/home/collaborators";
import HeroCarousel from "@/features/home/hero-carousel";
import ServicesSolutions from "@/features/home/services-solutions";
// import { ServicesSolutions } from "@/features/home/services-solutions";
// import ServicesSolutions from "@/features/home/services-solutions";
import SolutionsCarousel from "@/features/home/solutions-carousel";
import WhyChooseUs from "@/features/home/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      {/* <Collaborators /> */}
      {/* <SolutionsCarousel /> */}
      <WhyChooseUs/>
      <ServicesSolutions/>
    </>
  );
}
