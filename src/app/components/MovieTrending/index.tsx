"use client";

import { useAppSelector } from "@/app/store";
import { genres } from "@/app/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import ModalTrailer from "../ModalTrailer";

export default function MovieTrending() {
  const sliderRef: any = useRef(null);
  const [isModalTrailerOpen, setIsModalTrailerOpen] = useState(false);
  const [modalPropsTrailer, setModalPropsTrailer] = useState({});
  const dataMovies: any = useAppSelector((state: any) => state?.fetchData);

  const openModalTrailer = (props: any) => {
    setModalPropsTrailer({
      ...props,
    });
    setIsModalTrailerOpen(true);
  };

  const closeModalTrailer = () => {
    setIsModalTrailerOpen(false);
    setModalPropsTrailer({});
  };

  const filteredGenres = (idsToCheck: any) =>
    genres.filter((genre) => idsToCheck.includes(genre.id));

  return (
    <div className="min-h-[32rem] h-auto">
      {dataMovies?.status === "succeeded" && (
        <div className="flex justify-center items-start lg:items-center">
          <Swiper
            key={"swiper-movies"}
            autoplay={{
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            pagination={{
              enabled: true,
              type: "progressbar",
            }}
            slidesPerView={1}
            loop={true}
            ref={sliderRef}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {dataMovies?.data?.results
              ?.slice(0, 6)
              .map((item: any, key: any) => {
                const genres: any = filteredGenres(item.genre_ids);
                return (
                  <SwiperSlide
                    key={`${key}-modal-movies` || "key-modal-movies"}
                  >
                    <div className="relative w-full h-auto justify-center items-start flex flex-col">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        alt={item?.backdrop_path}
                        className="mask"
                        width={0}
                        height={0}
                        sizes="1000vw"
                      />
                      <div className="relative w-full lg:absolute md:absolute lg:w-3/4 md:w-3/4 px-5 md:py-5 gap-4">
                        <div className="flex flex-col gap-5 w-4/4 ">
                          <span className="lg:text-5xl text-2xl md:text-2xl font-semibold">
                            {item?.original_title}
                          </span>
                          <div className="flex flex-row gap-2 justify-start items-center">
                            <FaStar className="text-yellow-400 h-5 w-5" />
                            <span>{Math.floor(item?.vote_average)}</span>
                            <GoThumbsup className="h-5 w-5" />
                            <span>{item?.vote_count}</span>
                          </div>

                          <p className="w-full lg:w-2/4 text-left lg:text-lg md:text-md font-extralight">
                            {item?.overview}
                          </p>
                        </div>
                        <div className="flex gap-2 py-2 items-center justify-start w-full flex-wrap">
                          <button
                            onClick={() =>
                              openModalTrailer({
                                title: item?.original_title,
                                type: "movie",
                                id: item?.id,
                              })
                            }
                            className="border-none h-10 min-w-24 text-black bg-white flex justify-center items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500  rounded-lg"
                          >
                            <FaPlay className="h-10" />
                            <h1 className="font-extralight">Trailer</h1>
                          </button>
                        </div>
                        <div className="flex flex-row flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
                          {genres.map((genre: any, key: any) => {
                            return (
                              <button
                                key={`${key}-genre-movie-trending`}
                                className="border-2 px-2 border-white border-opacity-10 w-auto min-w-24 min-h-10 hover:bg-yellow-500 flex justify-center items-center rounded-lg bg-transparent bg-opacity-80"
                              >
                                {genre?.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <ModalTrailer
            isOpen={isModalTrailerOpen}
            onClose={closeModalTrailer}
            props={modalPropsTrailer}
          />
        </div>
      )}
    </div>
  );
}
