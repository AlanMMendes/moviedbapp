"use client";
import { fetchTrailer } from "@/app/features/fetchTrailerSlice";
import { useAppSelector } from "@/app/store";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

function ModalTrailer({ isOpen, onClose, props }: any) {
  const modalRef = useRef(null) as any;

  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchTrailer.data);
  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (!props) return;
    dispatch(
      fetchTrailer({
        id: props.id,
        type: props.type,
      })
    );
  }, [props, dispatch, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute text-white inset-0 z-40 px-2 flex justify-center w-full h-full items-center"
    >
      <div className="bg-black border border-opacity-25 h-1/3 border-gray-300 max-w-3xl w-full min-h-[32rem]  rounded-lg shadow-lg text-center">
        <div className="relative flex flex-row justify-start items-center p-4 gap-2">
          <h2 className="text-3xl font-bold py-2">{props?.title} - Trailer</h2>
          <button className=" absolute top-2 right-2 text-xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${data?.results[0]?.key || ""}`}
          className="w-full h-96 rounded-3xl justify-center items-center flex px-2 py-2"
          allowFullScreen
          title="Trailer"
        />
      </div>
    </div>
  );
}

export default ModalTrailer;
