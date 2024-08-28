"use client";
import { useAppSelector } from "@/app/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ImageWithTooltipPerson from "../ImageWithTooltipPerson";

export default function PeopleTrending() {
  const peopleData: any = useAppSelector((state: any) => state.fetchPeopleData);

  return (
    <>
      {peopleData.status === "succeeded" && (
        <div className="mb-14 w-full h-auto flex items-start flex-col ">
          <h1 className="px-2 py-2 font-bold text-2xl">People Trending</h1>
          <div className="px-2 grid lg:grid-cols-8 min-w-full md:grid-cols-5 grid-cols-2 gap-4 min-h-[32rem] max-h-[44rem] custom-scrollbar overflow-y-scroll overflow-x-hidden">
            {peopleData?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-modal-trending-people`}
                  className="w-auto flex flex-col "
                >
                  <ImageWithTooltipPerson
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    alt={item?.profile_path || "post-profile_path"}
                    props={{
                      type: "person",
                      id: item?.id,
                      name: item?.name,
                      popularity: item?.popularity,
                      profile_path: item?.profile_path,
                      known_for: item?.known_for,
                    }}
                  />

                  <div className="w-full bottom-0  py-3 flex flex-col justify-start items-start ">
                    <h1 className="max-w-32 max-h-5 overflow-x-hidden overflow-y-auto text-sm">
                      {item?.name}
                    </h1>
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
