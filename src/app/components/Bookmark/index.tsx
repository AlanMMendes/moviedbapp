"use client";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = () => {
  return (
    <Link href={`/watchlist`}>
      <button className="  z-50  text-white rounded-md ">
        <FaBookmark className=" z-50 right-0 mr-2 cursor-pointer text-white h-10 hover:scale-125" />
      </button>
    </Link>
  );
};

export default BookmarkButton;
