import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { useQuery } from "react-query";
import { BiTask } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiOutlineInbox } from "react-icons/hi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import DashboardNav from "./DashboardNav";
import logo from "../../images/facicon.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashboardHome = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const navigateToTask = (id) => {
    navigate(`/dashboard/projectDetails/${id}`);
  };

  const [user] = useAuthState(auth);
  const email = user.email;

  const { data: allProjects, refetch } = useQuery("project", () =>
    fetch(`https://protrackbd.herokuapp.comprojects?email=${email}`, {
      method: "GET",
    }).then((res) => res.json())
  );
  refetch();

  return (
    <div className="flex">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}

          <div>
            <DashboardNav />
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu overflow-y-auto lg:w-76 w-60  bg-base-100 text-base-content bg-background">
            <div className="flex justify-center mt-3">
              <img width={200} src={logo} alt="" />
            </div>
            <div class="block w-72 h-1 mt-2 bg-gray-400 dark:bg-gray-700"></div>

            {/* <!-- Sidebar content here --> */}
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Main
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/dashboard"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/projects"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <GrProjects />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Projects
                </span>
                <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-indigo-50 rounded-full">
                  New
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/tasks"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <BiTask className="w-5 h-5" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  My Tasks
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/calender"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <AiTwotoneCalendar className="w-5 h-5" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Calender
                </span>
                <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/inbox"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <HiOutlineInbox className="w-5 h-5" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Inbox</span>
                <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/meetings"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <MdOutlineMeetingRoom className="w-5 h-5" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Meetings
                </span>
                <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </Link>
            </li>
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Recent Projects
                </div>
              </div>
            </li>
            {allProjects
              ?.slice(0 - 3)
              .reverse()
              .map((project) => (
                <li className="ml-10 py-2 cursor-pointer text-sm tracking-wide">
                  {project.data?.projectTitle}
                </li>
              ))}

            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </li>

            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Feedback
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/dashboard/feedbacks"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <VscFeedback className="w-5 h-5" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Feedback
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
