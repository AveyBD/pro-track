import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const DashboardNav = () => {
    return (
        <div>
            <div class="flex justify-between items-center h-14 bg-gray-100 dark:bg-gray-800 header-right">

                {/* search-bar */}
                <div class="bg-white rounded flex items-center ml-3 w-60 max-w-xl p-2 shadow-sm border border-gray-200">
                    <button class="outline-none focus:outline-none">
                        <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <input type="search" name="" id="" placeholder="Search" class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                </div>
                <div>
                    <ul class="flex items-center">
                        <li>
                            <label class="swap swap-rotate mr-3">

                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" />

                                {/* <!-- sun icon --> */}
                                <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* <!-- moon icon --> */}
                                <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </li>

                        <li>
                            <button aria-label="chat" class="w-8 h-8 mr-3 rounded-xl  focus:bg-gray-100 active:bg-gray-200">
                                <div className='indicator'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                    <span class="badge badge-xs bg-rose-700 indicator-item">3</span>
                                </div>
                            </button>
                        </li>

                        <li>
                            <button aria-label="notification" class="w-8 h-8 mr-3 rounded-xl focus:bg-gray-100 active:bg-gray-200">
                                <div className='indicator'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                    </svg>
                                    <span class="badge badge-xs bg-rose-700 indicator-item">3</span>
                                </div>
                            </button>
                        </li>

                        <li>
                            <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                        </li>

                        {/* profile */}
                        <li>
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex="0"
                                    className="btn btn-ghost btn-circle avatar online"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/80/80/people" alt="" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex="0"
                                    className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href="/">Admin console</a>
                                    </li>
                                    <li>
                                        <a href="/">My Settings</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            More{" "}
                                            <span className="ml-24">
                                                <FiMoreVertical />
                                            </span>
                                        </a>
                                    </li>
                                    <hr />
                                    <li>
                                        <a href="/">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;