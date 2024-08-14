"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchData } from "./features/fetchDataSlice";
import { useAppSelector } from "./store";

export default function Home() {
  const dispatch: any = useDispatch();
  const data: any = useAppSelector((state: any) => state.fetchData.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]}>
        {data?.results?.map((item: any, key: any) => {
          return (
            <SwiperSlide>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                alt={item?.original_title}
                className="opacity-30 w-full"
              />
              <div className="flex flex-col gap-5">
                <span>
                  {item?.original_title} {item?.release_date}
                </span>

                <span>{item?.overview}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
