import Link from "next/link";
import { useState } from "react";
import { FaAngleRight, FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import ImageWithFallback from "../ImageFallback";
import ModalTrailer from "../ModalTrailer";
import WatchlistChecked from "../WatchlistChecked";

const ImageMovies = ({ src, props }: any) => {
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
    <div className="relative lg:justify-center justify-start items-start flex flex-col">
      <ImageWithFallback
        src={src}
        alt={props.id}
        fallbackSrc={"https://placehold.co/1920x1080/png"}
      />

      <div className="lg:absolute justify-center items-start flex px-2 flex-col gap-2">
        <h1 className="text-3xl font-semibold">{props.original_title}</h1>
        <h1 className="text-lg font-extralight drop-in max-w-[37rem] max-h-[10rem] custom-scrollbar overflow-x-auto">
          {props.overview}
        </h1>
        <div className="bottom-0 left-0 py-2 flex flex-row gap-2">
          <FaStar className="text-yellow-400 h-5 w-5" />
          <h1>{Math.floor(props?.vote_average)}</h1>
          <GoThumbsup className="h-5 w-5" />
          <h1>{props?.vote_count}</h1>
          <WatchlistChecked props={props} />
        </div>
        <div className="flex flex-row flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
          {props?.genre_ids?.map((genre: any, key: any) => {
            return (
              <button
                key={`${key}-genre-movie-trending`}
                className="border-2 px-2 border-white border-opacity-10 w-auto min-w-24 min-h-10 hover:bg-yellow-500 flex justify-center items-center rounded-lg bg-transparent bg-opacity-80"
              >
                {genre?.name}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2 items-center justify-start w-full flex-wrap">
          <button
            onClick={() =>
              openModalTrailer({
                title: props?.original_title,
                id: props?.id,
                type: "movie",
              })
            }
            className="border-none h-10 min-w-24 text-black bg-white  flex justify-center items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500  rounded-lg"
          >
            <FaPlay className="h-12" />
            <h1 className="font-extralight">Trailer</h1>
          </button>

          {props.show && (
            <Link
              href={`/${props?.type}/${props?.id}`}
              className="relative first-letter:border-none h-10 min-w-44 text-black bg-white  flex justify-center items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500  rounded-lg"
            >
              LEARN MORE
              <FaAngleRight className="absolute right-2 h-5" />
            </Link>
          )}
        </div>
      </div>

      <ModalTrailer
        isOpen={isModalTrailerOpen}
        onClose={closeModalTrailer}
        props={modalPropsTrailer}
      />
    </div>
  );
};

export default ImageMovies;
