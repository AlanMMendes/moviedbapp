"use client";

import { IoIosInformationCircle } from "react-icons/io";

import { fetchPeopleDetailsData } from "@/app/features/fetchPeopleDetails";
import { useAppSelector } from "@/app/store";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonModalPeople from "../ModalPeopleSkeleton";

function ModalPeople({ isOpen, onClose, props }: any) {
  const dispatch: any = useDispatch();
  const sliderPopularRef: any = useRef(null);
  const sliderWorkedRef: any = useRef(null);
  const data: any = useAppSelector(
    (state: any) => state.fetchPeopleDetailsData.data
  );

  useEffect(() => {
    if (!isOpen) return;
    if (!props) return;
    dispatch(fetchPeopleDetailsData(props.id));
  }, [dispatch, props, isOpen]);

  const handleNextPopular = useCallback(() => {
    if (!sliderPopularRef.current) return;
    sliderPopularRef.current.swiper.slideNext();
  }, []);

  const handleNextWorked = useCallback(() => {
    if (!sliderWorkedRef.current) return;
    sliderWorkedRef.current.swiper.slideNext();
  }, []);

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed  text-white inset-0 bg-black px-2 bg-opacity-5 flex items-center justify-center z-50">
        <div className="bg-zinc-900 p-8 rounded-lg max-w-screen-lg max-h-screen-lg min-h-96 h-auto w-full relative flex flex-col">
          <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
            &times;
          </button>
          <h2 className="text-3xl font-bold mb-4">{props?.name} - Details </h2>

          <div className="h-auto w-full flex min-h-44 min-w-44 justify-start items-center py-5  flex-wrap gap-2">
            {!data ? (
              <SkeletonModalPeople />
            ) : (
              <>
                <span className="font-extralight">Popular Movies Done:</span>
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
                  ref={sliderWorkedRef}
                  modules={[Pagination, Navigation]}
                >
                  {props?.know?.map((item: any, key: any) => {
                    return (
                      <SwiperSlide>
                        <div className="">
                          <HoverCard.Root>
                            <HoverCard.Trigger asChild>
                              <a
                                className="inline-block fixed z-50 px-1 top-0 right-0 cursor-pointer rounded-full outline-none "
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <IoIosInformationCircle className="text-white h-auto w-6" />
                              </a>
                            </HoverCard.Trigger>
                            <HoverCard.Portal>
                              <HoverCard.Content
                                className="z-50 text-white bg-zinc-950 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md  p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                                sideOffset={5}
                              >
                                <div className="flex flex-col gap-[7px]">
                                  <div className="flex flex-col gap-[15px]">
                                    <div>
                                      <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                                        {item?.original_title || item?.name}
                                      </div>
                                    </div>
                                    <div className="text-white m-0 text-[15px] leading-[1.5]">
                                      {item?.overview}
                                    </div>
                                    <div className="flex gap-[15px]">
                                      <div className="flex gap-[10px]">
                                        <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                                          {Math.round(item?.popularity)}
                                        </div>
                                        <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                                          <FaRankingStar className="text-yellow-400 h-5 w-5" />
                                        </div>
                                        <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                                          Release:{" "}
                                          {item?.release_date ||
                                            item?.first_air_date}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <HoverCard.Arrow className="fill-white" />
                              </HoverCard.Content>
                            </HoverCard.Portal>
                          </HoverCard.Root>
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                            alt={item?.profile_path}
                            className="maskSeries rounded-lg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                          />

                          <span>{item?.name}</span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <div
                    className="absolute z-50  top-12 right-0 flex"
                    onClick={() => handleNextWorked()}
                  >
                    <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
                  </div>
                </Swiper>
              </>
            )}
          </div>
          <div className="w-full h-auto min-h-44 flex min-w-44 justify-start items-center py-5 flex-wrap gap-2">
            {!data ? (
              <SkeletonModalPeople />
            ) : (
              <>
                <span className="font-extralight">Worked on:</span>
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
                  ref={sliderPopularRef}
                  modules={[Pagination, Navigation]}
                >
                  {data?.cast?.map((item: any, key: any) => {
                    return (
                      <SwiperSlide>
                        <div className="">
                          <HoverCard.Root>
                            <HoverCard.Trigger asChild>
                              <a
                                className="inline-block fixed z-50 px-1 top-0 right-0 cursor-pointer rounded-full outline-none "
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <IoIosInformationCircle className="text-white h-auto w-6" />
                              </a>
                            </HoverCard.Trigger>
                            <HoverCard.Portal>
                              <HoverCard.Content
                                className="z-50 text-white bg-zinc-950 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md  p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                                sideOffset={5}
                              >
                                <div className="flex flex-col gap-[7px]">
                                  <div className="flex flex-col gap-[15px]">
                                    <div>
                                      <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                                        {item?.original_title || item?.name}
                                      </div>
                                    </div>
                                    <div className="text-white m-0 text-[15px] leading-[1.5]">
                                      {item?.overview}
                                    </div>
                                    <div className="flex gap-[15px]">
                                      <div className="flex gap-[10px]">
                                        <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                                          {Math.round(item?.popularity)}
                                        </div>
                                        <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                                          <FaRankingStar className="text-yellow-400 h-5 w-5" />
                                        </div>
                                        <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">
                                          Release:{" "}
                                          {item?.release_date ||
                                            item?.first_air_date}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <HoverCard.Arrow className="fill-white" />
                              </HoverCard.Content>
                            </HoverCard.Portal>
                          </HoverCard.Root>
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                            alt={item?.profile_path}
                            className="maskSeries rounded-lg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                          />

                          <span>{item?.name}</span>
                          <div className="flex flex-row gap-2 justify-start items-center">
                            <span className="font-extralight">
                              Character: {item?.character}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <div
                    className="absolute z-50  top-12 right-0 flex"
                    onClick={() => handleNextPopular()}
                  >
                    <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
                  </div>
                </Swiper>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPeople;
