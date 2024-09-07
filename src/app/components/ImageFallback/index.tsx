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
      className="mask rounded-lg"
      width={0}
      height={0}
      sizes="300vw"
    />
  );
};

export default ImageWithFallback;
