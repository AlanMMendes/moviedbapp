"use client";
import { fetchSeriesTrending } from "@/app/features/fetchSeriesTrendingSlice";
import { setData } from "@/app/features/watchListSlice";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaBookmark, FaPlay, FaRegBookmark, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import Alert from "../Alert";
import SkeletonSeries from "./components/SkeletonSeriesTrending";

export default function SeriesTrending() {
  const dispatch: any = useDispatch();
  const sliderSeriesRef: any = useRef(null);
  const [activeButtons, setActiveButtons] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);
  const dataSeries: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending
  );

  const handleAddItem = (item: any) => {
    dispatch(setData(item));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleClick = (index: any) => {
    setActiveButtons((prevActiveButtons: any) => {
      const isActive = prevActiveButtons.includes(index);
      if (isActive) {
        return prevActiveButtons.filter((i: any) => i !== index);
      } else {
        return [...prevActiveButtons, index];
      }
    });
  };

  const handleNextSeries = useCallback(() => {
    if (!sliderSeriesRef.current) return;
    sliderSeriesRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(fetchSeriesTrending());
  }, [dispatch]);

  return (
    <>
      {dataSeries.status === "loading" ||
        (dataSeries.status === "idle" && <SkeletonSeries />)}
      {dataSeries.status === "succeeded" && (
        <div className="w-full h-auto flex  items-center">
          <MdKeyboardArrowRight
            onClick={() => handleNextSeries()}
            className="text-white w-14 h-14 opacity-80 absolute right-0 z-40 cursor-pointer"
          />
          <Swiper
            spaceBetween={15}
            loop={true}
            breakpoints={{
              "0": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "480": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "768": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "1024": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "1200": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            ref={sliderSeriesRef}
            modules={[Pagination, Navigation]}
          >
            {dataSeries?.data?.results?.map((item: any, key: any) => {
              return (
                <SwiperSlide key={`${key}-series-trending`}>
                  <div className="relative h-auto justify-start flex cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                      alt={item?.backdrop_path}
                      className="h-auto w-full rounded-3xl"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    <div className="absolute w-full top-0 px-2 ">
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <button
                          key={key}
                          onClick={() => {
                            handleClick(key);
                            handleAddItem(item);
                          }}
                          className={`px-4 py-2 rounded-md transition-colors duration-300`}
                        >
                          {activeButtons.includes(key) ? (
                            <FaBookmark className="text-yellow-400 h-10 hover:scale-125" />
                          ) : (
                            <FaRegBookmark className="text-yellow-400 h-10 hover:scale-125" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="absolute w-full bottom-0 py-3 px-2 flex flex-row">
                      <div className="w-full">
                        <span>{item?.name}</span>
                        <div className="flex flex-row gap-2 justify-start items-center">
                          <FaStar className="text-yellow-400 h-5 w-5" />
                          <span>{Math.floor(item?.vote_average)}</span>
                          <GoThumbsup className="h-5 w-5" />
                          <span>{item?.vote_count}</span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end items-end">
                        <Link href={`/tv/${item?.id}`}>
                          <FaPlay className="h-10 w-10 hover:scale-95 hover:text-yellow-500" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {showAlert && (
            <Alert
              message="Added to the watchlist!"
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
      )}
    </>
  );
}
