"use client";
import { fetchSeriesTrending } from "@/app/features/fetchSeriesTrendingSlice";
import { setData } from "@/app/features/watchListSlice";
import { useAppSelector } from "@/app/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBookmark, FaPlay, FaRegBookmark, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import Alert from "../Alert";
import ImageWithFallback from "../ImageFallback";
import Tooltip from "../Tooltip";
import SkeletonSeries from "./components/SkeletonSeriesTrending";

export default function SeriesTrending() {
  const dispatch: any = useDispatch();
  const [activeButtons, setActiveButtons] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);
  const dataSeries: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending
  );

  const handleAddItem = (item: any) => {
    dispatch(setData(item));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleClick = (index: any) => {
    setActiveButtons((prevActiveButtons: any) => {
      const isActive = prevActiveButtons.includes(index);
      if (isActive) {
        return prevActiveButtons.filter((i: any) => i !== index);
      } else {
        return [...prevActiveButtons, index];
      }
    });
  };

  useEffect(() => {
    dispatch(fetchSeriesTrending());
  }, [dispatch]);

  return (
    <div className="w-full h-auto">
      {dataSeries.status === "idle" && <SkeletonSeries />}
      {dataSeries.status === "loading" && <SkeletonSeries />}
      {dataSeries.status === "succeeded" && (
        <div className="w-full h-auto flex items-start flex-col ">
          <h1 className="px-4 py-2 font-bold text-2xl">Series Trending</h1>
          <div className="grid lg:grid-cols-3 min-w-full md:grid-cols-2 grid-cols-1 gap-4 min-h-[32rem] px-2 max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {dataSeries?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  className="relative h-auto justify-start flex "
                  key={`${key}-series-trending`}
                >
                  <ImageWithFallback
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                    fallbackSrc="https://placehold.co/600x400/png"
                    alt={item?.backdrop_path || "post-backdrop_path"}
                    width={0}
                    height={0}
                    sizes="200vw"
                  />
                  <div className="absolute w-full top-0 px-2 ">
                    <div className="flex flex-row gap-2 justify-start items-center">
                      <button
                        key={key}
                        onClick={() => {
                          handleClick(key);
                          handleAddItem(item);
                        }}
                        className={`px-4 py-2 rounded-md transition-colors duration-300`}
                      >
                        {activeButtons.includes(key) ? (
                          <FaBookmark className="text-yellow-400 h-10 hover:scale-125" />
                        ) : (
                          <FaRegBookmark className="text-yellow-400 h-10 hover:scale-125" />
                        )}
                      </button>
                    </div>

                    <Tooltip title={item?.name} overview={item?.overview} />
                  </div>
                  <div className="absolute w-full bottom-0 py-3 px-2 flex flex-row">
                    <div className="w-full">
                      <span>{item?.name}</span>
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <FaStar className="text-yellow-400 h-5 w-5" />
                        <span>{Math.floor(item?.vote_average)}</span>
                        <GoThumbsup className="h-5 w-5" />
                        <span>{item?.vote_count}</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-end">
                      <Link href={`/tv/${item?.id}`}>
                        <FaPlay className="h-8 w-8 hover:scale-95 hover:text-yellow-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showAlert && (
            <Alert
              message="Added to the watchlist!"
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
