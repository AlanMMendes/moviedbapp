"use client";
import { useAppSelector } from "@/app/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ImageWithTooltip from "../ImageWithTooltip";
import SkeletonSeries from "./components/SkeletonSeriesTrending";

export default function SeriesTrending() {
  const dataSeries: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending
  );

  return (
    <>
      {dataSeries.status === "succeeded" ? (
        <>
          <h1 className="font-bold text-2xl">Series Trending</h1>
          <div className="grid lg:grid-cols-4 min-w-full md:grid-cols-3 grid-cols-1 gap-4 min-h-[32rem] max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {dataSeries?.data?.results?.map((item: any) => {
              return (
                <div key={item?.id} className="flex flex-col">
                  <ImageWithTooltip
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                    alt={item?.backdrop_path || "item-backdrop_path-series"}
                    props={{
                      type: "tv",
                      id: item?.id,
                      name: item?.name,
                      vote_count: item?.vote_count,
                      vote_average: item?.vote_average,
                      backdrop_path: item?.backdrop_path,
                      overview: item?.overview,
                    }}
                  />
                  <h1 className="text-lg font-extralight">{item?.name}</h1>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <SkeletonSeries />
      )}
    </>
  );
}
