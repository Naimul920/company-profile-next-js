import HeroCarousel from "@/features/home/hero-carousel";
import ComplitedProjects from "@/features/home/complited-projects";
import ServicesSolutions from "@/features/home/services-solutions";
import WhyChooseUs from "@/features/home/why-choose-us";
import TeamMembers from "@/features/home/team-members";
import ChoosePlan from "@/features/home/choose-plan";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WhyChooseUs />
      <ServicesSolutions />
      <ComplitedProjects />
      <TeamMembers />
      <ChoosePlan/>

      {/* <Collaborators /> */}
      {/* <SolutionsCarousel /> */}
    </>
  );
}
