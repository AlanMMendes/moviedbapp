"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchData } from "./features/fetchDataSlice";
import { useAppSelector } from "./store";

export default function Home() {
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchData.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Swiper modules={[Pagination]} className="mySwiper">
        {data?.results?.map((item: any, key: any) => {
          return (
            <SwiperSlide>
              <div className="relative w-auto h-auto">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                  alt={item?.backdrop_path}
                  className="mask"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <div className="w-full lg:w-1/2 lg:h-1/2 md:w-1/2 h-full lg:absolute md:absolute lg:top-72 top-0 md:top-1/4 left-0/4 rounded-lg p-4 gap-5 flex flex-col justify-start items-start">
                  {/* <button className="rounded-full bg-[#5D564B] px-4 py-2 opacity-90 ">
                    New Movie
                  </button> */}
                  <span className="lg:text-6xl text-2xl md:text-3xl font-semibold">
                    {item?.original_title}
                  </span>
                  <p className="w-full lg:w-3/4 text-left lg:text-2xl md:text-md font-extralight">
                    {item?.overview}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
