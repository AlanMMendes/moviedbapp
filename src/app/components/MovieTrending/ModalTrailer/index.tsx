"use client";
import { fetchVideos } from "@/app/features/fetchVideosSlice";
import { useAppSelector } from "@/app/store";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

function ModalTrailer({ isOpen, onClose, props }: any) {
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchVideos.data);

  useMemo(() => {
    if (!isOpen) return;
    if (!props) return;
    dispatch(fetchVideos(props.movieId));
  }, [props, dispatch, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed text-white inset-0 bg-black px-2 bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-zinc-950 p-8 rounded-lg max-w-screen-lg max-h-screen-lg min-h-96 w-full relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{props?.title}</h2>
        <div className="aspect-w-16 aspect-h-9 h-64 lg:h-96  md:h-96 w-full">
          <iframe
            className="w-full h-full rounded-3xl"
            src={`https://www.youtube.com/embed/${data?.results[0]?.key || ""}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
          />
        </div>
      </div>
    </div>
  );
}

export default ModalTrailer;
