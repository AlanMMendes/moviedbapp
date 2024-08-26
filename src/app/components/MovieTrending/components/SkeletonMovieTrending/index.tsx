import { genres } from "@/app/utils";
import "../../../../globals.css";

function SkeletonMovie() {
  const mockMovie = [
    {
      adult: false,
      backdrop_path: "https://placehold.co/1920x1080/png",
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
  ];

  const filteredGenres = (idsToCheck: any) =>
    genres.filter((genre) => idsToCheck.includes(genre.id));

  return (
    <div className="flex justify-center items-start lg:items-center text-gray-500">
      {mockMovie?.map((item: any, key: any) => {
        const genres: any = filteredGenres(item.genre_ids);
        return (
          <div
            key={`${key}-skeleton-movie`}
            className="relative maskSkeletonMovie min-h-[32rem] w-full h-auto max-h-[44rem] justify-center gap-5 items-start flex flex-col bg-gray-200 animate-pulse opacity-20"
          >
            <div className="h-dvh min-h-dvh w-full bg-gray-800 animate-pulse opacity-20" />
            <div className="relative py-2 w-full lg:absolute md:absolute lg:w-3/4 md:w-3/4 px-5 md:py-5 gap-4">
              <div className="flex flex-col gap-5 w-4/4 ">
                <span className="lg:text-5xl text-2xl md:text-2xl font-semibold">
                  <div className="w-[24rem] h-8 bg-gray-300 rounded-lg" />
                </span>
                <div className="flex flex-row gap-2 justify-start items-center">
                  <div className="gap-2 flex flex-row">
                    <div className="w-[5rem] h-8 bg-gray-300 rounded-lg" />
                    <div className="w-[5rem] h-8 bg-gray-300 rounded-lg" />
                  </div>
                </div>
                <div className="w-[6rem] h-8 bg-gray-300 rounded-lg" />
              </div>
              <div className="flex flex-row  flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
                <div className="w-[6rem] h-8 bg-gray-300 rounded-lg" />
                {genres.map((genre: any, key: any) => {
                  return (
                    <div key={`${key}-genre`} className="flex flex-row py-2 ">
                      <div className="w-[6rem] h-8 bg-gray-300 rounded-lg" />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 items-center lg:justify-start justify-center md:justify-start  w-full flex-wrap">
                <div className="w-[10rem] h-8 bg-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkeletonMovie;
