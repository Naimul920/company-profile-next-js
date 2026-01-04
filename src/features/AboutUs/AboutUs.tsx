import Header from "../feedback/Header";
import TeamMembers from "../home/team-members";
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
