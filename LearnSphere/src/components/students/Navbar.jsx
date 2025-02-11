import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../store/AppContext";

const Navbar = () => {
  {
    /* fun() to dtermine color of navbar */
  }

  const { navigate } = useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
    border-b border-grey-500 py-4 ${
      isCourseListPage ? "bg-white" : "bg-cyan-100/70"
    }`}
    >
      <img onClick={() => navigate("/")}
        src="\src\assets\logo.png"
        alt=" Logo"
        className="w-18 lg:w-18 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button> | &nbsp;
              <Link to="/my-enrollment">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/* for phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button>Become Educator</button> | &nbsp;
              <Link to="/my-enrollment">My Enrollments</Link>
            </>
          )}
        </div>
        {
          user ? <UserButton/> : 
        <button onClick={() => openSignIn()} className="cursor-pointer">
          <PermIdentityIcon />
        </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
