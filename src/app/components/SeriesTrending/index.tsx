"use client";
import { fetchSeriesTrending } from "@/app/features/fetchSeriesTrendingSlice";
import { setData } from "@/app/features/watchListSlice";
import { useAppSelector } from "@/app/store";
import { BookmarkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
import ModalSeries from "./components/ModalSeries";
import SkeletonSeries from "./components/SkeletonSeriesTrending";

export default function SeriesTrending() {
  const dispatch: any = useDispatch();
  const dispatchWatchList: any = useDispatch();
  const sliderSeriesRef: any = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const seriesData: any = useAppSelector(
    (state: any) => state.fetchSeriesTrending.data
  );

  const handleNextSeries = useCallback(() => {
    if (!sliderSeriesRef.current) return;
    sliderSeriesRef.current.swiper.slideNext();
  }, []);

  const openModal = (props: any) => {
    setModalProps({
      ...props,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProps({});
  };

  useEffect(() => {
    dispatch(fetchSeriesTrending());
  }, [dispatch]);

  return (
    <>
      {!seriesData ? (
        <SkeletonSeries />
      ) : (
        <>
          <div className="relative w-full h-full  justify-center items-center">
            <div className="py-4">
              <span className="text-2xl">Series Trending</span>
            </div>
            <Swiper
              spaceBetween={15}
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
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              ref={sliderSeriesRef}
              modules={[Pagination, Navigation]}
            >
              {seriesData?.results?.map((item: any, key: any) => {
                return (
                  <SwiperSlide key={`${key}-modal-series-trending`}>
                    <div className="relative w-full h-full cursor-pointer hover:scale-95">
                      <Image
                        onClick={() => {
                          openModal({
                            title: item?.name,
                            overview: item?.overview,
                            poster: item?.backdrop_path,
                            id: item?.id,
                            genres: item?.genres_ids,
                            popularity: item?.popularity,
                            vote: item?.vote_average,
                            vote_count: item?.vote_count,
                            date: item?.first_air_date,
                          });
                        }}
                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                        alt={item?.backdrop_path}
                        className="maskSeries rounded-3xl"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                      <div className="absolute w-full top-0 py-3 px-2">
                        <div className="">
                          <div className="flex flex-row gap-2 justify-start items-center">
                            <BookmarkIcon
                              onClick={() =>
                                dispatchWatchList(
                                  setData({
                                    ...item,
                                  })
                                )
                              }
                              className="h-5 w-5 hover:text-yellow-500"
                            />
                          </div>
                        </div>
                      </div>
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
            </Swiper>
            <div
              className="top-32 lg:top-1/2 absolute right-0 z-50 "
              onClick={() => handleNextSeries()}
            >
              <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
            </div>
          </div>
        </>
      )}
      <ModalSeries
        isOpen={isModalOpen}
        onClose={closeModal}
        props={modalProps}
      />
    </>
  );
}
