"use client";
import { useAppSelector } from "@/app/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import ImageWithTooltip from "../ImageWithTooltip";

export default function WatchList() {
  const watchList: any = useAppSelector((state: any) => state.watchList.items);
  const episodes = watchList.filter((item: any) => item.type === "episodes");
  const series = watchList.filter((item: any) => item.type === "tv");
  const movies = watchList.filter((item: any) => item.type === "movie");

  return (
    <div className="min-h-screen px-2 mt-10">
      {watchList?.length === 0 ? (
        <div className="relative w-full h-auto flex flex-col min-h-44 justify-center items-center">
          <div className="py-4">
            <h1 className="text-2xl">Your Watchlist</h1>
          </div>
          <div className="w-3/4 border border-dotted justify-center items-center text-white flex flex-row min-h-64 rounded-lg shadow-md">
            <span className="text-white px-2">
              It seems that your watchlist its empty
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="py-4 px-2 justify-center items-center flex">
            <h1 className="text-2xl">Your Watchlist</h1>
          </div>

          {series.length > 0 && (
            <>
              <h1 className="px-2 py-2 text-2xl">Series:</h1>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-2 max-h-[44rem]  overflow-x-auto">
                {series?.map((item: any, key: any) => {
                  return (
                    <div key={item?.id} className="flex flex-col">
                      <>
                        <ImageWithTooltip
                          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                          alt={
                            item?.backdrop_path || "item-backdrop_path-series"
                          }
                          props={{
                            type: item.type,
                            id: item?.id,
                            name: item?.name,
                            active: true,
                            vote_count: item?.vote_count,
                            vote_average: item?.vote_average,
                            backdrop_path: item?.backdrop_path,
                            overview: item?.overview,
                            genre_ids: item?.genre_ids,
                          }}
                        />
                        <h1 className="text-lg font-extralight">
                          {item?.name}
                        </h1>
                      </>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {episodes.length > 0 && (
            <>
              <h1 className="px-2 py-2 text-2xl">Episodes:</h1>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-2 max-h-[44rem]  overflow-x-auto">
                {episodes?.map((item: any, key: any) => {
                  return (
                    <div key={item?.id} className="flex flex-col">
                      <>
                        <ImageWithTooltip
                          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                          alt={
                            item?.backdrop_path || "item-backdrop_path-series"
                          }
                          props={{
                            type: item.type,
                            id: item?.id,
                            active: true,
                            name: item?.name,
                            title: item?.title,
                            vote_count: item?.vote_count,
                            vote_average: item?.vote_average,
                            backdrop_path: item?.backdrop_path,
                            overview: item?.overview,
                          }}
                        />
                        <h1 className="text-lg font-extralight">
                          {item?.name}
                        </h1>
                      </>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {movies.length > 0 && (
            <>
              <h1 className="px-2 py-2 text-2xl">Movies:</h1>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-2 max-h-[44rem]  overflow-x-auto">
                {movies?.map((item: any, key: any) => {
                  return (
                    <div key={item?.id} className="flex flex-col">
                      <>
                        <ImageWithTooltip
                          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                          alt={
                            item?.backdrop_path || "item-backdrop_path-series"
                          }
                          props={{
                            type: item.type,
                            id: item?.id,
                            active: true,
                            name: item?.original_title,
                            vote_count: item?.vote_count,
                            vote_average: item?.vote_average,
                            backdrop_path: item?.backdrop_path,
                            overview: item?.overview,
                          }}
                        />
                        <h1 className="text-lg font-extralight">
                          {item?.name}
                        </h1>
                      </>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
