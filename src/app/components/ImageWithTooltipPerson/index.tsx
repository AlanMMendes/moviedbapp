// components/ImageWithTooltip.js

import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ImageWithFallback from "../ImageFallback";

const ImageWithTooltipPerson = ({ src, props }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative inline-block "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Link href={`/${props.type}/${props?.id}`}>
        <ImageWithFallback
          src={src}
          alt={props.id}
          fallbackSrc={"https://placehold.co/1920x1080/png"}
          className="mask rounded-lg w-full min-h-32 h-auto min-w-full"
        />
        {isHovered && (
          <div
            className={`absolute h-full justify-center cursor-pointer items-center top-0 w-full p-2 bg-black text-white text-left rounded-lg opacity-90 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-sm w-24 overflow-x-auto">{props?.name}</h1>
            <div className="absolute bottom-0 left-0 py-2 px-2 flex flex-row gap-2 ">
              <FaStar className="text-yellow-400 h-5 w-5" />
              <h1>{Math.floor(props?.popularity)}</h1>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ImageWithTooltipPerson;
