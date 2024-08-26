"use client";
import { useAppSelector } from "@/app/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ImageWithFallback from "../ImageFallback";
import SkeletonPeople from "./components/SkeletonPeople";

export default function PeopleTrending() {
  const peopleData: any = useAppSelector((state: any) => state.fetchPeopleData);

  return (
    <>
      {peopleData.status === "succeeded" ? (
        <div className="w-full h-auto flex items-start flex-col ">
          <h1 className=" py-2 font-bold text-2xl">People Trending</h1>
          <div className="grid lg:grid-cols-8 min-w-full md:grid-cols-5 grid-cols-2 gap-4 min-h-[32rem] max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {peopleData?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-modal-trending-people`}
                  className="w-auto flex flex-col "
                >
                  <ImageWithFallback
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    fallbackSrc={"https://placehold.co/600x400/png"}
                    alt={item?.profile_path || "post-profile_path"}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />

                  <div className="w-full bottom-0  py-3 flex flex-col justify-start items-start ">
                    <h1 className="max-w-32 max-h-5 overflow-x-hidden overflow-y-auto text-sm">
                      {item?.name}
                    </h1>
                    {/* <div className="flex flex-row gap-2 justify-start items-center">
                      <FaRankingStar className="text-yellow-400 h-5 w-5" />
                      <h1>{Math.floor(item?.popularity)}</h1>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <SkeletonPeople />
      )}
    </>
  );
}
