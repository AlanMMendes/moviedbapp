import { useState } from "react";

const Tooltip = ({ children, tooltipText }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute bottom-full left-0 transform -translate-x-3/4 mb-2 p-2 bg-gray-700 text-white text-sm rounded shadow-lg whitespace-nowrap">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
