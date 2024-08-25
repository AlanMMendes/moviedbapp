"use client";

import Alert from "@/app/components/Alert";
import ImageWithFallback from "@/app/components/ImageFallback";
import SkeletonSeries from "@/app/components/SeriesTrending/components/SkeletonSeriesTrending";
import Tooltip from "@/app/components/Tooltip";
import { fetchSearch } from "@/app/features/fetchSearch";
import { setData } from "@/app/features/watchListSlice";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBookmark, FaPlay, FaRegBookmark, FaStar } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";

function Search() {
  const params = useParams<{ type: string; query: string }>();
  const dispatch = useDispatch() as any;
  const [activeButtons, setActiveButtons] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [page, setPage] = useState(1);
  const dataSearch: any = useAppSelector((state: any) => state?.fetchSearch);
  const [selectedValue, setSelectedValue] = useState(1);
  const handleAddItem = (item: any) => {
    dispatch(setData(item));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
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
    dispatch(
      fetchSearch({
        type: params?.type,
        query: params?.query,
        page: selectedValue,
      })
    );
  }, [params, selectedValue, page, dispatch]);

  return (
    <div className="w-full h-auto flex gap-2 flex-col">
      {params.type === "movie" || params.type === "tv" ? (
        <>
          {dataSearch?.status === "loading" && <SkeletonSeries />}
          {dataSearch?.status === "idle" && <SkeletonSeries />}
          {dataSearch?.status === "succeeded" && (
            <div className="w-full h-full flex items-center flex-col gap-2 ">
              <h1 className="px-4 py-2 font-bold text-2xl">
                Searching for: {params?.type.toUpperCase()} - {params?.query}
              </h1>
              <div className="grid lg:grid-cols-2 min-w-full md:grid-cols-2 grid-cols-1 gap-4 overflow-visible px-2">
                {dataSearch?.data?.results?.map((item: any, key: any) => {
                  return (
                    <div
                      className="relative w-full h-auto justify-start flex "
                      key={`${key}-search-pictures`}
                    >
                      <ImageWithFallback
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        fallbackSrc="https://placehold.co/600x400/png"
                        alt={item?.backdrop_path || "search-backdrop-path"}
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

                        <Tooltip
                          title={item?.name || item?.title}
                          overview={item?.overview}
                        />
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
                          <Link href={`/${params?.type}/${item?.id}`}>
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
        </>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <h1 className="px-4 py-2 font-bold text-2xl">
            Searching for: {params?.type.toUpperCase()} - {params?.query}
          </h1>{" "}
          <div className="grid lg:grid-cols-4 min-w-full md:grid-cols-2 grid-cols-1 gap-4 min-h-[32rem] px-2 max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {dataSearch?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-modal-trending-people`}
                  className="relative w-full min-w-full h-auto justify-center items-center flex flex-col hover:scale-95 cursor-pointer"
                >
                  <ImageWithFallback
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    fallbackSrc="https://placehold.co/600x400/png"
                    alt={item?.backdrop_path || "search-backdrop-path"}
                    width={0}
                    height={0}
                    sizes="200vw"
                  />

                  <div className="w-full bottom-0 px-2 py-3 flex flex-col justify-center items-center ">
                    <span>{item?.name}</span>
                    <div className="flex flex-row gap-2 justify-start items-center">
                      <FaRankingStar className="text-yellow-400 h-5 w-5" />
                      <span>{Math.floor(item?.popularity)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
        {dataSearch?.status === "succeeded" && (
          <>
            <div className="flex gap-2">
              {Array.from({
                length: dataSearch?.data?.total_pages,
              })
                .slice(0, 5)
                .map((_, index) => {
                  const displayIndex = index + 1;
                  return (
                    <button
                      onClick={() => setSelectedValue(displayIndex)}
                      key={displayIndex}
                      className={`h-12 ${
                        selectedValue === displayIndex ? "bg-yellow-500" : ""
                      } hover:bg-yellow-500  rounded-full border w-auto min-w-12`}
                      value={displayIndex}
                    >
                      {displayIndex}
                    </button>
                  );
                })}
            </div>
            <div className="relative flex flex-row  justify-center items-center py-4 px-2">
              <select
                value={selectedValue}
                onChange={handleChange}
                className="block cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
              >
                <>
                  <option
                    className="block gap-4 h-10 w-14 bg-zinc-900 cursor-pointer  "
                    value=""
                  >
                    Select a page
                  </option>
                  {Array.from({
                    length: dataSearch?.data?.total_pages,
                  }).map((_, index) => {
                    const displayIndex = index + 1;
                    return (
                      <option
                        key={displayIndex}
                        className="gap-4 h-10 w-full bg-zinc-900 cursor-pointer  "
                        value={displayIndex}
                      >
                        {`Page ${displayIndex || "1"}`}
                      </option>
                    );
                  })}
                </>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
