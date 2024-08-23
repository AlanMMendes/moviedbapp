"use client";
import { useRouter } from "next/navigation";
import { BiLeftArrow } from "react-icons/bi";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={() => {
        handleBack();
      }}
      className="absolute top-0 left-0 ml-2 mt-5 z-50 h-8 w-8 flex items-center justify-center  bg-transparent text-white rounded-md "
    >
      <BiLeftArrow className=" text-white border-opacity-20 h-auto w-8 px-2 py-2 border rounded-3xl hover:bg-yellow-500 " />
    </button>
  );
};

export default BackButton;
