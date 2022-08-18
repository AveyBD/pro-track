import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="dashboard/mytask"> My Task</Link>
            </li>
            <li>
              <Link to="dashboard/teams"> My Teams</Link>
            </li>
            <li>
              <Link to="dashboard/meetings"> My Meetings</Link>
            </li>
            <li>
              <Link to="dashboard/teams"> My Teams</Link>
            </li>
            <li>
              <Link to="dashboard/taskPage"> My Teams</Link>
            </li>
            {/* <li>
              <Link>Sidebar Item 2</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
