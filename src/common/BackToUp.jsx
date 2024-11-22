import { useState, useEffect } from "react";
import backToUp from "../utils/BackToUp";
import { IoMdArrowUp } from "react-icons/io";

const BackToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden md:block fixed left-4 bottom-16 transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="bg-main-1 text-main-2 flex items-center justify-center font-bold hover:bg-main-2 hover:shadow-lg hover:text-main-1 hover:transform hover:-translate-y-1 active:transform active:translate-y-0.5 active:shadow-md p-3 rounded-sm border border-main-2"
        onClick={() => backToUp()}
      >
        <IoMdArrowUp />
      </button>
    </div>
  );
};

export default BackToUp;
