import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom"; //to navigate from a page to another

const SearchBar = ({ data }) => {
  const [input, setInput] = useState(data ? data : "");
  const navigate = useNavigate();

  const onSearchHandler = (evt) => {
    evt.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center
      bg-white border border-gray-500/20 rounded mt-4"
    >
      <SearchIcon className="mx-2 text-gray-600" />
      <input
        onChange={(evt) => setInput(evt.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="w-full
        h-full outline-none text-gray-600"
      />
      <button
        type="submit"
        className="bg-logo-l rounded text-white md:px-10
        px-7 md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
