import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import AddTask from "./AddTask";
import { useQuery } from "react-query";



const TaskPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})


    const navigate = useNavigate();

    const navigateToTask = id => {
        navigate(`/dashboard/taskDetails/${id}`)
    }

    useEffect(() => {
        const url = `https://protrackbd.herokuapp.comprojects/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [project, id]);


    const { data: allTask, isLoading, refetch } = useQuery('task', () => fetch(`https://protrackbd.herokuapp.comprojectIssues/${id}`, {
        method: 'GET',
    }).then(res => res.json()));

    console.log(allTask);

    if (isLoading) {
        return <Loading />
    }
    refetch()


    return (
        <div className='px-4'>
            <h1 className='my-5 text-2xl font-bold'>Project: <small className='text-emerald-400 uppercase text-sm lg:text-xl'>{project.data?.projectTitle}</small></h1>
            <div className='grid gap-10 grid-cols-2 lg:grid-cols-5 mr-10'>
                <div class="card w-40 h-32 bg-green-400 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">36</h2>
                        <p>Open Bugs</p>
                    </div>
                </div>

                <div class="card w-40 h-32 bg-emerald-300 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">9</h2>
                        <p>Closed Bugs</p>

                    </div>
                </div>

                <div class="card w-40 h-32 bg-rose-400 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">12</h2>
                        <p>Overdue</p>
                    </div>
                </div>

                <div class="card w-40 h-32 bg-lime-400 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">8</h2>
                        <p>Due in 7 days</p>
                    </div>
                </div>
            </div>
            <hr className='my-10 font-bold' />
            <div>
                <div className='flex justify-between mb-4'>
                    <h1 className='text-xl font-bold text-green-500 mt-2'>Task Details <span className='text-accent'>({allTask.length})</span></h1>
                    <AddTask />

                </div>
                <div class="overflow-x-auto h-96">
                    <table class="table w-full">

                        <thead className='hover'>
                            <tr>
                                <th>Task name</th>
                                <th>Assigned by</th>
                                <th>Assigned to</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Start date</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allTask.map((task) =>
                                    <tr onClick={() => navigateToTask(task._id)} className='cursor-pointer text-center'>

                                        <td>{task.data?.taskName}</td>
                                        <td>{task.user}</td>
                                        <td>{task.data?.Assignee}</td>
                                        <td className='font-bold'>{task.data?.priority}</td>
                                        <td className='font-bold'>{task.status?.status}</td>
                                        <td className='text-green-400 font-bold'>{task.data?.startDate}</td>
                                        <td className='text-rose-400 font-bold'>{task.data?.Deadline}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {
                        allTask.length === 0 ? <p className='text-rose-500 font-bold text-xl text-center mt-32'>You don't have any task</p> :
                            ' '
                    }
                </div>
            </div>
        </div >

    );
};

export default TaskPage;
