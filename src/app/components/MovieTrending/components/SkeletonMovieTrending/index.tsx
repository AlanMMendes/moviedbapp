import { genres } from "@/app/utils";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../globals.css";

function SkeletonMovie() {
  const sliderRef: any = useRef(null);

  const mockMovie = [
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533535,
      original_language: "en",
      original_title: "Mock Original Name 1",
      overview: "Mock Overview 1",
      popularity: 5845.013,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-07-24",
      title: "Title 1",
      video: false,
      vote_average: 7.762,
      vote_count: 2191,
    },
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533536,
      original_language: "en",
      original_title: "Mock Original Name 2",
      overview: "Mock Overview 2",
      popularity: 5900.112,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-08-10",
      title: "Title 2",
      video: false,
      vote_average: 7.845,
      vote_count: 2250,
    },
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533537,
      original_language: "en",
      original_title: "Mock Original Name 3",
      overview: "Mock Overview 3",
      popularity: 6000.134,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-09-01",
      title: "Title 3",
      video: false,
      vote_average: 7.9,
      vote_count: 2300,
    },
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533538,
      original_language: "en",
      original_title: "Mock Original Name 4",
      overview: "Mock Overview 4",
      popularity: 6100.215,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-09-15",
      title: "Title 4",
      video: false,
      vote_average: 8.0,
      vote_count: 2350,
    },
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533539,
      original_language: "en",
      original_title: "Mock Original Name 5",
      overview: "Mock Overview 5",
      popularity: 6200.328,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-10-01",
      title: "Title 5",
      video: false,
      vote_average: 8.15,
      vote_count: 2400,
    },
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533540,
      original_language: "en",
      original_title: "Mock Original Name 6",
      overview: "Mock Overview 6",
      popularity: 6300.489,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-10-15",
      title: "Title 6",
      video: false,
      vote_average: 8.2,
      vote_count: 2450,
    },
    {
      adult: false,
      backdrop_path: "https://placehold.co/600x400/png",
      genre_ids: [28, 35, 878],
      id: 533541,
      original_language: "en",
      original_title: "Mock Original Name 7",
      overview: "Mock Overview 7",
      popularity: 6400.567,
      poster_path: "https://placehold.co/600x400/png",
      release_date: "2024-11-01",
      title: "Title 7",
      video: false,
      vote_average: 8.3,
      vote_count: 2500,
    },
  ];

  const filteredGenres = (idsToCheck: any) =>
    genres.filter((genre) => idsToCheck.includes(genre.id));

  return (
    <>
      <Swiper
        key={"mock-swiper-trending-movies"}
        autoplay={{
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={30}
        pagination={{
          enabled: true,
          type: "progressbar",
        }}
        slidesPerView={1}
        loop={true}
        ref={sliderRef}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {mockMovie?.slice(0, 6).map((item: any, key: any) => {
          const genres: any = filteredGenres(item.genre_ids);
          return (
            <SwiperSlide
              key={`${key}-mock-trending-movies`}
              className="text-black"
            >
              <div className="h-[45rem] min-h-[45rem] w-full relative items-start opacity-20 justify-center flex flex-col animate-pulse bg-gray-200 px-5 py-5 gap-4">
                <div className="flex flex-col gap-5 w-4/4 ">
                  <span className="lg:text-5xl text-2xl md:text-2xl font-semibold">
                    {item?.original_title}
                  </span>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <FaStar className="text-yellow-400 h-5 w-5" />
                    <span>{Math.floor(item?.vote_average)}</span>
                    <GoThumbsup className="h-5 w-5" />
                    <span>{item?.vote_count}</span>
                  </div>

                  <p className="w-full lg:w-2/4 text-left lg:text-lg md:text-md font-extralight">
                    {item?.overview}
                  </p>
                </div>
                <div className="flex flex-row  flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
                  <button className="border-2 border-black  border-opacity-10 w-auto hover:scale-105 hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                    <span className="font-extralight">Trending</span>
                  </button>
                  {genres.map((genre: any, key: any) => {
                    return (
                      <div key={`${key}-genre`} className="flex flex-row py-2 ">
                        <button className="border-2 border-black border-opacity-10 w-auto hover:scale-105 hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                          <span className="font-extralight text-inherit">
                            {genre?.name}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SkeletonMovie;
