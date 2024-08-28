// src/components/Dropdown.js
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ component, icon }: any) => {
  const modalRef = useRef() as any;
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/search") {
      setIsOpen(false);
    }
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event?.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, pathname]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={modalRef} className="flex justify-center items-center">
      <button onClick={toggleDropdown}>{icon}</button>
      {isOpen && (
        <div className="absolute flex top-9 lg:right-2 right-2 justify-center items-center w-auto z-50 bg-transparent border-gray-200 rounded ">
          {component}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
