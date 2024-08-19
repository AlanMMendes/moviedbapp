"use client";

import { fetchMovieCredits } from "@/app/features/fetchMovieCredits";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ModalCast({ isOpen, onClose, props }: any) {
  const sliderRef: any = useRef(null);
  const dispatch: any = useDispatch();
  const data: any = useAppSelector(
    (state: any) => state.fetchMovieCredits.data
  );
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (!props) return;
    dispatch(fetchMovieCredits(props.movieId));
  }, [props, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed text-white inset-0 bg-black px-2 bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-lg max-w-screen-lg max-h-screen-lg min-h-96 w-full relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{props?.title} - Cast</h2>

        <div className="h-full w-full flex justify-center items-center  py-5 ">
          <Swiper
            spaceBetween={0}
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
                slidesPerView: 3,
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
            ref={sliderRef}
            modules={[Pagination, Navigation]}
          >
            {data?.cast?.map((item: any, key: any) => {
              return (
                <SwiperSlide key={`${key}-modal-cast`}>
                  <div className="relative max-w-44 h-auto justify-center items-center flex flex-col hover:scale-95 cursor-pointer">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                      alt={item?.profile_path}
                      className="mask rounded-3xl h-44 w-44 "
                      width={44}
                      height={44}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                    />

                    <div className="w-full bottom-0 py-3 px-2">
                      <span>{item?.name}</span>
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <FaRankingStar className="text-yellow-400 h-5 w-5" />
                        <span>{Math.floor(item?.popularity)}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div
              className="absolute z-50 px-2 lg:top-2/4 top-2/4 right-0 flex"
              onClick={() => handleNext()}
            >
              <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ModalCast;
