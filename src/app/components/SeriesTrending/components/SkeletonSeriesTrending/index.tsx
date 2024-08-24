"use client";
import Alert from "@/app/components/Alert";
import Tooltip from "@/app/components/Tooltip";
import { setData } from "@/app/features/watchListSlice";
import { useState } from "react";
import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../globals.css";

function SkeletonSeries() {
  const dispatch: any = useDispatch();

  const mockSeries = [
    {
      id: 1,
      name: "Mock Title 1",
      original_name: "Mock Original Name 1",
      overview: "Mock Overview 1",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 2,
      name: "Mock Title 2",
      original_name: "Mock Original Name 2",
      overview: "Mock Overview 2",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 3,
      name: "Mock Title 3",
      original_name: "Mock Original Name 3",
      overview: "Mock Overview 3",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 4,
      name: "Mock Title 4",
      original_name: "Mock Original Name 4",
      overview: "Mock Overview 4",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 5,
      name: "Mock Title 5",
      original_name: "Mock Original Name 5",
      overview: "Mock Overview 5",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 6,
      name: "Mock Title 6",
      original_name: "Mock Original Name 6",
      overview: "Mock Overview 6",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 7,
      name: "Mock Title 7",
      original_name: "Mock Original Name 7",
      overview: "Mock Overview 7",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 8,
      name: "Mock Title 8",
      original_name: "Mock Original Name 8",
      overview: "Mock Overview 8",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 9,
      name: "Mock Title 9",
      original_name: "Mock Original Name 9",
      overview: "Mock Overview 9",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 10,
      name: "Mock Title 10",
      original_name: "Mock Original Name 10",
      overview: "Mock Overview 10",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 11,
      name: "Mock Title 11",
      original_name: "Mock Original Name 11",
      overview: "Mock Overview 11",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 12,
      name: "Mock Title 12",
      original_name: "Mock Original Name 12",
      overview: "Mock Overview 12",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 13,
      name: "Mock Title 13",
      original_name: "Mock Original Name 13",
      overview: "Mock Overview 13",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 14,
      name: "Mock Title 14",
      original_name: "Mock Original Name 14",
      overview: "Mock Overview 14",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 15,
      name: "Mock Title 15",
      original_name: "Mock Original Name 15",
      overview: "Mock Overview 15",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 16,
      name: "Mock Title 16",
      original_name: "Mock Original Name 16",
      overview: "Mock Overview 16",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 17,
      name: "Mock Title 17",
      original_name: "Mock Original Name 17",
      overview: "Mock Overview 17",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 18,
      name: "Mock Title 18",
      original_name: "Mock Original Name 18",
      overview: "Mock Overview 18",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 19,
      name: "Mock Title 19",
      original_name: "Mock Original Name 19",
      overview: "Mock Overview 19",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
    {
      id: 20,
      name: "Mock Title 20",
      original_name: "Mock Original Name 20",
      overview: "Mock Overview 20",
      media_type: "tv",
      adult: false,
      original_language: "ja",
      vote_average: 7.774,
      vote_count: 1733,
    },
  ];

  const handleAddItem = (item: any) => {
    dispatch(setData(item));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleClick = (index: any) => {
    setActiveButtons((prevActiveButtons: any) => {
      const isActive = prevActiveButtons.includes(index);
      if (isActive) {
        return prevActiveButtons.filter((i: any) => i !== index);
      } else {
        return [...prevActiveButtons, index];
      }
    });
  };

  const [activeButtons, setActiveButtons] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="w-full h-auto flex items-start flex-col py-2">
      <div className="grid lg:grid-cols-3 min-w-full md:grid-cols-2 w-full grid-cols-1 gap-4 min-h-[32rem] px-2 max-h-[44rem] custom-scrollbar overflow-y-scroll">
        {mockSeries?.map((item: any, key: any) => {
          return (
            <div
              className="relative h-auto justify-start flex"
              key={`${key}-series-trending`}
            >
              <div className="mask min-h-44 bg-gray-300 w-full rounded-3xl animate-pulse" />
              <div className="absolute w-full top-0 px-2 ">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <button
                    key={key}
                    onClick={() => {
                      handleClick(key);
                      handleAddItem(item);
                    }}
                    className={`px-4 py-2 rounded-md transition-colors duration-300`}
                  >
                    {activeButtons.includes(key) ? (
                      <FaBookmark className="text-yellow-400 h-10 hover:scale-125" />
                    ) : (
                      <FaRegBookmark className="text-yellow-400 h-10 hover:scale-125" />
                    )}
                  </button>
                </div>

                <Tooltip title={item?.name} overview={item?.overview} />
              </div>
              <div className="absolute w-full bottom-0 py-3 px-2 flex flex-row">
                <div className="w-full">
                  <span>{item?.name}</span>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <FaStar className="text-yellow-400 h-5 w-5" />
                    <span>{Math.floor(item?.vote_average)}</span>
                    <GoThumbsup className="h-5 w-5" />
                    <span>{item?.vote_count}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showAlert && (
        <Alert
          message="Added to the watchlist!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default SkeletonSeries;
