import React from "react";
{/* these are used to route between pages */}
import { Route, Routes, useMatch } from "react-router-dom"; 
import Home from "./pages/students/Home";
import CoursesList from "./pages/students/CoursesList";
import CourseDetails from "./pages/students/CourseDetails";
import MyEnrollments from "./pages/students/MyEnrollments";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educators/Educator";
import Dashboard from "./pages/educators/Dashboard";
import AddCourse from "./pages/educators/AddCourse";
import MyCourses from "./pages/educators/MyCourses";
import StudentsEnrolled from "./pages/educators/StudentsEnrolled";
import Navbar from "./components/students/Navbar";

{/*  */}

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white">
      {/* as the educators have different navbar */}
      {!isEducatorRoute && <Navbar />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollment" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          {/* nested Route pages */}
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-couses" element={<MyCourses />} />
          <Route path="studentsEnrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
