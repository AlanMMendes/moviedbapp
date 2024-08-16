"use client";
import { fetchSeriesTrending } from "@/app/features/fetchSeriesTrendingSlice";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";

function SeriesTrending() {
  const dispatch: any = useDispatch();
  const sliderSeriesRef: any = useRef(null);
  const seriesData: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending.data
  );

  const handleNextSeries = useCallback(() => {
    if (!sliderSeriesRef.current) return;
    sliderSeriesRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(fetchSeriesTrending());
  }, [dispatch]);

  return (
    <>
      {!seriesData ? (
        <>Loading</>
      ) : (
        <>
          {" "}
          <div className="px-3">
            <div className="py-5 px-2">
              <button className="w-auto px-4 py-4 hover:scale-105  flex justify-center items-center border-2 border-white border-opacity-10 gap-2 rounded-full">
                <span className="font-extralight">
                  Series Trending This Week
                </span>
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
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                "1200": {
                  slidesPerView: 4,
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
                className="absolute z-50 px-2  lg:top-24 top-20 right-0 flex"
                onClick={() => handleNextSeries()}
              >
                <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
              </div>
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}

export default SeriesTrending;
