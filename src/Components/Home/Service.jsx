
import React from 'react';
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
  
  


    </div>
    </div>
  );
};

export default Service;
