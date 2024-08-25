"use client";
import { fetchPeopleData } from "@/app/features/fetchPeopleSlice";
import { useAppSelector } from "@/app/store";
import { useEffect } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ImageWithFallback from "../ImageFallback";
import SkeletonPeople from "./components/SkeletonPeople";

export default function PeopleTrending() {
  const dispatch: any = useDispatch();
  const peopleData: any = useAppSelector((state: any) => state.fetchPeopleData);

  useEffect(() => {
    dispatch(fetchPeopleData());
  }, [dispatch]);

  return (
    <>
      {peopleData?.status === "loading" && <SkeletonPeople />}
      {peopleData?.status === "idle" && <SkeletonPeople />}
      {peopleData.status === "succeeded" && (
        <div className="w-full h-auto flex items-start flex-col ">
          <h1 className="px-4 py-2 font-bold text-2xl">People Trending</h1>
          <div className="grid lg:grid-cols-4 min-w-full md:grid-cols-3 grid-cols-1 gap-4 min-h-[32rem] px-2 max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {peopleData?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-modal-trending-people`}
                  className="relative w-full min-w-full h-auto justify-center items-center flex flex-col hover:scale-95 cursor-pointer"
                >
                  <ImageWithFallback
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    fallbackSrc="https://placehold.co/600x400/png"
                    alt={item?.profile_path || "post-profile_path"}
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
    </>
  );
}
