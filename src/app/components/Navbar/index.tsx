"use client";
import SearchInput from "@/app/components/SearchInput";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { SiThemoviedatabase } from "react-icons/si";
import Dropdown from "../Dropdown";

const Navbar = () => {
  return (
    <nav className="text-white border border-t-0 border-l-0 border-r-0 border-b-zinc-800">
      <div className="p-2 flex items-center justify-between ">
        <div className="text-md font-extralight">
          <Link
            href={`https://www.linkedin.com/in/alan-mazeto-mendes-282751208/`}
            className="rounded justify-center flex items-center hover:scale-95 w-auto  border-zinc-900"
          >
            <SiThemoviedatabase className="h-8 w-8 hover:text-yellow-500" />
          </Link>
        </div>
        <div
          className={`items-center justify-center flex flex-wrap gap-2
          `}
        >
          <div className="flex justify-center items-center ">
            <Dropdown
              component={<SearchInput />}
              icon={<CiSearch className="h-auto w-6 hover:text-yellow-500" />}
            />
          </div>

          <Link
            href={`/watchlist`}
            className="rounded justify-center flex items-center hover:scale-95 w-auto  border-zinc-900"
          >
            <div className="flex justify-center items-center hover:text-yellow-500 ">
              <FaBookmark className="z-50 py-2 mr-2 cursor-pointer h-10 w-8" />
            </div>
          </Link>
          <Link
            href={`/`}
            className="rounded justify-center flex items-center hover:scale-95 w-auto  border-zinc-900"
          >
            <div className="flex justify-center items-center hover:text-yellow-500 ">
              <IoMdHome className="z-50  mr-2 cursor-pointer h-10 w-8" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
