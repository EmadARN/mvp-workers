import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BtnAnimation from "../../common/BtnAnimation";
import { pages } from "../../constants";

function NavBar({ signinBtnDisplay }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`hidden md:flex justify-center w-full mt-5 `}>
      <div
        className={`${
          isScrolled
            ? "bg-main-2  fixed top-0 w-full z-50 flex justify-between items-center px-4 py-2 transition-all duration-1000"
            : "bg-main-2 w-11/12 mx-auto flex justify-between items-center px-4 py-2 transition-all duration-1000"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-grow items-center">
          {pages.map((page) => (
            <Link
              key={page.id}
              to={page.to}
              className="text-white text-lg mx-2 relative group"
            >
              <span className="px-4 py-2 cursor-pointer relative transition-all duration-500 group-hover:text-main-1 ">
                {page.name}
                <span className="absolute w-1 h-1 top-0 left-0 border-t-2 border-l-2 border-main-1 transition-all duration-500 group-hover:w-3/4 group-hover:h-3/4"></span>
                <span className="absolute w-1 h-1 bottom-0 right-0 border-b-2 border-r-2 border-main-1 transition-all duration-500 group-hover:w-3/4 group-hover:h-3/4"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Signup Button */}
        <div className={`pl-3 flex items-center ${signinBtnDisplay}`}>
          <BtnAnimation
            title="ثبت نام کارجو"
            color="#fff"
            size="18px"
            fweight="700"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
