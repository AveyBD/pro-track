/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import banner from "../../images/image (1).jpg";
import Navbar from "../Shared/Navbar";
import FeaturesSection from "./FeaturesSection";
import "./hero.css";

const Hero = () => {
  return (
    <section className="background p-4">
      <div>
        <Navbar />
      </div>
      <div className="mt-44 w-60  lg:w-full">
        <h1 className="lg:text-5xl text-2xl navyBlue font-bold">
          Manage your project track
        </h1>
        <p className="text-sm lg:mt-10 lg:text-xl lg:w-[600px] font-semibold text-slate-600 tracking-widest">
          Protrack is basically a collection where issues are collected as
          either ongoing or closed. This way you can track the issue from the
          time it’s identified until you have resolved it.
        </p>
      </div>
    </section>
  );
};

export default Hero;
