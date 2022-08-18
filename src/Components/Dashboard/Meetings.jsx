import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch("https://protrackbd.herokuapp.com/meeting")
      .then((res) => res.json())
      .then((data) => setMeetings(data));
  }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      {/* Add meeting modal part with full details */}

      <div>
        <h1 className="text-3xl text-cyan-700 text-center m-10 font-bold">
          Meetings
        </h1>

        <div>
          <div className="text-left">
            <label for="add-meeting-modal" className="btn modal-button">
              Add new meeting
            </label>
          </div>

          <input
            type="checkbox"
            id="add-meeting-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Meeting Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Write the type of meeting"
                    className="input input-bordered w-full "
                    {...register("meetingtype", { required: true })}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Time</span>
                  </label>
                  <input
                    type="time"
                    placeholder="Meeting time"
                    className="input input-bordered w-full "
                    {...register("meetingtime", { required: true })}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Meeting Date"
                    className="input input-bordered w-full "
                    {...register("meetingdate", { required: true })}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Project Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select the Project"
                    className="input input-bordered w-full "
                    {...register("project", { required: true })}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Meeting Link</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Put the meeting link here"
                    className="input input-bordered w-full "
                    {...register("meetingLink", { required: true })}
                  />
                </div>

                <label for="add-meeting-modal">
                  <span>
                    <button
                      className="btn btn-outline w-full  mt-4"
                      onClick={() => onSubmit()}
                    />
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Show all the meetings details here in table  */}

      {meetings.map((meeting, index) => (
        <div className="mt-24">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Meeting Type</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Project</th>
                  <th>Meeting Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{meeting.meetingType}</td>
                  <td>{meeting.time}</td>
                  <td>{meeting.date}</td>
                  <td>{meeting.projectName}</td>
                  <td>{meeting.meetingLink}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meetings;
