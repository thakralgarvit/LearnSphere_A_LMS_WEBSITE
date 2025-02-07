import React from "react";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Navbar = () => {
  {
    /* fun() to dtermine on which u are so that color of navbar could be manupulated */
  }
  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
    border-b border-grey-500 py-4 ${
      isCourseListPage ? "bg-white" : "bg-cyan-100/70"
    }`}
    >
      <img
        src="\src\assets\logo.png"
        alt=" Logo"
        className="w-18 lg:w-18 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div>
          <button>Become Educator</button> | &nbsp;
          <Link to="/my-enrollment">My Enrollments</Link>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>
      </div>
      {/* for phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          <button>Become Educator</button> | &nbsp;
          <Link to="/my-enrollment">My Enrollments</Link>
        </div>
        <button className="cursor-pointer" >
          <PermIdentityIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
