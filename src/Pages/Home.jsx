import FeaturesSection from "../Components/Home/FeaturesSection";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Objective from "../Components/Home/Objective";
import ProUser from "../Components/Home/ProUser";
import Service from "../Components/Home/Service";
import Summery from "../Components/Home/Summery";
import Testimonials from "../Components/Home/Testimonials";
import Txt from "../Components/Home/Txt";
import UserIcon from "../Components/Home/UserIcon";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection></FeaturesSection>
      <Txt></Txt>
      <Introduction></Introduction>
      <Service></Service>
      <UserIcon></UserIcon>
      
      <Summery/>
      <ProUser></ProUser>
      {/* <Objective></Objective> */}
      <Testimonials/>
    </div>
  );
};

export default Home;
