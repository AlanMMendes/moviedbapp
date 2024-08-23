"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="text-white border border-t-0 border-l-0 border-r-0 border-b-zinc-800">
      <div className="container mx-auto p-4 flex items-center justify-between ">
        <div className="text-md font-extralight"></div>

        <div
          className={`items-center justify-center flex 
          `}
        >
          <Link
            href={`/search`}
            className="rounded justify-center flex items-center hover:scale-95 w-32"
          >
            <div className="flex justify-center items-center hover:text-yellow-500">
              <CiSearch className=" z-50 right-0 mr-2 cursor-pointer h-10" />
              <h1>Search</h1>
            </div>
          </Link>
          <Link
            href={`/watchlist`}
            className="rounded justify-center flex items-center hover:scale-95 w-32"
          >
            <div className="flex justify-center items-center hover:text-yellow-500 ">
              <FaBookmark className=" z-50 right-0 mr-2 cursor-pointer h-10" />
              <h1>Watchlist</h1>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
