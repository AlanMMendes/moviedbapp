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
import ModalTrailer from "./components/ModalTrailer";
import SkeletonMovie from "./components/SkeletonMovieTrending";

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
    <>
      {dataMovies?.status === "succeeded" ? (
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
                        <div className="flex flex-row  flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
                          <button className="border-2 border-white  border-opacity-10 w-auto hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                            <span className="font-extralight">Trending</span>
                          </button>
                          {genres.map((genre: any, key: any) => {
                            return (
                              <div
                                key={`${key}-genre`}
                                className="flex flex-row py-2 "
                              >
                                <button className="border-2 border-white border-opacity-10 w-auto hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                                  <span className="font-extralight text-inherit">
                                    {genre?.name}
                                  </span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex gap-2 items-center justify-start w-full flex-wrap">
                          <button
                            onClick={() =>
                              openModalTrailer({
                                title: item?.original_title,
                                movieId: item?.id,
                              })
                            }
                            className="w-auto min-w-56 border-none h-12 text-black bg-white px-10 flex justify-start items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500 border rounded-full"
                          >
                            <FaPlay className="h-12" />
                            <span className="font-extralight">
                              Watch Trailer
                            </span>
                          </button>
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
      ) : (
        <SkeletonMovie />
      )}
    </>
  );
}
