"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalCast from "./components/ModalCast";
import ModalTrailer from "./components/ModalTrailer";
import { fetchData } from "./features/fetchDataSlice";
import { fetchSeriesTrending } from "./features/fetchSeriesTrendingSlice";
import "./globals.css";
import { useAppSelector } from "./store";
import { genres } from "./utils";

export default function Home() {
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchData.data);
  const seriesData: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending.data
  );
  const sliderRef: any = useRef(null);
  const sliderSeriesRef: any = useRef(null);
  const [isModalTrailerOpen, setIsModalTrailerOpen] = useState(false);
  const [isModalCastOpen, setIsModalCastOpen] = useState(false);
  const [modalPropsTrailer, setModalPropsTrailer] = useState({});
  const [modalPropsCast, setModalPropsCast] = useState({});

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

  const openModalCast = (props: any) => {
    setModalPropsCast({
      ...props,
    });
    setIsModalCastOpen(true);
  };

  const closeModalCast = () => {
    setIsModalCastOpen(false);
    setModalPropsCast({});
  };

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const handleNextSeries = useCallback(() => {
    if (!sliderSeriesRef.current) return;
    sliderSeriesRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchSeriesTrending());
  }, [dispatch]);

  const filteredGenres = (idsToCheck: any) =>
    genres.filter((genre) => idsToCheck.includes(genre.id));

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        ref={sliderRef}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        modules={[Pagination, Navigation]}
      >
        {data?.results?.slice(0, 6).map((item: any, key: any) => {
          const genres: any = filteredGenres(item.genre_ids);
          return (
            <SwiperSlide>
              <div className="relative w-full h-auto justify-start items-start flex flex-col">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                  alt={item?.backdrop_path}
                  className="mask rounded-b-lg"
                  width={0}
                  height={0}
                  sizes="100vw"
                />

                <div className="relative w-full lg:absolute md:absolute  lg:w-3/4 md:w-3/4 px-5 md:py-5 gap-4">
                  <div className="flex flex-col gap-5 w-4/4 lg:py-5">
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
                    <button className="border-2 border-white  border-opacity-10 w-auto hover:scale-105 hover:bg-zinc-900 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                      <span className="font-extralight">Trending</span>
                    </button>
                    {genres.map((genre: any, key: any) => {
                      return (
                        <div key={key} className="flex flex-row py-2 ">
                          <button className="border-2 border-white border-opacity-10 w-auto hover:scale-105 hover:bg-zinc-900 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                            <span className="font-extralight text-inherit">
                              {genre?.name}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-2 items-center lg:justify-start justify-center md:justify-start  w-full flex-wrap">
                    <button
                      onClick={() =>
                        openModalTrailer({
                          title: item?.original_title,
                          movieId: item?.id,
                        })
                      }
                      className="w-auto min-w-56 border-none hover:scale-105 h-12 text-black bg-white px-10 flex justify-start items-center gap-2 flex-row text-md hover:text-white hover:bg-zinc-900 border rounded-full"
                    >
                      <FaPlay className="h-12" />
                      <span className="font-extralight">Watch Trailer</span>
                    </button>
                    <button
                      onClick={() =>
                        openModalCast({
                          title: item?.original_title,
                          movieId: item?.id,
                        })
                      }
                      className="w-auto min-w-56 hover:scale-105 hover:bg-zinc-900 flex justify-center items-center border-2 border-white border-opacity-10 gap-2 rounded-full"
                    >
                      <span className="font-extralight">More Info</span>
                      <FaArrowRight className="h-12" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div
          className="absolute z-50 px-2 lg:top-1/4 top-12 right-0 flex"
          onClick={() => handleNext()}
        >
          <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
        </div>
      </Swiper>

      <div className="px-3">
        <div className="py-5 px-2">
          <button className="w-auto px-4 py-4 hover:scale-105  flex justify-center items-center border-2 border-white border-opacity-10 gap-2 rounded-full">
            <span className="font-extralight">Series Trending This Week</span>
          </button>
        </div>
        <Swiper
          spaceBetween={20}
          loop={true}
          breakpoints={{
            "0": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "480": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            "768": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            "1024": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "1200": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          ref={sliderSeriesRef}
          modules={[Pagination, Navigation]}
        >
          {seriesData?.results?.map((item: any, key: any) => {
            return (
              <SwiperSlide>
                <div className="relative w-full h-auto justify-start items-start flex flex-col">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                    alt={item?.backdrop_path}
                    className="mask rounded-3xl"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />

                  <div className="absolute w-full bottom-0 py-3 px-2">
                    <div className="">
                      <span>{item?.name}</span>
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <FaStar className="text-yellow-400 h-5 w-5" />
                        <span>{Math.floor(item?.vote_average)}</span>
                        <GoThumbsup className="h-5 w-5" />
                        <span>{item?.vote_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div
            className="absolute z-50 px-2 lg:top-2/4 top-12 right-0 flex"
            onClick={() => handleNextSeries()}
          >
            <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
          </div>
        </Swiper>
      </div>

      <ModalTrailer
        isOpen={isModalTrailerOpen}
        onClose={closeModalTrailer}
        props={modalPropsTrailer}
      />
      <ModalCast
        isOpen={isModalCastOpen}
        onClose={closeModalCast}
        props={modalPropsCast}
      />
    </>
  );
}
