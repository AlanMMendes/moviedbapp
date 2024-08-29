import Cast from "@/app/components/Cast";
import ImageWithFallback from "@/app/components/ImageFallback";
import Loading from "@/app/components/Loading";
import ModalTrailer from "@/app/components/ModalTrailer";
import TooltipComponent from "@/app/components/TooltipOverview";
import WatchlistChecked from "@/app/components/WatchlistChecked";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import Episodes from "./Episodes";
function ShowSeries({ dataShow }: any) {
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
        <div className="relative flex flex-col w-full h-full">
          <ImageWithFallback
            src={`https://image.tmdb.org/t/p/original/${dataShow?.data?.backdrop_path}`}
            fallbackSrc="https://placehold.co/600x400/png"
            alt={dataShow?.data?.backdrop_path || "post-backdrop_path"}
            width={500}
            height={500}
            sizes="500vw"
          />
          <div className="relative flex flex-col px-2">
            <div className="flex flex-col gap-2">
              <h1 className="lg:text-4xl text-2xl md:text-2xl font-semibold">
                {dataShow?.data?.name || dataShow?.data?.title}
              </h1>
              <div className="flex flex-row gap-2">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span>{Math.floor(dataShow?.data?.vote_average)}</span>
                <GoThumbsup className="h-5 w-5" />
                <span>{dataShow?.data?.vote_count}</span>
                <WatchlistChecked
                  props={{
                    type: "tv",
                    id: dataShow?.data.id,
                    name: dataShow?.data?.name,
                    vote_count: dataShow?.data?.vote_count,
                    vote_average: dataShow?.data?.vote_average,
                    overview: dataShow?.data?.overview,
                    backdrop_path: dataShow?.data?.backdrop_path,
                  }}
                />
              </div>
              <h1>{dataShow?.data?.status}</h1>
              <p className="w-full rounded-lg bg-opacity-30 text-left max-h-44 custom-scrollbar overflow-y-scroll lg:text-lg md:text-md font-extralight">
                {dataShow?.data?.overview}
              </p>
              <div className="flex gap-2 items-center justify-start w-full flex-wrap">
                <button
                  onClick={() =>
                    openModalTrailer({
                      title: dataShow?.data?.name,
                      id: dataShow?.data?.id,
                      type: "tv",
                    })
                  }
                  className="border-none h-10 min-w-24 text-black bg-white  flex justify-center items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500  rounded-lg"
                >
                  <FaPlay className="h-12" />
                  <h1 className="font-extralight">Trailer</h1>
                </button>
              </div>
              <div className="flex flex-row flex-wrap lg:justify-start justify-start items-center gap-2 py-2">
                {dataShow?.data?.genres?.map((genre: any, key: any) => {
                  return (
                    <button
                      key={`${key}-genre-watch-page`}
                      className="border-2 px-2 border-white border-opacity-10 w-auto min-w-24 min-h-10 hover:bg-yellow-500 flex justify-center items-center rounded-lg bg-transparent bg-opacity-80"
                    >
                      {genre?.name}
                    </button>
                  );
                })}
              </div>

              <div className="w-2/3 flex flex-row  flex-wrap h-auto min-h-10 py-2 md:grid-cols-8 gap-2 overflow-y-auto custom-scrollbar">
                {dataShow?.data?.networks?.map((item: any, key: any) => (
                  <div
                    className="flex flex-row justify-center items-center"
                    key={key}
                  >
                    <TooltipComponent tooltipText={item?.name}>
                      <Link
                        href={`${dataShow?.data?.homepage}`}
                        className="border-none h-10 min-w-24 text-black bg-white flex justify-center items-center gap-2 flex-row text-md hover:text-white hover:bg-yellow-500  rounded-lg"
                      >
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                          alt={item?.logo_path || "show-logo-networks"}
                          className="w-auto h-auto max-h-12  hover:border-yellow-500 px-2 py-2 rounded-lg"
                          width={0}
                          height={0}
                          sizes="200vw"
                        />
                      </Link>
                    </TooltipComponent>
                  </div>
                ))}
              </div>
            </div>
            <Tabs.Root defaultValue="tab1" className="w-full h-full">
              <Tabs.List className="flex border-b border-gray-300">
                <Tabs.Trigger
                  value="tab1"
                  className="px-2 py-2 border-b-2 border-transparent hover:border-yellow-500 focus:outline-none"
                >
                  Episodes
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab2"
                  className="px-2 py-2 border-b-2 border-transparent hover:border-yellow-500 focus:outline-none"
                >
                  Cast
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1">
                <Episodes dataShow={dataShow} />
              </Tabs.Content>
              <Tabs.Content value="tab2" className="py-2">
                <Cast />
              </Tabs.Content>
            </Tabs.Root>
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

export default ShowSeries;
