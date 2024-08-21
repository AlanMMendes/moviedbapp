"use client";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = () => {
  return (
    <Link href={`/watchlist`}>
      <button className="absolute top-0 right-0 z-50 px-4 py-1.5 mt-1 ml-2   text-white rounded-md ">
        <FaBookmark className="absolute z-50 right-0 mr-2 cursor-pointer text-white h-10 hover:scale-125" />
      </button>
    </Link>
  );
};

export default BookmarkButton;
