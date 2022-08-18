import React from "react";
import packages from "../../Assets/images/packages.jpg";
import protrack from "../../Assets/images/pro1.jpg";
import discover from "../../Assets/images/discover.jpg";
import trackissue from "../../Assets/images/marketing-group-working-business-solution-flat-icon_1262-18774.webp";
import solve from "../../Assets/images/decision-making-abstract-concept_335657-3039.webp";

import { Link } from "react-router-dom";
const Summery = () => {
  return (

    <div>
    <div className="-mt-20">
     <div className=' flex-col lg:flex-row-reverse bg-[#F9ECD9] lg:py-48 lg:my-24 lg:mx-16   rounded-3xl'>
    <h2 className="text-5xl font-bold text-center  text-header -mt-24 ">Main work summery of <span classname="text-blue">Pro-Track</span></h2>
    </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-16  my-16 justify-items-center">
      <div className="card max-w-lg bg-[#eaf2d7] -mt-72 shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
               
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold text-header">Track Issue</h2>
                <img
          style={{ height: "300px" }}
          src={trackissue}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
                <p className=" text-paragraph">
                  Pro-Track will Track the issue first and make decision for each part of the issue and provide a system to meetup the solution.

                </p>
                <div className="card-actions">
                  
                </div>
              </div>
            </div>
            <div className="card max-w-lg bg-[#f6efe9] -mt-72  shadow-xl transform transition duration-500 hover:scale-110">
              <figure>
               
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold text-header">Set the path to solve the issue</h2>
                <img
          style={{ height: "320px" }}
          src={solve}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"/>
                <p className=" text-paragraph">
                 pro-track is the pro-solver of your each issue .after track the issue and finalize each step Pro-Track is going to be solve the issue of User.
                </p>
                <div className="card-actions">
               
                </div>
              </div>
            </div>
          </div> 
          </div>         
          
  );
};

export default Summery;
