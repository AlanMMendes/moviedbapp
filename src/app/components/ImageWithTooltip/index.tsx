// components/ImageWithTooltip.js

import { removeItem, setData } from "@/app/features/watchListSlice";
import Link from "next/link";
import { useState } from "react";
import { FaBookmark, FaPlay, FaRegBookmark, FaStar } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../Alert";
import ImageWithFallback from "../ImageFallback";
import Tooltip from "../Tooltip";
import TooltipComponent from "../TooltipOverview";

const ImageWithTooltip = ({ src, props }: any) => {
  const dispatch: any = useDispatch();
  const items = useSelector((state: any) => state?.watchList?.items);
  const idToCheck = props?.id;
  const exists = items?.some((item: any) => item.id === idToCheck);
  const [isHovered, setIsHovered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState("");
  const [activeButton, setActiveButton] = useState<any>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleAddItem = (item: any) => {
    setActiveButton(true);
    dispatch(setData(item));
    setShowAlert(true);
    setShowAlertMessage(`Added ${props?.name} to the watchlist`);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleRemoveItem = (id: any) => {
    setActiveButton(false);
    dispatch(removeItem(id));
    setShowAlert(true);
    setShowAlertMessage(`Removed ${props?.name} from the watchlist`);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
    >
      <ImageWithFallback
        src={src}
        alt={props.id}
        fallbackSrc={"https://placehold.co/1920x1080/png"}
        className="mask rounded-lg w-full min-h-32 h-auto min-w-full"
      />
      {isHovered && (
        <div
          className={`absolute h-full top-0 w-full p-2 bg-black text-white text-left rounded-lg opacity-90 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-lg w-48">{props?.name}</h1>
          <div className="absolute bottom-0 right-0 py-2 px-2 gap-2 flex ">
            <button className={`rounded-md transition-colors duration-300`}>
              {exists ? (
                <Tooltip tooltipText={"Remove from Watchlist"}>
                  <FaBookmark
                    onClick={() => handleRemoveItem(props?.id)}
                    className="text-yellow-400 h-6 w-6"
                  />
                </Tooltip>
              ) : (
                <Tooltip tooltipText={"Add to Watchlist"}>
                  <FaRegBookmark
                    onClick={() => {
                      handleAddItem(props);
                    }}
                    className="hover:text-yellow-400 h-6 w-6"
                  />
                </Tooltip>
              )}
            </button>
            {props.type === "episodes" ? (
              <></>
            ) : (
              <Link href={`/${props.type}/${props?.id}`}>
                <Tooltip tooltipText={"Play"}>
                  <FaPlay className="hover:text-yellow-500 h-6 w-6" />
                </Tooltip>
              </Link>
            )}
          </div>
          {props?.overview && (
            <div className="absolute top-0 right-0 py-2 px-2 gap-2 flex ">
              <TooltipComponent tooltipText={props?.overview}>
                <FaCircleExclamation className="hover:text-yellow-500 h-6 w-6" />
              </TooltipComponent>
            </div>
          )}

          <div className="absolute bottom-0 left-0 py-2 px-2 flex flex-row gap-2 ">
            <FaStar className="text-yellow-400 h-5 w-5" />
            <h1>{Math.floor(props?.vote_average)}</h1>
            <GoThumbsup className="h-5 w-5" />
            <h1>{props?.vote_count}</h1>
          </div>
        </div>
      )}
      {showAlert && (
        <Alert
          message={showAlertMessage}
          onClose={() => setShowAlert(false)}
          priority={activeButton}
        />
      )}
    </div>
  );
};

export default ImageWithTooltip;
