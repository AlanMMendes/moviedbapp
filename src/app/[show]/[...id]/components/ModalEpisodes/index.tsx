"use client";
import { fetchEpisodesProvider } from "@/app/features/fetchEpisodesProvider";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function ModalEpisodes({ isOpen, onClose, props }: any) {
  const dispatch = useDispatch() as any;
  const dataEpisodes = useAppSelector(
    (state: any) => state?.fetchEpisodesProvider?.data?.results?.US
  ) as any;

  useEffect(() => {
    if (!isOpen) return;
    if (!props) return;
    dispatch(
      fetchEpisodesProvider({
        tv_id: props.id,
        season_number: props.season_number,
        episode_number: props.episode_number,
      })
    );
  }, [props, isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed text-white inset-0 z-50 px-2 flex justify-center w-screen h-screen items-center">
      <div className="bg-black border border-opacity-25 h-auto border-gray-300 max-w-3xl w-full rounded-lg shadow-lg text-center">
        <div className="relative flex flex-col justify-start items-start p-4 gap-2">
          <h2 className="text-3xl font-bold py-2">
            {props?.title} - Providers
          </h2>
          <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
            &times;
          </button>
          <Image
            src={`https://image.tmdb.org/t/p/original/${props?.image}`}
            className="h-auto w-full rounded-lg"
            alt={props?.image || "modal-props_image"}
            width={0}
            height={0}
            sizes="200vw"
          />
          <div className="py-2">
            <h1 className="text-start"> Where to Watch: </h1>
            <div className="flex flex-row w-full gap-4 py-2">
              {dataEpisodes?.flatrate?.map((item: any, key: any) => (
                <div
                  key={`${key}-where-to-watch`}
                  className="flex flex-col justify-start items-start"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                    className="h-14 w-auto rounded-full cursor-pointer border-2 hover:border-yellow-500"
                    alt={props?.image || "modal-props_image"}
                    width={0}
                    height={0}
                    sizes="10vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEpisodes;
