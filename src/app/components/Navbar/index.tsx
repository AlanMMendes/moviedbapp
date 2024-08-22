"use client";
import BookmarkButton from "../Bookmark";

const Navbar = () => {
  return (
    <nav className=" text-white bg-gradient-to-r from-zinc-900">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-md font-extralight">Movie App</div>

        <div
          className={`items-center justify-center flex ml-auto  gap-2
          `}
        >
          <div className=" hover:bg-gray-700 rounded justify-center flex items-center">
            <BookmarkButton /> Watchlist
          </div>
          <div className=" hover:bg-gray-700 rounded justify-center flex items-center">
            Search
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
