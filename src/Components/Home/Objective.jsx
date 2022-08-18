import React from "react";
import "./Objective.css";

const Objective = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 card-container">
        <div className="top-10">
          <h2 className="contentTitle uppercase font-bold text-white text-xl bg-gradient-to-r from-[#0154DA] via-[#00289A] to-[#00289A] py-3 px-8 shadow-lg border-b-[blue] rounded-b-xl">
            values
          </h2>
          <div className="wrapper card h-96 w-72 mx-auto my-5 shadow-lg p-2 bg-gradient-to-r from-[#e1e1e1dd] to-[#f0f0f055]">
            <div className="card-body items-center text-center border-4 border-b-[black] border-t-[blue] border-r-[#010159] border-l-[blue] rounded-xl m-2 ">
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="content-btn flex justify-center items-center bg-white p-14 border-8 border-blue-700 btn btn-circle text-center">
            <button className="text-black font-bold">React</button>
          </div>
        </div>
        <div className="card-container">
          <h2 className="contentTitle uppercase font-bold text-white text-xl bg-gradient-to-r from-[#0154DA] via-[#00289A] to-[#00289A] py-3 px-8 shadow-lg border-b-[blue] rounded-b-xl">
            values
          </h2>
          <div className="wrapper card h-96 w-72 mx-auto my-5 shadow-lg p-2 bg-gradient-to-r from-[#e1e1e1dd] to-[#f0f0f055]">
            <div className="card-body items-center text-center border-4 border-b-[black] border-t-[blue] border-r-[#010159] border-l-[blue] rounded-xl m-2 ">
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="content-btn flex justify-center items-center bg-white p-14 border-8 border-blue-700 btn btn-circle text-center">
            <button className="text-black font-bold">React</button>
          </div>
        </div>
        <div className="card-container">
          <h2 className="contentTitle uppercase font-bold text-white text-xl bg-gradient-to-r from-[#0154DA] via-[#00289A] to-[#00289A] py-3 px-8 shadow-lg border-b-[blue] rounded-b-xl">
            values
          </h2>
          <div className="wrapper card h-96 w-72 mx-auto my-5 shadow-lg p-2 bg-gradient-to-r from-[#e1e1e1dd] to-[#f0f0f055]">
            <div className="card-body items-center text-center border-4 border-b-[black] border-t-[blue] border-r-[#010159] border-l-[blue] rounded-xl m-2 ">
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="content-btn flex justify-center items-center bg-white p-14 border-8 border-blue-700 btn btn-circle text-center">
            <button className="text-black font-bold">React</button>
          </div>
        </div>
      </div>
      <div className="bg-rose-300 h-96"></div>
    </section>
  );
};

export default Objective;
