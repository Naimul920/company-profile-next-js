import Header from "../feedback/Header";
import TeamMembers from "../Home/team-members";
import WhyChooseUs from "../Home/why-choose-us";
import Approach from "./Approach";


export default function AboutUs() {
  return (
    <div>
      <Header>About us</Header>
      <Approach/>
      <TeamMembers/>
      {/* <WhyChooseUs/> */}
    </div>
  )
}
