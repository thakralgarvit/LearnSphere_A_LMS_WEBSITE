import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Your Learning Journey Starts Here
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Explore a world of knowledge with our diverse range of courses. <br />
        From tech skills to creative arts, find the perfect learning path for
        you.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-logo-l">
          Get Started
        </button>
        <button className="flex items-center gap-2">
          Learn more <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
