import Cast from "@/app/components/Cast";
import ImageWithFallback from "@/app/components/ImageFallback";
import Loading from "@/app/components/Loading";
import ModalTrailer from "@/app/components/ModalTrailer";
import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";

function ShowMovies({ dataShow }: any) {
  const [isModalTrailerOpen, setIsModalTrailerOpen] = useState(false);
  const [modalPropsTrailer, setModalPropsTrailer] = useState({});

  const openModalTrailer = (props: any) => {
    setModalPropsTrailer({
      ...props,
    });
    setIsModalTrailerOpen(true);
  };

  const closeModalTrailer = () => {
    setIsModalTrailerOpen(false);
    setModalPropsTrailer({});
  };
  return (
    <>
      {dataShow?.status === "succeeded" ? (
        <div className="relative flex flex-col w-full h-full justify-start">
          <ImageWithFallback
            src={`https://image.tmdb.org/t/p/original/${dataShow?.data?.backdrop_path}`}
            fallbackSrc="https://placehold.co/600x400/png"
            alt={dataShow?.data?.backdrop_path || "post-backdrop_path"}
            width={500}
            height={500}
            sizes="500vw"
          />
          <div className="relative flex flex-col px-2">
            <div className="flex flex-col gap-2 w-full ">
              <span className="lg:text-4xl text-2xl md:text-2xl font-semibold">
                {dataShow?.data?.name || dataShow?.data?.title}
              </span>
              <div className="flex flex-row gap-2 w-full justify-start items-start">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span>{Math.floor(dataShow?.data?.vote_average)}</span>
                <GoThumbsup className="h-5 w-5" />
                <span>{dataShow?.data?.vote_count}</span>
              </div>
              <h1>
                {dataShow?.data?.status} -{" "}
                {dataShow?.data?.last_air_date || dataShow?.data?.release_date}
              </h1>
              <p className="w-full rounded-lg bg-opacity-30 text-left max-h-44 custom-scrollbar overflow-y-scroll lg:text-lg md:text-md font-extralight">
                {dataShow?.data?.overview}
              </p>
              <div className="flex items-center justify-start w-full flex-wrap">
                <button
                  onClick={() =>
                    openModalTrailer({
                      type: "movie",
                      title: dataShow?.data?.name || dataShow?.data.title,
                      id: dataShow?.data?.id,
                    })
                  }
                  className="border-none h-10 min-w-24 text-black bg-white flex justify-center items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500  rounded-lg"
                >
                  <FaPlay className="h-10" />
                  <h1 className="font-extralight">Trailer</h1>
                </button>
              </div>
              <div className="flex flex-row flex-wrap lg:justify-start justify-start items-center gap-2">
                {dataShow?.data?.genres?.map((genre: any, key: any) => {
                  return (
                    <button
                      key={`${key}-genre-watch-page`}
                      className="border-2 border-white border-opacity-10 w-auto hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80"
                    >
                      <span className="font-extralight text-inherit">
                        {genre?.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <Cast />
            </div>
          </div>
          <ModalTrailer
            isOpen={isModalTrailerOpen}
            onClose={closeModalTrailer}
            props={modalPropsTrailer}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ShowMovies;
