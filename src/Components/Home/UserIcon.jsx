import React from "react";
import image4 from "../../images/twiter.jpg";
import image11 from "../../images/github.png";
import image6 from "../../images/facebook.png";
import image7 from "../../images/google.png";
import image8 from "../../images/zoom.png";
import image10 from "../../images/meet (2).png";
import image5 from "../../images/drive.png";
import image9 from "../../images/skype.png";

const UserIcon = () => {
  return (

    <div className="hero">
      <div className='hero-content flex-col lg:flex-row-reverse bg-background lg:py-32 lg:my-20 lg:mx-16 rounded-3xl'>
      <div className='grid lg:grid-cols-6 lg:mx-20 my-32 mr-24 item-center relative'>
       <img className='w-16 absolute rounded-full top-40 -left-20' src={image4} alt="" />
        <img className='w-16 absolute left-64 rounded-full ' src={image5} alt="" />
        <img className='w-16 absolute bottom-32  left-16' src={image6} alt="" />
        <img className='w-16 absolute top-40 left-16' src={image7} alt="" />
        <img className='w-16 absolute left-56 bottom-24 rounded-full' src={image8} alt="" />
        <img className='w-16 absolute top-28 left-48' src={image9} alt="" />
        <img className='w-16 mr-10' src={image10} alt="" />
        <img className='w-16 absolute -left-24  bottom-32 bg-white rounded-full' src={image11} alt="" />
      </div>
      <div className="">
        <h2 className='lg:mx-20 mt-2 text-center text-header text-2xl lg:text-4xl font-bold'>Connect to <span className='text-navyBlue'>Pro-track</span> with your preferred apps</h2>
      </div>
    </div>

    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse bg-[#eaf2d7] lg:py-32 lg:my-20 lg:mx-16 rounded-3xl">
        <div className="grid lg:grid-cols-6 lg:mx-20 my-32 mr-24 item-center relative">
          <img
            className="w-16 absolute rounded-full top-40 -left-20"
            src={image4}
            alt=""
          />
          <img
            className="w-16 absolute left-64 rounded-full "
            src={image5}
            alt=""
          />
          <img
            className="w-16 absolute bottom-32  left-16"
            src={image6}
            alt=""
          />
          <img className="w-16 absolute top-40 left-16" src={image7} alt="" />
          <img
            className="w-16 absolute left-56 bottom-24 rounded-full"
            src={image8}
            alt=""
          />
          <img className="w-16 absolute top-28 left-48" src={image9} alt="" />
          <img className="w-16 mr-10" src={image10} alt="" />
          <img
            className="w-16 absolute -left-24  bottom-32 bg-white rounded-full"
            src={image11}
            alt=""
          />
        </div>
        <div className="">
          <h2 className="lg:mx-20 mt-2 text-center text-gray text-2xl lg:text-4xl font-bold">
            Connect to <span className="text-navyBlue">Pro-track</span> with
            your preferred apps
          </h2>
        </div>
      </div>

    </div>
    </div>
  );
};

export default UserIcon;
