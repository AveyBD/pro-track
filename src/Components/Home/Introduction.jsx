import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import task from "../../images/task.jpg";

const Introduction = () => {
  return (
    <div className="hero min-h-screen  bg-background lg:p-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          style={{ height: "300px" }}
          src={task}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:ml-24">
          <h1 className="text-4xl font-bold text-header">
            Make Your Task More Easy With{" "}
            <span className="text-blue">ProTrack</span>
          </h1>
          <p className=" my-5 text-paragraph tracking-widest ">
            Protrack is a web and mobile Task management platform designed to
            help teams organize, track, and manage their task and also helps
            teams move work forward. Collaborate, manage projects, and reach new
            productivity peaks. From high rises to the home office, the way your
            team works is unique—accomplish it all with ProTrack.It is produced
            by Binary Brains.
          </p>
          <Link to="/" className="btn bg-blue hover:bg-violet-500 border-0">
            Learn More <BsArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
