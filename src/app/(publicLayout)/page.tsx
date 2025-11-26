import HeroCarousel from "@/features/home/hero-carousel";
import ComplitedProjects from "@/features/home/complited-projects";
import ServicesSolutions from "@/features/home/services-solutions";
import WhyChooseUs from "@/features/home/why-choose-us";

export default function Home() {
  return (
    <>
       <HeroCarousel /> 
       <WhyChooseUs/>
      <ServicesSolutions/>
      <ComplitedProjects/> 



      {/* <Collaborators /> */}
      {/* <SolutionsCarousel /> */}
    </>
  );
}
