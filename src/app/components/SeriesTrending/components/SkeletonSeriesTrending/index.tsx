"use client";
import Loading from "@/app/components/Loading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../globals.css";

function SkeletonSeries() {
  return (
    <div className="w-full h-auto flex items-start flex-col py-2 opacity-50">
      <Loading />
    </div>
  );
}

export default SkeletonSeries;
