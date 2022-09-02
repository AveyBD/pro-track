import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Calender from "./Components/Dashboard/Calender";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import DashWelcome from "./Components/Dashboard/DashWelcome";
import Feedback from "./Components/Dashboard/Feedback";
import Files from "./Components/Dashboard/Files";
import Inbox from "./Components/Dashboard/Inbox";
import Issues from "./Components/Dashboard/Issues";
import Meetings from "./Components/Dashboard/Meetings";
import MyTasks from "./Components/Dashboard/MyTasks";
import Profile from "./Components/Dashboard/Profile";
import ProjectDetails from "./Components/Dashboard/ProjectDetails";
import Projects from "./Components/Dashboard/Projects";
import TaskDetails from "./Components/Dashboard/TaskDetails";
import TaskPage from "./Components/Dashboard/TaskPage";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import RequireAuth from "./Components/Shared/RequireAuth";
import AboutUs from "./Pages/AboutUs";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import Customers from "./Pages/Customers";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/customers" element={<Customers></Customers>}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                {" "}
                <Admin />{" "}
              </RequireAuth>
            }
          />
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
              <DashboardHome></DashboardHome>
            </RequireAuth>
            }
          >
            <Route index element={<DashWelcome></DashWelcome>}></Route>
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route path="tasks" element={<MyTasks></MyTasks>}></Route>
            <Route path="taskPage/:id" element={<TaskPage />} />
            <Route path="taskDetails/:id" element={<TaskDetails/>} />  
            <Route path="projectDetails/:id" element={<ProjectDetails/>} />     
            <Route path="login" element={<Login />}></Route>
            <Route path="issues" element={<Issues />}></Route>
            <Route path="calender" element={<Calender />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="meetings" element={<Meetings />}></Route>
            <Route path="feedbacks" element={<Feedback></Feedback>}></Route>
            <Route path="inbox" element={<Inbox/>}></Route>
            <Route path="files" element={<Files></Files>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
