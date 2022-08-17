<<<<<<< HEAD
import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { MdWebAsset} from 'react-icons/md';
// import { SiMarketo} from 'react-icons/si';
import { HiInformationCircle} from 'react-icons/hi';
import { SiMicrosoftteams} from 'react-icons/si';
import { GiTimeBomb} from 'react-icons/gi';
import app from '../../Assets/images/app-development.png';
import asset from '../../Assets/images/speculate.png';
import info from '../../Assets/images/info.png';
import team from '../../Assets/images/team.png';
import time from '../../Assets/images/time-tracking.png';



const Service = () => {
    return (
        <div className='mt-10 p-5 px-10'>
          
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 mx-16  mt-10">
        
        <div className="card max-w-lg  transform transition duration-500 hover:scale-110 ">
            
       
            <div className="text-center ">
            <h2 className='text-4xl font-bold text-center text-header'> you can Manage and Maintain </h2>
            <h2 className='text-4xl font-bold text-center text-blue-600'>Using Pro-Track</h2>
              <p>
                
              </p>
             
            </div>
          </div>


        <div className=" max-w-lg transform transition duration-500 hover:scale-110 ">
            
                <figure className='text-5xl mt-5'>
                <img className='w-16' src={app} alt="" />
                </figure>
                <div>
                  <h2 className="text-2xl font-bold text-header"> App Development</h2>
                  <p className='text-paragraph'>
                    Lorem ipsum dolor sit amet consectetur id atque placeat earum voluptaa.
                    
                  </p>
                 
                </div>
              </div>
              <div className="max-w-lg  transform transition duration-500 hover:scale-110 ">
                <figure className='text-5xl mt-5'>
                <img className='w-16' src={asset} alt="" />
                </figure>
                <div>
                  <h2 className="text-2xl font-bold text-header">Asset Development</h2>
                  <p className='text-paragraph'>
                    Lorem ipsum dolor sit amet consectetur maiores in, nam dicta. Amet nostru
                    
                  </p>
                 
                </div>
              </div>           
          
  
              <div className="max-w-lg  transform transition duration-500 hover:scale-110">
                <figure className='text-5xl mt-5'>
                <img className='w-16' src={info} alt="" />
                </figure>
                <div>
                  <h2 className="text-2xl font-bold text-header">Information Purpose</h2>
                  <p className='text-paragraph'>
                    Lorem ipsum dolor sit amet consectetur non maiores in, nam dicta. Amet 
                    
                  </p>
                 
                </div>
              </div>
  
              <div className=" max-w-lg  transform transition duration-500 hover:scale-110 ">
                <figure className='text-5xl mt-5'>
                <img className='w-16' src={team} alt="" />
                </figure>
                <div>
                  <h2 className="text-2xl font-bold text-header">Team Collaboration</h2>
                  <p className='text-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudia
                    
                  </p>
                 
                </div>
              </div>
  
              <div className=" max-w-lg  transform transition duration-500 hover:scale-110 ">
                <figure className='text-5xl mt-5'>
                <img className='w-16' src={time} alt="" />
                </figure>
                <div >
                  <h2 className="text-2xl font-bold text-header">Tracking Time</h2>
                  <p className='text-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repu
                    
                  </p>
                  
                </div>
              </div>
  
  
=======
import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { HiInformationCircle } from "react-icons/hi";
import { SiMicrosoftteams } from "react-icons/si";
import { GiTimeBomb } from "react-icons/gi";

const Service = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-center text-header">
        Using Protrack you can Manage and Maintain
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mx-16  mt-10">
        <div className="card max-w-lg bg-[#f6efe9]  shadow-xl transform transition duration-500 hover:scale-110 ">
          <figure className="text-5xl mt-5">
            <AiFillAppstore></AiFillAppstore>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl font-bold text-header"> App Development</h2>
            <p></p>
            <div className="card-actions"></div>
          </div>
>>>>>>> 3726102fc01fef73a5e63a87b01ef3ab2241e20c
        </div>
        <div className="card max-w-lg bg-[#f6efe9]  shadow-xl transform transition duration-500 hover:scale-110 ">
          <figure className="text-5xl mt-5">
            <MdWebAsset></MdWebAsset>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl font-bold text-header">
              Asset Development
            </h2>
            <p></p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card max-w-lg bg-[#f6efe9] shadow-xl transform transition duration-500 hover:scale-110">
          <figure className="text-5xl mt-5">
            <SiMarketo></SiMarketo>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl font-bold text-header">Marketing</h2>
            <p></p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card max-w-lg bg-[#f6efe9]  shadow-xl transform transition duration-500 hover:scale-110">
          <figure className="text-5xl mt-5">
            <HiInformationCircle></HiInformationCircle>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl font-bold text-header">
              Information Purpose
            </h2>
            <p></p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card max-w-lg bg-[#f6efe9]  shadow-xl transform transition duration-500 hover:scale-110 ">
          <figure className="text-5xl mt-5">
            <SiMicrosoftteams></SiMicrosoftteams>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl font-bold text-header">
              Team Collaboration
            </h2>
            <p></p>
            <div className="card-actions"></div>
          </div>
        </div>

        <div className="card max-w-lg bg-[#f6efe9]  shadow-xl transform transition duration-500 hover:scale-110 ">
          <figure className="text-5xl mt-5">
            <GiTimeBomb></GiTimeBomb>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl font-bold text-header">Tracking Time</h2>
            <p></p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
