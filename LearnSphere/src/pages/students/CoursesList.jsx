import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/AppContext";
import SearchBar from "../../components/students/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/students/CourseCard";
import ClearIcon from "@mui/icons-material/Clear";
import Footer from "../../components/students/Footer";

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filCourse, setFilCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div className="">
            <h1 className="text-4xl font-semibold text-gray-800">
              Course List
            </h1>
            <p className="text-gray-500">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              /<span>CourseList</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>
        {input && (
          <div
            className="inline-flex items-center gap-4 px-4 py-2 
          border mt-8 mb-8 text-gray-600"
          >
            <p>{input}</p>
            <ClearIcon
              className="cursor-pointer"
              onClick={() => {
                navigate("/course-list");
              }}
            />
          </div>
        )}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 my-16 gap-3 px02 md:p-0"
        >
          {filCourse.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
