import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setisEducator] = useState(true);

  // fun to get all the data to be sen to different parts of the project
  const getAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //fun to calculate avg rating of course
  const calRating = (course) => {
    if(course.courseRating.length === 0) return 0;
    
    let totalRating = 0;
    course.courseRating.forEach(rating => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRating.length;
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calRating,
    isEducator, setisEducator
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
