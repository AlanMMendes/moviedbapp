"use client";
import ImageWithFallback from "@/app/components/ImageFallback";
import SkeletonMovie from "@/app/components/MovieTrending/components/SkeletonMovieTrending";
import { fetchShow } from "@/app/features/fetchShowSlice";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../globals.css";
import Episodes from "./components/Episodes";
import ModalSeasonTrailer from "./components/ModalSeasonTrailer";

function PostPage() {
  const [isModalTrailerOpen, setIsModalTrailerOpen] = useState(false);
  const [modalPropsTrailer, setModalPropsTrailer] = useState({});
  const params = useParams<{ show: string; id: string }>();
  const dispatch = useDispatch() as any;
  const dataShow = useAppSelector((state: any) => state?.fetchShow) as any;

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

  useEffect(() => {
    dispatch(
      fetchShow({
        id: params.id,
        type: params.show,
      })
    );
  }, [dispatch, params.id, params.show]);

  return (
    <div className="min-h-screen">
      {dataShow?.status === "succeeded" ? (
        <div className="relative flex flex-col w-full h-full justify-center">
          <ImageWithFallback
            src={`https://image.tmdb.org/t/p/original/${dataShow?.data?.backdrop_path}`}
            fallbackSrc="https://placehold.co/600x400/png"
            alt={dataShow?.data?.backdrop_path || "post-backdrop_path"}
            width={500}
            height={500}
            sizes="500vw"
          />

          <div className="lg:absolute relative flex flex-col w-full h-full justify-center mx-auto px-2">
            <div className="flex flex-col gap-2 justify-center items-start">
              <span className="lg:text-4xl text-2xl md:text-2xl font-semibold">
                {dataShow?.data?.name || dataShow?.data?.title}
              </span>
              <div className="flex flex-row gap-2 justify-start items-center">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span>{Math.floor(dataShow?.data?.vote_average)}</span>
                <GoThumbsup className="h-5 w-5" />
                <span>{dataShow?.data?.vote_count}</span>
              </div>

              <h1>
                {dataShow?.data?.status} -
                {dataShow?.data?.last_air_date || dataShow?.data?.release_date}
              </h1>

              <p className="w-full lg:w-3/4 text-left max-h-44 custom-scrollbar overflow-y-scroll lg:text-lg md:text-md font-extralight">
                {dataShow?.data?.overview}
              </p>
              <div className="flex flex-row  flex-wrap lg:justify-start justify-start items-center gap-1 py-2">
                <button className="border-2 border-white  border-opacity-10 w-auto hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                  <span className="font-extralight">Trending</span>
                </button>
                {dataShow?.data?.genres?.map((genre: any, key: any) => {
                  return (
                    <div key={`${key}-genre`} className="flex flex-row py-2 ">
                      <button className="border-2 border-white border-opacity-10 w-auto hover:bg-yellow-500 px-2 py-5 flex justify-center items-center h-10 rounded-lg bg-transparent bg-opacity-80">
                        <span className="font-extralight text-inherit">
                          {genre?.name}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 items-center justify-start w-full flex-wrap">
                <button
                  onClick={() =>
                    openModalTrailer({
                      title: dataShow?.data?.name,
                      id: dataShow?.data?.id,
                    })
                  }
                  className="w-auto min-w-32 border-none h-12 text-black bg-white px-10 flex justify-start items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500 border rounded-full"
                >
                  <FaPlay className="h-12" />
                  <h1 className="font-extralight">Watch Trailer</h1>
                </button>
              </div>

              {dataShow?.data?.networks?.length === 0 ||
              dataShow?.data?.networks?.length === undefined ? (
                <></>
              ) : (
                <h1> Networks: </h1>
              )}
              {params.show === "tv" && (
                <div className="flex flex-row flex-wrap gap-2">
                  {dataShow?.data?.networks?.map((item: any, key: any) => (
                    <Link href={`${dataShow?.data?.homepage}`} key={key}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                        alt={item?.logo_path || "show-logo-networks"}
                        className="h-auto hover:bg-yellow-500 w-fit min-w-24 max-w-24 max-h-12 border px-2 py-2 rounded-2xl bg-white bg-opacity-90 min-h-12"
                        width={0}
                        height={0}
                        sizes="200vw"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <SkeletonMovie />
      )}
      {params.show === "tv" && <Episodes dataShow={dataShow} />}
      <ModalSeasonTrailer
        isOpen={isModalTrailerOpen}
        onClose={closeModalTrailer}
        props={modalPropsTrailer}
      />
    </div>
  );
}

export default PostPage;
