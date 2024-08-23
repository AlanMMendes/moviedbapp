"use client";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";

export default function WatchList() {
  const watchList: any = useAppSelector((state: any) => state.watchList.items);

  return (
    <>
      {watchList?.length === 0 ? (
        <div className="relative w-full h-auto flex flex-col min-h-44  justify-center md:justify-start lg:justify-start">
          <div className="py-4">
            <span className="text-2xl">Your Watchlist</span>
          </div>
          <div className="w-64 justify-center items-center text-white flex flex-row bg-zinc-900  min-h-44 h-44 rounded-lg shadow-md">
            <span className="text-white px-2">
              It seems that your watchlist its empty
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="py-4">
            <span className="text-2xl ">Your Watchlist</span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-2 max-h-[44rem]  overflow-x-auto">
            {watchList?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-watch-list-component`}
                  className="flex flex-col"
                >
                  <Image
                    src={
                      `https://image.tmdb.org/t/p/original/${item?.backdrop_path}` ||
                      "https://placehold.co/600x400"
                    }
                    alt={item?.backdrop_path}
                    className="mask rounded-xl"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <div className=" w-full bottom-0 py-3 px-2">
                    <div className="">
                      <span>{item?.name}</span>
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <FaStar className="text-yellow-400 h-5 w-5" />
                        <span>{Math.floor(item?.vote_average)}</span>
                        <GoThumbsup className="h-5 w-5" />
                        <span>{item?.vote_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
