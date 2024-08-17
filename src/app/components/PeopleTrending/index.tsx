"use client";
import { fetchPeopleData } from "@/app/features/fetchPeopleSlice";
import { useAppSelector } from "@/app/store";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../globals.css";
import ModalPeople from "./ModalPeople";

function PeopleTrending() {
  const dispatch: any = useDispatch();
  const [isModalCastOpen, setIsModalCastOpen] = useState(false);
  const [modalPropsCast, setModalPropsCast] = useState({});
  const sliderPeopleRef: any = useRef(null);
  const peopleData: any = useAppSelector(
    (state: any) => state.fetchPeopleData.data
  );

  const handleNextSeries = useCallback(() => {
    if (!sliderPeopleRef.current) return;
    sliderPeopleRef.current.swiper.slideNext();
  }, []);

  const openModalCast = (props: any) => {
    setModalPropsCast({
      ...props,
    });
    setIsModalCastOpen(true);
  };

  const closeModalCast = () => {
    setIsModalCastOpen(false);
    setModalPropsCast({});
  };

  useEffect(() => {
    dispatch(fetchPeopleData());
  }, [dispatch]);

  return (
    <>
      {!peopleData ? (
        <>Loading</>
      ) : (
        <div className="px-2">
          <Swiper
            spaceBetween={20}
            loop={true}
            breakpoints={{
              "0": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "480": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              "768": {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              "1024": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "1200": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            ref={sliderPeopleRef}
            modules={[Pagination, Navigation]}
          >
            {peopleData?.results?.map((item: any, key: any) => {
              return (
                <SwiperSlide key={key}>
                  <div
                    onClick={() =>
                      openModalCast({
                        id: item?.id,
                        name: item?.name,
                        know: item?.known_for,
                      })
                    }
                    className="relative w-full h-auto justify-start items-start flex flex-col hover:scale-95 cursor-pointer"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                      alt={item?.backdrop_path}
                      className="mask rounded-3xl"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />

                    <div className="absolute w-full bottom-0 py-3 px-2">
                      <span>{item?.name}</span>
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <FaRankingStar className="text-yellow-400 h-5 w-5" />
                        <span>{Math.floor(item?.popularity)}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div
              className="absolute z-50 px-2 lg:top-2/4 top-2/4 right-0 flex"
              onClick={() => handleNextSeries()}
            >
              <MdKeyboardArrowRight className="text-white w-14 h-14 opacity-80 cursor-pointer" />
            </div>
          </Swiper>

          <ModalPeople
            isOpen={isModalCastOpen}
            onClose={closeModalCast}
            props={modalPropsCast}
          />
        </div>
      )}
    </>
  );
}

export default PeopleTrending;
