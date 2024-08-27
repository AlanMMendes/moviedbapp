"use client";
import { fetchTrailerSeason } from "@/app/features/fetchTrailerSeasonSlice";
import { useAppSelector } from "@/app/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function ModalSeasonTrailer({ isOpen, onClose, props }: any) {
  const dispatch: any = useDispatch();
  const data: any = useAppSelector(
    (state: any) => state.fetchTrailerSeason.data
  );

  useEffect(() => {
    if (!isOpen) return;
    if (!props) return;

    dispatch(fetchTrailerSeason(props.id));
  }, [props, dispatch, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed text-white inset-0 z-50 px-2 flex justify-center w-screen h-screen items-center">
      <div className="bg-black border border-opacity-25 h-96 border-gray-300 max-w-3xl w-full  rounded-lg shadow-lg text-center">
        <div className="relative flex flex-row justify-start items-center p-4 gap-2">
          <h2 className="text-3xl font-bold py-2">{props?.title} - Trailer</h2>
          <button className=" absolute top-2 right-2 text-xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${data?.results[0]?.key || ""}`}
          className="w-full px-2 h-64 rounded-3xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Trailer"
        />
      </div>
    </div>
  );
}

export default ModalSeasonTrailer;
