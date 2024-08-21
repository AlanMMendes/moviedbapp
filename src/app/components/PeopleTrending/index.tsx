"use client";
import { fetchPeopleData } from "@/app/features/fetchPeopleSlice";
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
import "../../globals.css";
import SkeletonPeople from "./components/SkeletonPeople";

export default function PeopleTrending() {
  const dispatch: any = useDispatch();
  const sliderPeopleRef: any = useRef(null);
  const peopleData: any = useAppSelector(
    (state: any) => state.fetchPeopleData.data
  );

  const handleNextSeries = useCallback(() => {
    if (!sliderPeopleRef.current) return;
    sliderPeopleRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(fetchPeopleData());
  }, [dispatch]);

  return (
    <>
      <div className="py-2">
        <span className="text-2xl">People Trending</span>
      </div>
      {!peopleData && <SkeletonPeople />}

      {peopleData && (
        <div className="flex flex-col">
          <div className="relative w-full h-auto flex flex-row items-center justify-start">
            <Swiper
              key={"swiper-people-trending"}
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
                "768": {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                "1024": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "1200": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              ref={sliderPeopleRef}
              modules={[Pagination, Navigation]}
            >
              {peopleData?.results?.map((item: any, key: any) => {
                return (
                  <SwiperSlide
                    key={
                      `${key}-modal-trending-people` || "key-people-trending"
                    }
                    className="relative w-full h-full cursor-pointer"
                  >
                    <div className="relative w-full h-auto justify-start items-start flex flex-col hover:scale-95 cursor-pointer">
                      <Image
                        src={
                          `https://image.tmdb.org/t/p/original/${item?.profile_path}` ||
                          "https://placehold.co/600x400/png"
                        }
                        alt={item?.backdrop_path || "pic-trending-people"}
                        className="mask rounded-3xl"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />

                      <div className="absolute w-full bottom-0 px-2 py-3 ">
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
            </Swiper>
            <div
              className="absolute right-0 z-40"
              onClick={() => handleNextSeries()}
            >
              <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
