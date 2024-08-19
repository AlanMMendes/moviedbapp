"use client";

import { fetchSerieCredits } from "@/app/features/fetchSeriesCredits";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { useCallback, useMemo, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonModalSeries from "../ModalSeriesSkeleton";

function ModalSeries({ isOpen, onClose, props }: any) {
  const sliderRef: any = useRef(null);
  const dispatch: any = useDispatch();
  const data: any = useAppSelector(
    (state: any) => state.fetchSerieCredits.data
  );

  useMemo(() => {
    if (!props) return;
    dispatch(fetchSerieCredits(props.id));
  }, [props, dispatch]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (!isOpen) return null;
  return (
    <div className="fixed w-full px-5 h-full text-white py-2 inset-0 flex items-center justify-center z-50">
      <div className="bg-zinc-900 w-full h-auto px-5 rounded-lg relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold px-2 py-1">{props?.title}</h2>
        {!data ? (
          <SkeletonModalSeries />
        ) : (
          <>
            <div className="relative gap-1 w-full min-w-44 h-auto flex flex-col justify-center items-center">
              <Image
                src={`https://image.tmdb.org/t/p/original/${props?.poster}`}
                alt={props?.poster}
                className=" w-full max-w-96 rounded-3xl"
                width={0}
                height={0}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/w500/${props?.poster}`}
              />
              <div className="flex px-2 flex-row gap-2">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span>{Math.floor(props?.vote)}</span>
                <GoThumbsup className="h-5 w-5" />
                <span>{props?.vote_count}</span>
                <span>Release: {props?.date}</span>
              </div>
              <div className="w-full gap-2 bottom-0 py-1 px-2 flex flex-col max-h-46 overflow-auto">
                <span className="font-semibold">{props?.title}</span>
                <span className="font-extralight max-h-32 overflow-x-auto py-2">
                  {props?.overview}
                </span>
              </div>
            </div>
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
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              ref={sliderRef}
              modules={[Pagination, Navigation]}
            >
              {data?.cast?.map((item: any, key: any) => {
                return (
                  <SwiperSlide
                    key={key}
                    className="flex min-w-32 min-h-44 flex-col justify-center items-center"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                      alt={item?.profile_path}
                      className="rounded-3xl h-auto w-32"
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                    />

                    <div className="w-full bottom-0 py-3 px-2">
                      <span>
                        Name: {item.name} as {item?.character}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div
                className="absolute z-50 px-2  top-20 right-0 flex"
                onClick={() => handleNext()}
              >
                <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
              </div>
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalSeries;
