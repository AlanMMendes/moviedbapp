"use client";

import { genres } from "@/app/utils";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
            ref={sliderRef}
            modules={[Pagination, Navigation]}
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
          </Swiper>
        </div>
      )}
    </div>
  );
}
