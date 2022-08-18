import React from "react";

import resource from "../../Assets/images/schedule.png";
import evaluation from "../../Assets/images/evaluation.png";
import assign from "../../Assets/images/assignment.png";

const FeaturesSection = () => {
  return (
    <section className=" mt-10 rounded-xl">
      <div className=" bg-background rounded-xl drop-shadow-2xl p-14 gap-5  grid grid-cols-1 lg:grid-cols-3  ">
        <div className="p-10">
          <h1 className="text-5xl text-header">Explore what we offer</h1>
          <button className="btn btn-active btn-clr-Primary  w-40 mt-5">
            Explore more
          </button>
        </div>
        <div className="p-10">
          <p className="text-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit hic,
            ab officiis ut pariatur eos amet laboriosam, dolore ipsum blanditiis
            repellat voluptate exercitationem, qui iure quam. Cumque iure
            nesciunt odio.
          </p>
        </div>
        <div className="p-10">
          <p className="text-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit hic,
            ab officiis ut pariatur eos amet laboriosam, dolore ipsum blanditiis
            repellat voluptate exercitationem, qui iure quam. Cumque iure
            nesciunt odio.
          </p>
        </div>

        <div className=" bg-white rounded-xl drop-shadow-2xl p-10">
          <img className="w-16" src={resource} alt="" />
          <h1 className="font-bold text-2xl text-header mt-2">
            Resource Scheduling
          </h1>
          <p className="text-sm  font-bold text-paragraph">
            In our software team leaders can allocate and assign people tasks
            without over (or under) allocating their schedules.
          </p>
        </div>

        <div className="bg-white rounded-xl drop-shadow-2xl p-10">
          <img className="w-16" src={assign} alt="" />
          <h1 className="font-bold text-2xl text-header mt-2">
            Assigning Task
          </h1>
          <p className="font-bold text-sm text-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat quos rem qui voluptas totam rerum, vero alias incid
          </p>
        </div>

        <div className="bg-white rounded-xl drop-shadow-2xl p-10">
          <img className="w-16" src={evaluation} alt="" />
          <h1 className="font-bold text-2xl text-header mt-2">
            Progress E valuation
          </h1>
          <p className="font-bold text-sm text-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat quos rem qui voluptas totam rerum, vero alias incid
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
