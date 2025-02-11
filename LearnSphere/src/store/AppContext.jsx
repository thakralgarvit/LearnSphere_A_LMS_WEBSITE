import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);

  // fun to get all the data to be sen to different parts of the project
  const getAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
