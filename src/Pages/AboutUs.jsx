import team from "../../src/images/Pro-Track Team.jpg";
import process from "../../src/images/Process.jpg";
import Navbar from "../Components/Shared/Navbar";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-blue">
        <Navbar />
      </div>
      <div>
        <h1 className="text-3xl text-cyan-700 font-bold text-center m-24">
          About US
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 m-24">
        <div>
          <h1 className="text-3xl text-red-700 text-center font-bold">
            Our Vision
          </h1>
          <div className="m-4">
            <p className="text-lg">
              ProTrack is a website for the developers. It is a website where
              developers can track about their projects. We have a great vision
              in the future for this website. We are making our best so that
              developers can easily control and track their projects with their
              team members. We are adding many features in our website. Our
              vision to make this website the best tracking website has ever
              been created.
            </p>
          </div>
        </div>
        <div>
          <img src={team} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 m-24">
        <div>
          <img src={process} alt="" />
        </div>
        <div>
          <h1 className="text-3xl text-red-700 text-center font-bold">
            Our Process
          </h1>
          <div className="m-4">
            <p className="text-lg">
              We have done this project of a six team member. We done this
              project using latest technologies. Here developers can track their
              work process that's why our working process was much difficult and
              so good. We did our best to complete this project. We researched a
              lot about this project. We took a long time so that we can make it
              best. Day by day we are updating and adding many features in this
              tracking website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
