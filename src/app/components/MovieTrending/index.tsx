"use client";

import { genres } from "@/app/utils";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import ImageMovies from "../ImageMovies";
import Loading from "../Loading";

export default function MovieTrending({ data }: any) {
  const sliderRef: any = useRef(null);

  const filteredGenres = (idsToCheck: any) =>
    genres.filter((genre) => idsToCheck.includes(genre.id));

  if (data?.status === "idle") return <Loading />;
  if (data?.status === "loading") return <Loading />;
  if (data?.status === "error") return <div>Error</div>;

  return (
    <div className="min-h-[32rem] h-auto">
      {data?.status === "succeeded" && (
        <div className="flex justify-center items-start lg:items-center mt-10">
          <Swiper
            key={"swiper-movies"}
            spaceBetween={30}
            pagination={{
              enabled: true,
              type: "progressbar",
            }}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000,
            }}
            ref={sliderRef}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {data?.data?.results?.slice(0, 6).map((item: any, key: any) => {
              const genres: any = filteredGenres(item.genre_ids);

              return (
                <SwiperSlide key={`${key}-modal-movies` || "key-modal-movies"}>
                  <div>
                    <ImageMovies
                      src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                      alt={item?.backdrop_path}
                      props={{
                        type: "movie",
                        show: true,
                        id: item?.id,
                        original_title: item?.original_title,
                        vote_count: item?.vote_count,
                        vote_average: item?.vote_average,
                        backdrop_path: item?.backdrop_path,
                        overview: item?.overview,
                        genre_ids: genres,
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="hidden swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors" />
            <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors" />
          </Swiper>
        </div>
      )}
    </div>
  );
}
