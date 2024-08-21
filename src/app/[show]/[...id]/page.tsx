"use client";
import BackButton from "@/app/components/BackButton";
import SkeletonMovie from "@/app/components/MovieTrending/components/SkeletonMovieTrending";
import { fetchEpisodes } from "@/app/features/fetchEpisodesSlice";
import { fetchShow } from "@/app/features/fetchShow";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { useParams } from "next/navigation";
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

function PostPage() {
  const sliderSeriesRef: any = useRef(null);
  const params = useParams<{ show: string; id: string }>();
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchShow.data);
  const dataEpisodes: any = useAppSelector(
    (state: any) => state?.fetchEpisodes?.data?.episodes
  );
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleNextSeries = useCallback(() => {
    if (!sliderSeriesRef.current) return;
    sliderSeriesRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    dispatch(
      fetchShow({
        type: params.show,
        id: params.id,
      })
    );
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(
      fetchEpisodes({
        series_id: params.id,
        season_number: selectedValue,
      })
    );
  }, [selectedValue, dispatch]);

  if (!data) {
    return (
      <div>
        <SkeletonMovie />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-start flex-col">
        <div className="flex flex-col">
          <BackButton />
          <Image
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt={data?.backdrop_path}
            className="mask"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="relative w-full lg:absolute md:absolute lg:w-3/4 md:w-3/4 px-5 md:py-5 gap-4">
            <div className="flex flex-col gap-5 w-4/4 py-4 ">
              <span className="lg:text-4xl text-2xl md:text-2xl font-semibold">
                {data?.name}
              </span>
              <div className="flex flex-row gap-2 justify-start items-center">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span>{Math.floor(data?.vote_average)}</span>
                <GoThumbsup className="h-5 w-5" />
                <span>{data?.vote_count}</span>
              </div>

              <p className="w-full lg:w-2/4 text-left lg:text-lg md:text-md font-extralight">
                {data?.overview}
              </p>
            </div>

            <div className="flex flex-row  flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
              <div className="relative inline-block text-left">
                <select
                  value={selectedValue}
                  onChange={handleChange}
                  className="block cursor-pointer w-full px-4 py-2 text-white bg-zinc-900 bg-opacity-25 border border-opacity-10 border-white h-10 rounded-md shadow-sm focus:outline-none font-extralight"
                >
                  <>
                    <option
                      className="block gap-4 h-10 w-full bg-zinc-900 cursor-pointer  "
                      value=""
                    >
                      Select a season
                    </option>{" "}
                    {Array.from({ length: data?.number_of_seasons }).map(
                      (_, index) => {
                        const displayIndex = index + 1;
                        return (
                          <>
                            <option
                              className="gap-4 h-10 w-full bg-zinc-900 cursor-pointer  "
                              value={displayIndex}
                            >
                              {`Season ${displayIndex || "1"}`}
                            </option>
                          </>
                        );
                      }
                    )}
                  </>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-auto min-h-72 flex justify-center items-center px-2">
        <div
          className="absolute right-0 z-40 "
          onClick={() => handleNextSeries()}
        >
          <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
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
          {dataEpisodes?.map((item: any, key: any) => {
            return (
              <SwiperSlide key={`${key}-series-trending`}>
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${item?.still_path}`}
                    alt={item?.still_path || "episodes"}
                    className="h-auto w-full rounded-3xl"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />

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
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default PostPage;
