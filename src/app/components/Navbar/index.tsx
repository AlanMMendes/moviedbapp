"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { SiThemoviedatabase } from "react-icons/si";
import Dropdown from "../Dropdown";
import SearchInput from "../SearchInput";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black text-white border border-t-0 border-l-0 border-r-0 border-b-zinc-800">
      <div className="p-2 flex items-center justify-between ">
        <div className="text-md font-extralight">
          <Link
            href={`https://www.linkedin.com/in/alan-mazeto-mendes-282751208/`}
            className="rounded justify-center flex items-center w-auto border-zinc-900"
          >
            <SiThemoviedatabase className="h-auto w-6 hover:text-yellow-500" />
          </Link>
        </div>
        <ul
          className={`items-center w-auto justify-center flex flex-wrap gap-5
          `}
        >
          <li className="w-auto flex justify-center items-center">
            <Dropdown
              component={<SearchInput />}
              icon={<CiSearch className="hover:text-yellow-500 h-6 w-6" />}
            />
          </li>
          <li className="w-auto flex justify-center items-center">
            <Link href={`/watchlist`}>
              <FaBookmark className="hover:text-yellow-500 h-5 w-5" />
            </Link>
          </li>
          <li className="w-auto flex justify-center items-center">
            <Link href={`/`}>
              <IoMdHome className="hover:text-yellow-500 h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
