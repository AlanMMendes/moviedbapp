"use client";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import ImageWithTooltip from "../ImageWithTooltip";
import Loading from "../Loading";

export default function Series({ data, title, query }: any) {
  const sliderRef: any = useRef(null);

  if (data?.status === "idle") return <Loading />;
  if (data?.status === "loading") return <Loading />;
  if (data?.status === "error") return <div>Error</div>;

  return (
    <div className="w-full h-auto">
      <div className="order-first py-2">
        <h1 className="text-2xl font-extralight">{title}</h1>
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

// <SwiperSlide>
// <div className="grid grid-cols-2 gap-4 p-4">
//     <div className="bg-gray-200 p-4 rounded-lg shadow-md">Item 1</div>
//     <div className="bg-gray-200 p-4 rounded-lg shadow-md">Item 2</div>
//     <div className="bg-gray-200 p-4 rounded-lg shadow-md">Item 3</div>
//     <div className="bg-gray-200 p-4 rounded-lg shadow-md">Item 4</div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="grid grid-cols-3 gap-4 p-4">
//     <div className="bg-blue-200 p-4 rounded-lg shadow-md">Item A</div>
//     <div className="bg-blue-200 p-4 rounded-lg shadow-md">Item B</div>
//     <div className="bg-blue-200 p-4 rounded-lg shadow-md">Item C</div>
//     <div className="bg-blue-200 p-4 rounded-lg shadow-md">Item D</div>
//     <div className="bg-blue-200 p-4 rounded-lg shadow-md">Item E</div>
// </div>
// </SwiperSlide>
