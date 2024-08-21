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
      onClick={handleBack}
      className="absolute top-0 left-0 z-50 px-4 py-1.5 mt-1 ml-2 bg-zinc-900 hover:bg-zinc-950  text-white rounded-md "
    >
      <BiLeftArrow className="text-white" />
    </button>
  );
};

export default BackButton;
