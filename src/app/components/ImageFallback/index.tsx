// src/components/ImageWithFallback.js
import { useState } from "react";

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }: any) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <img
      src={hasError ? fallbackSrc : src}
      alt={alt}
      onError={handleError}
      {...props}
      className="mask rounded-lg w-full min-h-32 h-auto min-w-full"
      width={0}
      height={0}
      sizes="1000vw"
    />
  );
};

export default ImageWithFallback;
