import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Calender from "./Components/Dashboard/Calender";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import DashWelcome from "./Components/Dashboard/DashWelcome";
import Feedback from "./Components/Dashboard/Feedback";
import Files from "./Components/Dashboard/Files";
import Issues from "./Components/Dashboard/Issues";
import Meetings from "./Components/Dashboard/Meetings";
import MyTasks from "./Components/Dashboard/MyTasks";
import Projects from "./Components/Dashboard/Projects";
import TaskPage from "./Components/Dashboard/TaskPage";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<DashboardHome></DashboardHome>}>
            <Route index element={<DashWelcome></DashWelcome>}></Route>
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route path="tasks" element={<MyTasks></MyTasks>}></Route>
            <Route path="taskPage/:id" element={<TaskPage />} />
            {/* <Route path="taskPage" element={<TaskPage />} /> */}
            <Route path="login" element={<Login />}></Route>
            <Route path="issues" element={<Issues />}></Route>
            <Route path="calender" element={<Calender />}></Route>
            <Route path="meetings" element={<Meetings />}></Route>
            <Route path="feedbacks" element={<Feedback></Feedback>}></Route>
            <Route path="files" element={<Files></Files>}></Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
