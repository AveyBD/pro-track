import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})

    useEffect(() => {
        const url = `http://localhost:5001/projects/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [project, id]);
    return (
        <div>
            <h1 className='my-5 text-2xl font-bold'>Project: <small className='text-emerald-400'>{project.projectTitle}</small></h1>
            <div className='grid gap-10 grid-cols-5 mr-10'>
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
                    <h1 className='text-xl font-bold text-green-500 mt-2'>Task Details</h1>
                    <button className='btn btn-accent'>Add New Task</button>
                </div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                            <tr class="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskPage;