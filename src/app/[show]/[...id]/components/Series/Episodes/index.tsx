"use client";
import ImageWithTooltip from "@/app/components/ImageWithTooltip";
import Loading from "@/app/components/Loading";
import { fetchEpisodes } from "@/app/features/fetchEpisodesSlice";
import { useAppSelector } from "@/app/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../../globals.css";

function Episodes({ dataShow }: any) {
  const params = useParams<{ show: string; id: string }>();
  const dispatch: any = useDispatch();
  const dataEpisodes: any = useAppSelector(
    (state: any) => state?.fetchEpisodes
  );
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    dispatch(
      fetchEpisodes({
        series_id: params.id,
        season_number: selectedValue,
      })
    );
  }, [selectedValue, dispatch, params.id]);

  return (
    <>
      {dataShow?.data?.number_of_seasons && (
        <div className=" py-4">
          <select
            value={selectedValue}
            onChange={handleChange}
            className="block cursor-pointer w-auto px-4 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
          >
            <>
              {Array.from({
                length: dataShow?.data?.number_of_seasons,
              }).map((_, index) => {
                const displayIndex = index + 1;
                return (
                  <option key={displayIndex} value={displayIndex}>
                    {`Season ${displayIndex || "1"}`}
                  </option>
                );
              })}
            </>
          </select>
        </div>
      )}
      {dataEpisodes?.status === "succeeded" ? (
        <>
          <div className="grid lg:grid-cols-4 min-w-full md:grid-cols-3 grid-cols-1 gap-4 min-h-[8rem] max-h-[44rem] custom-scrollbar overflow-y-scroll  mb-14">
            {dataEpisodes?.data?.episodes?.map((item: any, key: any) => {
              return (
                <div
                  className="flex flex-col"
                  key={`${item?.id}-series-trending`}
                >
                  <ImageWithTooltip
                    src={`https://image.tmdb.org/t/p/original/${item?.still_path}`}
                    alt={"teste"}
                    props={{
                      type: "episodes",
                      id: item?.id,
                      active: true,
                      name: item?.name,
                      vote_count: item?.vote_count,
                      vote_average: item?.vote_average,
                      backdrop_path: item?.still_path,
                      overview: item?.overview,
                    }}
                  />
                  <h1 className="text-sm py-1 font-extralight">{item?.name}</h1>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Episodes;
