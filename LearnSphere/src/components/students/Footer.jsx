import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className="bg-logo-l md:px-36 text-left w-full mt-10">
      <div
        className="flex flex-col md:flex-row items-start px-8 md:px-0 
      justify-center gap-10 md:gap-32 py-10 border-b border-white/30"
      >
        <div className="md:items-start items-center w-full">
          <h1 className="text-logo-s text-2xl">LEARN<b>SPHERE</b></h1>
          {/* <img className="w-15" src="src\assets\logo1.png" alt="logo" /> */}
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Connecting learners with expert instructors in a dynamic online
            environment. Explore a wide range of subjects, from technology to
            creative arts, and embark on your learning journey
          </p>
        </div>

        <div className="flex flex-col md:items-center items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul
            className="flex md:flex-col w-full justify-between text-sm 
          text-white md:space-y-2 items-center"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white">
            The latest news, articles & resources sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-gray-500/30 bg-gray-800
               text-gray-500 placeholder-gray-500 outline-none
                w-64 h-9 rounded px-2 text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-white w-24 h-9 text-logo-l rounded">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <p className=" text-white/60 text-center p-2 text-xs md:text-sm">
        Copyright 2025 <CopyrightIcon /> Learn Sphere. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
