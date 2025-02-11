import React from "react";

const Companies = () => {
  return (
    <div className="pt-16 ">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div
        className="flex flex-wrap items-center justify-center gap-6
      md:gap-16 md:mt-10 mt-5"
      >
        <img
          src="src\assets\airbnb-2-logo-svgrepo-com.svg"
          alt="Airbnb"
          className="w-17 md:w-20"
        />
        <img
          src="src\assets\spotify-1-logo-svgrepo-com.svg"
          alt="Spotify"
          className="w-17 md:w-20"
        />
        <img
          src="src\assets\google-icon-logo-svgrepo-com.svg"
          alt="Google"
          className="w-17 md:w-20"
        />
        <img
          src="src\assets\microsoft-logo-svgrepo-com.svg"
          alt="MicroSoft"
          className="w-17 md:w-20"
        />
        <img
          src="src\assets\creative-cloud-cc-logo-svgrepo-com.svg"
          alt="Creative Cloud"
          className="w-17 md:w-20"
        />
      </div>
    </div>
  );
};

export default Companies;
