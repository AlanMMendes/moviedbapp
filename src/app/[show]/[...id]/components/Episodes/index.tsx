"use client";
import ImageWithFallback from "@/app/components/ImageFallback";
import SkeletonSeries from "@/app/components/SeriesTrending/components/SkeletonSeriesTrending";
import Tooltip from "@/app/components/Tooltip";
import { fetchEpisodes } from "@/app/features/fetchEpisodesSlice";
import { useAppSelector } from "@/app/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../globals.css";
import ModalEpisodes from "../ModalEpisodes";

function Episodes({ dataShow }: any) {
  const params = useParams<{ show: string; id: string }>();
  const dispatch: any = useDispatch();
  const dataEpisodes: any = useAppSelector(
    (state: any) => state?.fetchEpisodes
  );
  const [isModalEpisodesOpen, setIsModalEpisodesOpen] = useState(false);
  const [modalPropsEpisodes, setModalPropsEpisodes] = useState({});
  const [selectedValue, setSelectedValue] = useState(1);

  const openModalEpisodes = (props: any) => {
    setModalPropsEpisodes({
      ...props,
    });
    setIsModalEpisodesOpen(true);
  };

  const closeModalEpisodes = () => {
    setIsModalEpisodesOpen(false);
    setModalPropsEpisodes({});
  };

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
        <div className="relative flex flex-row flex-wrap lg:justify-start justify-start items-center py-4 px-2">
          <select
            value={selectedValue}
            onChange={handleChange}
            className="block cursor-pointer w-auto px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
          >
            <>
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
      )}
      {dataEpisodes?.status === "idle" && <SkeletonSeries />}
      {dataEpisodes?.status === "loading" && <SkeletonSeries />}
      {dataEpisodes?.status === "succeeded" && (
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 px-2 max-h-[44rem] custom-scrollbar overflow-y-scroll">
            {dataEpisodes?.data?.episodes?.map((item: any, key: any) => {
              return (
                <div
                  className="relative h-auto justify-start flex cursor-pointer hover:scale-95"
                  onClick={() =>
                    openModalEpisodes({
                      title: item?.name,
                      id: params?.id,
                      image: item?.still_path,
                      season_number: item?.season_number,
                      episode_number: item?.episode_number,
                    })
                  }
                  key={`${key}-series-trending`}
                >
                  <ImageWithFallback
                    src={`https://image.tmdb.org/t/p/original/${item?.still_path}`}
                    fallbackSrc="https://placehold.co/600x400/png"
                    alt={item?.still_path || "post-still_path"}
                    width={0}
                    height={0}
                    sizes="200vw"
                  />
                  <div className="absolute w-full top-0 px-2">
                    <Tooltip title={item?.name} overview={item?.overview} />
                  </div>
                  <div className="absolute w-full bottom-0 py-3 px-2 flex flex-row">
                    <div className="w-full">
                      <span>
                        Episode: {item?.episode_number} - {item?.name}
                      </span>
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <FaStar className="text-yellow-400 h-5 w-5" />
                        <span>{Math.floor(item?.vote_average)}</span>
                        <GoThumbsup className="h-5 w-5" />
                        <span>{item?.vote_count}</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-end">
                      <FaPlay className="h-8 w-8 hover:scale-95 hover:text-yellow-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ModalEpisodes
            isOpen={isModalEpisodesOpen}
            onClose={closeModalEpisodes}
            props={modalPropsEpisodes}
          />
        </div>
      )}
    </>
  );
}

export default Episodes;
