"use client";
import ImageWithTooltip from "@/app/components/ImageWithTooltip";
import Loading from "@/app/components/Loading";
import Navbar from "@/app/components/Navbar";
import { fetchSeriesTrendingAll } from "@/app/features/fetchSeriesTrendingAllSlice";
import { fetchViewAllAiring } from "@/app/features/fetchViewAllAiring";
import { useAppSelector } from "@/app/store";
import { replaceDashWithSpace } from "@/app/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ViewPage() {
  const [selectedValue, setSelectedValue] = useState(1);
  const params = useParams<{ type: string }>();
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state?.fetchViewAllAiring);
  const dataTrending: any = useAppSelector(
    (state: any) => state?.fetchSeriesTrendingAll
  );

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (params?.type === "airing-today") {
      dispatch(fetchViewAllAiring({ page: selectedValue }));
    } else {
      dispatch(fetchSeriesTrendingAll({ page: selectedValue }));
    }
  }, [dispatch, selectedValue, params]);

  return (
    <div className=" h-screen w-full py-2">
      <Navbar />

      {params?.type === "airing-today" && (
        <>
          {data?.status === "loading" ? (
            <Loading />
          ) : (
            <>
              <div className="w-full flex justify-between  items-center px-2">
                <div className="order-first">
                  <h1 className="font-bold text-2xl">
                    all - {replaceDashWithSpace(params?.type)}
                  </h1>
                </div>
                <div className="order-last">
                  {data?.status === "idle" ? (
                    <>
                      <button className="block min-w-32 cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight">
                        <svg
                          className="left-0 inline-block w-5 h-5 border-4 border-t-transparent border-yellow-400 rounded-full animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <select
                      value={selectedValue}
                      onChange={handleChange}
                      className="block min-w-32 cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
                    >
                      <>
                        {Array.from({
                          length: data?.data?.total_pages,
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
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 p-2 h-auto w-full">
                {data?.data?.results?.map((item: any, key: any) => {
                  return (
                    <ImageWithTooltip
                      key={`${key}-view-all-airing`}
                      src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                      alt={item?.backdrop_path || "item-backdrop_path-series"}
                      props={{
                        type: "tv",
                        active: true,
                        id: item?.id,
                        name: item?.name,
                        vote_count: item?.vote_count,
                        vote_average: item?.vote_average,
                        backdrop_path: item?.backdrop_path,
                        overview: item?.overview,
                      }}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}

      {params?.type === "series-trending" && (
        <>
          {dataTrending?.status === "loading" ? (
            <Loading />
          ) : (
            <>
              <div className="w-full flex justify-between  items-center px-2">
                <div className="order-first">
                  <h1 className="font-bold text-2xl">
                    all - {replaceDashWithSpace(params?.type)}
                  </h1>
                </div>
                <div className="order-last">
                  {dataTrending?.status === "idle" ? (
                    <>
                      <button className="block min-w-32 cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight">
                        <svg
                          className="left-0 inline-block w-5 h-5 border-4 border-t-transparent border-yellow-400 rounded-full animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <select
                      value={selectedValue}
                      onChange={handleChange}
                      className="block min-w-32 cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
                    >
                      <>
                        {Array.from({
                          length: dataTrending?.data?.total_pages,
                        })
                          .slice(0, 10)
                          ?.map((_, index) => {
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
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 p-2 h-auto w-full">
                {dataTrending?.data?.results?.map((item: any, key: any) => {
                  return (
                    <ImageWithTooltip
                      key={`${key}-view-all-airing`}
                      src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                      alt={item?.backdrop_path || "item-backdrop_path-series"}
                      props={{
                        type: "tv",
                        active: true,
                        id: item?.id,
                        name: item?.name,
                        vote_count: item?.vote_count,
                        vote_average: item?.vote_average,
                        backdrop_path: item?.backdrop_path,
                        overview: item?.overview,
                      }}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ViewPage;
