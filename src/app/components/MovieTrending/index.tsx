"use client";

import { genres } from "@/app/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import ImageMovies from "../ImageMovies";
import SkeletonMovie from "./components/SkeletonMovieTrending";

export default function MovieTrending({ data }: any) {
  const filteredGenres = (idsToCheck: any) =>
    genres.filter((genre) => idsToCheck.includes(genre.id));

  if (data?.status === "idle") return <SkeletonMovie />;
  if (data?.status === "loading") return <SkeletonMovie />;
  if (data?.status === "error") return <div>Error</div>;

  return (
    <div className="w-full h-auto min-h-[32rem]">
      {data?.status === "succeeded" && (
        <Swiper
          key={"swiper-movies"}
          pagination={{
            enabled: true,
            type: "progressbar",
          }}
          slidesPerView={1}
          loop={true}
          speed={1500}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
        >
          {data?.data?.results.map((item: any, key: any) => {
            const genres: any = filteredGenres(item.genre_ids);
            return (
              <SwiperSlide key={`${key}-modal-movies` || "key-modal-movies"}>
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
              </SwiperSlide>
            );
          })}

          <div className="swiper-button-next absolute top-1/2 right-4 transform lg:-translate-y-0 -translate-y-44 text-white hover:text-yellow-500 transition-colors" />
        </Swiper>
      )}
    </div>
  );
}
