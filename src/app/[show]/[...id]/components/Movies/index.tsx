import Cast from "@/app/components/Cast";
import ImageMovies from "@/app/components/ImageMovies";
import Loading from "@/app/components/Loading";
import { useAppSelector } from "@/app/store";

function ShowMovies() {
  const dataShow = useAppSelector((state: any) => state?.fetchShow) as any;

  return (
    <>
      {dataShow?.status === "succeeded" ? (
        <div className="relative flex flex-col w-full h-full justify-start">
          <ImageMovies
            src={`https://image.tmdb.org/t/p/original/${dataShow?.data?.backdrop_path}`}
            fallbackSrc="https://placehold.co/600x400/png"
            props={{
              type: "movie",
              show: false,
              id: dataShow?.data?.id,
              original_title: dataShow?.data?.original_title,
              vote_count: dataShow?.data?.vote_count,
              vote_average: dataShow?.data?.vote_average,
              backdrop_path: dataShow?.data?.backdrop_path,
              genre_ids: dataShow?.data?.genres,
              overview: dataShow?.data?.overview,
            }}
          />
          <div className="px-2">
            <Cast />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ShowMovies;
