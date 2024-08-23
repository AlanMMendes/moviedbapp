"use client";
import BackButton from "@/app/components/BackButton";
import { fetchEpisodes } from "@/app/features/fetchEpisodesSlice";
import { fetchShow } from "@/app/features/fetchShow";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";

function PostPage() {
  const params = useParams<{ show: string; id: string }>();
  const dispatch: any = useDispatch();
  const dataShow: any = useAppSelector((state: any) => state?.fetchShow);
  const dataEpisodes: any = useAppSelector(
    (state: any) => state?.fetchEpisodes
  );
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    dispatch(
      fetchShow({
        type: params.show,
        id: params.id,
      })
    );
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(
      fetchEpisodes({
        series_id: params.id,
        season_number: selectedValue,
      })
    );
  }, [selectedValue, dispatch, params]);

  return (
    <>
      {dataShow?.status === "succeeded" && (
        <div className="flex flex-col justify-center gap-5">
          <BackButton />
          <Image
            src={`https://image.tmdb.org/t/p/original/${dataShow?.data?.backdrop_path}`}
            alt={dataShow?.data?.backdrop_path || "post-backdrop_path"}
            className="mask min-h-44"
            width={0}
            height={0}
            sizes="200vw"
          />
          <div className="lg:absolute relative flex flex-col w-full h-full justify-center mx-auto px-2">
            <div className="flex flex-col gap-5 justify-center items-start">
              <span className="lg:text-4xl text-2xl md:text-2xl font-semibold">
                {dataShow?.data?.name}
              </span>
              <div className="flex flex-row gap-2 justify-start items-center">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span>{Math.floor(dataShow?.data?.vote_average)}</span>
                <GoThumbsup className="h-5 w-5" />
                <span>{dataShow?.data?.vote_count}</span>
              </div>

              <h1>{dataShow?.data?.status}</h1>

              <p className="w-full lg:w-3/4 text-left max-h-44 custom-scrollbar overflow-y-scroll lg:text-lg md:text-md font-extralight">
                {dataShow?.data?.overview}
              </p>
              <div className="flex flex-row gap-2">
                {dataShow.data.networks.map((item: any, key: any) => (
                  <Link href={`${dataShow?.data?.homepage}`} key={key}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                      alt={item?.logo_path || "show-logo-networks"}
                      className="w-auto max-w-32 min-w-32 min-h-12 rounded-lg px-2 py-2 hover:scale-95 bg-white  hover:border cursor-pointer"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap lg:justify-start justify-start items-center py-4 px-2">
            <select
              value={selectedValue}
              onChange={handleChange}
              className="block cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
            >
              <>
                <option
                  className="block gap-4 h-10 w-full bg-zinc-900 cursor-pointer  "
                  value=""
                >
                  Select a season
                </option>
                {Array.from({
                  length: dataShow?.data?.number_of_seasons,
                }).map((_, index) => {
                  const displayIndex = index + 1;
                  return (
                    <option
                      key={displayIndex}
                      className="gap-4 h-10 w-full bg-zinc-900 cursor-pointer  "
                      value={displayIndex}
                    >
                      {`Season ${displayIndex || "1"}`}
                    </option>
                  );
                })}
              </>
            </select>
          </div>
        </div>
      )}
      {dataEpisodes?.status === "succeeded" && (
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-2 max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {dataEpisodes?.data?.episodes?.map((item: any, key: any) => {
              return (
                <div className="flex flex-col" key={key}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item?.still_path}`}
                    alt={item?.still_path || "episodes-pictures"}
                    className="mask min-h-44 rounded-lg"
                    overrideSrc="https://placehold.co/600x400/png"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <div className=" w-full bottom-0 py-3 px-2 flex flex-row">
                    <div className="w-full">
                      <span>
                        Episode {item?.episode_number} - {item?.name} -{" "}
                        {item?.air_date}
                      </span>
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

export default PostPage;
