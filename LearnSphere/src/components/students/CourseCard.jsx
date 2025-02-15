import React, { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CourseCard = ({ course }) => {
  const { currency, calRating } = useContext(AppContext);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500 pb-6 overflow-hidden rounded-lg"
    >
      <img src={course.courseThumnail} alt="thumbnail" className="w-full " />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">Sharadha</p>
        <div className="flex items-center space-x-2"> 
          <p>{calRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              (i < Math.floor(calRating(course))) ? 
              <StarIcon key={i} className="text-orange-400" /> : 
              <StarBorderIcon key={i} className="text-gray-400"/>
            ))}
          </div>
          <p className="text-gray-500">{course.courseRating.length}</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
