import React from "react";
import { dummytextimonial } from "../../assets/assets2";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const TestimonialSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Here are some of our learners as they share their journey of
        transformation & scucess <br /> you can do it too Just Enroll.
      </p>
      <div>
        {dummytextimonial.map((test, idx) => (
          <div
            className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
            key={idx}
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img
                className="h-12 w-12 rounded-full"
                src={test.image}
                alt="userImage"
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {test.name}
                </h1>
                <p className="text-gray-800/80">{test.role}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(test.rating) ? (
                      <StarIcon key={i} className="text-orange-400 text-base" />
                    ) : (
                      <StarBorderIcon
                        key={i}
                        className="text-gray-400 text-base"
                      />
                    )
                  )}
                </div>
              </div>
              <p className="text-gray-500 mt-5">{test.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 px-2 mt-2">
              Read more...
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
