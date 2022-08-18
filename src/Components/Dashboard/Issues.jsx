import React from "react";

const Issues = () => {
  return (
    <div>
      <div>
        <h1>End Day's Report</h1>

        <form
          action="
      
      "
        >
          <h1>Name</h1>
          <input type="text" name="" id="" placeholder="Enter First Name" />
          <br />
          <input
            className="my-4"
            type="text"
            name=""
            id=""
            placeholder="Enter Second Name"
          />

          <h1>Type your Isuue Here</h1>
          <textarea name="" id="" cols="30" rows="10"></textarea>

          <h1>Name of Department</h1>
          <input type="text" name="" id="" placeholder="Enter Department" />
          <br />
        </form>
        <button className="btn btn-primary my-4">Submit</button>
      </div>
    </div>
  );
};

export default Issues;
