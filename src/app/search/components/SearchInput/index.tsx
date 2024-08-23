"use client";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ value, onChange, placeholder }: any) => {
  return (
    <div className="relative flex items-center w-full h-auto">
      <FaSearch className="absolute left-3 text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 text-black pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchInput;
