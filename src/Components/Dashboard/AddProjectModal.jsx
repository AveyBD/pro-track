import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { useForm } from "react-hook-form";

const AddProjectModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = `https://protrackbd.herokuapp.com/projects`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label for="my-modal" className="btn btn-success font-bold mb-3">
        <GrAdd className="mr-2"></GrAdd>Create Project
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-double border-8 border-emerald-500">
          <div>
            <h3 className="font-bold text-lg text-center p-2 rounded-lg bg-seaBlue text-white">
              Hello user! Create Your project here.
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="company-website"
              className="block text-sm mt-5 mb-3 font-medium text-gray-700"
            >
              Project Name:
            </label>

            <input
              type="text"
              name="projectTitle"
              id="company-website"
              className="border-solid border-2 border-base-200 w-full "
              placeholder="App development"
              {...register("projectTitle")}
            />

            <label
              htmlFor="about"
              className="block mt-5 mb-3  text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <textarea
              id="about"
              name="about"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="you@example.com"
              defaultValue={""}
              {...register("about")}
            />
            <label
              htmlFor="owner"
              className="inline-block mt-5 text-sm font-medium text-gray-700"
            >
              Owner Name :
            </label>

            <input
              type="text"
              name="owner"
              id="owner"
              placeholder="Mark Don"
              className="border-solid border-2 ml-2 border-base-200 w-56 "
              {...register("owner")}
            />

            <div className="flex mt-5">
              <div>
                <label
                  htmlFor="start"
                  className="text-sm font-medium text-gray-700"
                >
                  Starting Date:
                </label>

                <input
                  type="date"
                  name="startDate"
                  id="start"
                  className="border-solid border-2 border-base-200 w-48"
                  {...register("startDate")}
                />
              </div>

              <div>
                <label
                  htmlFor="end"
                  className="text-sm font-medium text-gray-700"
                >
                  Ending Date:
                </label>

                <input
                  type="date"
                  name="endDate"
                  id="end"
                  className="border-solid border-2 border-base-200 w-48"
                  {...register("endDate")}
                />
              </div>
            </div>

            <label
              htmlFor="owner"
              className="inline-block text-sm mt-5 font-medium text-gray-700"
            >
              Team Name :
            </label>

            <input
              type="text"
              name="team"
              id="team"
              placeholder="Mark Don"
              className="border-solid border-2 ml-2 border-base-200 w-56 "
              {...register("team")}
            />
            <div className="modal-action flex justify-between">
              <label for="my-modal" className="btn btn-info btn-sm">
                Cancel
              </label>
              <input
                type="submit"
                value="submit"
                className="btn btn-success btn-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;