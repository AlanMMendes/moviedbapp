"use client";
import { useState } from "react";
import BackButton from "../components/BackButton";
import SearchInput from "./components/SearchInput";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-2/3 h-auto mx-auto px-2">
      <BackButton />
      <div className="flex flex-row w-full lg:w-2/3 md:w-2/3 min-h-8 mx-auto justify-center py-5 ">
        <SearchInput
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Search;
