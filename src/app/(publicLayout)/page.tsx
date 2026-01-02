import HeroCarousel from "@/features/Home/hero-carousel";
import ComplitedProjects from "@/features/Home/complited-projects";
import ServicesSolutions from "@/features/Home/services-solutions";
import WhyChooseUs from "@/features/Home/why-choose-us";
import TeamMembers from "@/features/Home/team-members";
import ChoosePlan from "@/features/Home/choose-plan";
import Contact from "@/features/Home/contact";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WhyChooseUs />
      <ServicesSolutions />
      <ComplitedProjects />
      <TeamMembers />
      <ChoosePlan/>
      <Contact/>

      {/* <Collaborators /> */}
      {/* <SolutionsCarousel /> */}
      
    </>
  );
}
