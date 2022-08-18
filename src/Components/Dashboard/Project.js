import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
   const {about, owner, projectTitle, startDate, endDate, team, email, _id} = project ;
   console.log(project._id);
   
   const navigate = useNavigate();
   const navigateToTask = id =>{
    navigate(`/dashboard/taskPage/${id}`)
   }
    return (   
        <div onClick={() => navigateToTask(_id)} class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
        <div class="card-body">
          <h2 class="card-title">{projectTitle}</h2>
          <p><small className="font-semibold">{ owner}</small></p>
          <div className="flex justify-between font-semibold">
            <p><small>Start date: {startDate}</small></p>
            <p><small>End date: {endDate}</small></p>
          </div>
          <p>About: {about}</p>
        </div>
      </div>
    );
};

export default Project;