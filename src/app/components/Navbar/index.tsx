"use client";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" text-white bg-gradient-to-r from-zinc-900">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-md font-extralight">Movie DB App</div>

        <div
          className={`items-center justify-center flex ml-auto  gap-2
          `}
        >
          <Link
            href={`/watchlist`}
            className=" hover:bg-zinc-900 rounded justify-center flex items-center hover:scale-95 w-32"
          >
            <div className="flex justify-center items-center">
              <FaBookmark className=" z-50 right-0 mr-2 cursor-pointer text-white h-10 " />
              <h1>Watchlist</h1>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
