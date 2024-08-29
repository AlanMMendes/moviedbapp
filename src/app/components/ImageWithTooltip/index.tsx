// components/ImageWithTooltip.js

import Link from "next/link";
import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import ImageWithFallback from "../ImageFallback";
import Tooltip from "../Tooltip";
import TooltipComponent from "../TooltipOverview";
import WatchlistChecked from "../WatchlistChecked";

const ImageWithTooltip = ({ src, props }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
            <WatchlistChecked props={props} />
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
    </div>
  );
};

export default ImageWithTooltip;
