"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("movie");
  const [searchValue, setSearchValue] = useState() as any;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  const handleFilter = () => {
    if (!searchValue) return;
    router.push(
      `/search/${
        selectedFilter === "all" ? "keyword" : selectedFilter
      }/${searchValue}`
    );
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleFilter();
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center border-gray-300 rounded-lg">
        <input
          type="text"
          className="flex-1 p-2 border-none rounded-l-lg w-36 text-black"
          placeholder={`Search for ${selectedFilter}`}
          onKeyDown={handleKeyDown}
          onChange={(e: any) => setSearchValue(e.target.value)}
        />
        <button
          onClick={toggleDropdown}
          className="bg-zinc-900 hover:bg-yellow-500 text-white px-2 min-w-12 h-10"
        >
          {selectedFilter}
        </button>
        <button
          onClick={() => handleFilter()}
          className="bg-zinc-900 hover:bg-yellow-500 text-white px-4 h-10 rounded-r-lg"
        >
          <CiSearch />
        </button>
      </div>

      {isOpen && (
        <div className="absolute mx-auto w-20 left-24 bg-white border-gray-300 rounded-lg shadow-lg">
          <button
            onClick={() => handleFilterChange("movie")}
            className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-yellow-500 w-full rounded-lg text-left"
          >
            movie
          </button>
          <button
            onClick={() => handleFilterChange("tv")}
            className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-yellow-500 w-full rounded-lg text-left"
          >
            tv
          </button>
          <button
            onClick={() => handleFilterChange("person")}
            className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-yellow-500 w-full rounded-lg text-left"
          >
            person
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
