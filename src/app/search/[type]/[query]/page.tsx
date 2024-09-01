"use client";

import ImageWithTooltip from "@/app/components/ImageWithTooltip";
import ImageWithTooltipPerson from "@/app/components/ImageWithTooltipPerson";
import Loading from "@/app/components/Loading";
import { fetchSearch } from "@/app/features/fetchSearchSlice";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";

function Search() {
  const params = useParams<{ type: string; query: string }>();
  const dispatch = useDispatch() as any;
  const dataSearch: any = useAppSelector((state: any) => state?.fetchSearch);
  const [selectedValue, setSelectedValue] = useState(1);

  const checkType = () => {
    if (params?.type?.toString() === "tv") {
      return "tv";
    } else if (params?.type?.toString() === "movie") {
      return "movie";
    }
  };

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    dispatch(
      fetchSearch({
        type: params?.type,
        query: params?.query,
        page: selectedValue,
      })
    );
  }, [params, selectedValue, dispatch]);

  return (
    <div className="flex flex-col gap-0 px-4 h-full w-full">
      <div className="mt-12 px-2 flex justify-end items-center bottom-14">
        <select
          value={selectedValue}
          onChange={handleChange}
          className="block cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
        >
          <>
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
      {params.type === "movie" || params.type === "tv" ? (
        <div className="min-h-dvh">
          {dataSearch?.status === "succeeded" ? (
            <div className="w-full h-full flex flex-col mb-16">
              <h1 className="py-2 font-bold text-2xl">
                Searching for: {params?.type.toUpperCase()} - {params?.query}
              </h1>
              <div className="grid lg:grid-cols-4 min-w-full md:grid-cols-3 grid-cols-1 gap-2 min-h-full max-h-auto">
                {dataSearch?.data?.results?.map((item: any) => {
                  return (
                    <div key={item?.id} className="flex flex-col">
                      <ImageWithTooltip
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        alt={item?.backdrop_path || "item-backdrop_path-series"}
                        props={{
                          type: checkType(),
                          id: item?.id,
                          active: true,
                          name: item?.name || item?.title,
                          vote_count: item?.vote_count,
                          vote_average: item?.vote_average,
                          backdrop_path: item?.backdrop_path,
                          overview: item?.overview,
                        }}
                      />
                      <h1 className="text-lg font-extralight">
                        {item?.name || item?.title}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <div className="mb-16">
          <h1 className="py-2 font-bold text-2xl">
            Searching for: {params?.type.toUpperCase()} - {params?.query}
          </h1>
          <div className="grid lg:grid-cols-4 min-w-full md:grid-cols-2 grid-cols-1 gap-4 min-h-[32rem max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {dataSearch?.data?.results?.map((item: any, key: any) => {
              return (
                <div
                  key={`${key}-modal-trending-people`}
                  className="relative w-full min-w-full h-auto justify-center items-center flex flex-col cursor-pointer"
                >
                  <ImageWithTooltipPerson
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    alt={item?.profile_path || "post-profile_path"}
                    props={{
                      type: "person",
                      active: true,
                      id: item?.id,
                      name: item?.name,
                      popularity: item?.popularity,
                      profile_path: item?.profile_path,
                      known_for: item?.known_for,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
