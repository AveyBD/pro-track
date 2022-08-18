import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
const MyTasks = () => {
  const [mytasks, setmyTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mytask.json")
      .then((res) => res.json())
      .then((data) => setmyTasks(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">My Tasks</h2>

    <table class="table-fixed w-full border-collapse">
    
      <thead>
      <tr className='bg-[#0c4a6e] text-white text-xl'>
          
      <th className="w-16 p-3 "> <CgProfile></CgProfile></th>
          <th>Task</th>
          <th>Owner</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Deadline</th>
         
        </tr>
      </thead>
      <tbody>
        {
           mytasks.map(a =><tr>
             <th>
       <div class="avatar mr-3">
  <div>
    <img className="w-10 rounded-full"  src={a.img} alt=""/>
  </div>
  </div>
       </th>
            <td>{a.task}</td>
            <td>{a.owner}</td>
            <td>
       <select class="select select-white w-full max-w-xs bg-[#0284c7]  text-white font-bold">
  <option>High </option>
  <option>Medium</option>
  <option>Low</option>
</select>
  </td>
      <td>
       <select class="select select-white w-full max-w-xs bg-[#0284c7]   text-white font-bold">
        <option>Pending</option>
        <option>Progress</option>
        <option>Complete</option>
</select>
  </td>
            <td>{a.deadline}</td>
          </tr>)
        }
        
      
      </tbody>

      </table>
    </div>
  );
};

export default MyTasks;
