// src/components/ImageWithFallback.js
import Image from "next/image";
import { useState } from "react";

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }: any) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="relative">
      <Image
        src={hasError ? fallbackSrc : src}
        alt={alt}
        onError={handleError}
        {...props}
        layout="responsive"
        className="mask h-auto min-h-60 w-full"
        width={0}
        height={0}
        sizes="1000vw"
      />
    </div>
  );
};

export default ImageWithFallback;
