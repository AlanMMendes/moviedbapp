"use client";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import ImageWithTooltip from "../ImageWithTooltip";
import Loading from "../Loading";

export default function Series({ data, title, type }: any) {
  const sliderRef: any = useRef(null);

  if (data?.status === "idle") return <Loading />;
  if (data?.status === "loading") return <Loading />;
  if (data?.status === "error") return <div>Error</div>;

  return (
    <div className="w-full h-auto">
      <div className="flex justify-between items-center">
        <div className="order-first py-2">
          <h1 className="text-2xl font-extralight">{title}</h1>
        </div>
        <div className="order-last py-2">
          <Link
            href={`/view/${type}`}
            className="text-base font-semibold border border-white rounded-md px-4 py-2 hover:bg-yellow-400  transition-colors"
          >
            View All
          </Link>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        ref={sliderRef}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
      >
        {data?.data?.results?.map((item: any, key: any) => {
          return (
            <SwiperSlide key={`${key}-airing-today`}>
              <ImageWithTooltip
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.backdrop_path || "item-backdrop_path-series"}
                props={{
                  type: "tv",
                  active: true,
                  id: item?.id,
                  name: item?.name,
                  vote_count: item?.vote_count,
                  vote_average: item?.vote_average,
                  backdrop_path: item?.backdrop_path,
                  overview: item?.overview,
                }}
              />
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors" />
      </Swiper>
    </div>
  );
}
