import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../store/AppContext";
import Loading from "../../components/students/Loading";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  const { allCourses, calRating } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div
        className="flex md:flex-row flex-col-reverse gap-10 relative 
    items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left"
      >
        <div
          className="absolute top-0 left-0 w-full h-section-height
          -z[-1] bg-gradient-to-b from-cyan-100/70"
        ></div>

        {/* left side */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1
            className="md:course-details-headoing-large course-details-headoing-small
            font-semibold text-gray-800"
          >
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* rating */}
          <div className="flex items-center space-x-2 pt-3 pb-2 text-sm">
            <p>{calRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(calRating(courseData)) ? (
                  <StarIcon key={i} className="text-orange-400" />
                ) : (
                  <StarBorderIcon key={i} className="text-gray-400" />
                )
              )}
            </div>
            <p className="text-blue-600 cursor-pointer">
              ({courseData.courseRating.length}{" "}
              {courseData.courseRating.length > 1 ? "ratings" : "rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents > 1 ? "students" : "student"}
            </p>
          </div>
          <p className="text-sm">
            Course by: <span className="text-blue-600 underline cursor-pointer">Sharadha</span>
          </p>
        </div>

        {/* right side */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
