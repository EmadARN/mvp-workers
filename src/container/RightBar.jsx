import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const RightBar = ({ dipslay, height, topPositionH, signinButtonPositionH }) => {
  const [topPosition, setTopPosition] = useState("top-[13%]");
  const [signinButtonPosition, setSigninButtonPosition] = useState("block");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setTopPosition(
        scrollY > topPositionH
          ? "hidden"
          : scrollY > 50
          ? "top-[4%]"
          : "top-[13%]"
      );
      setSigninButtonPosition(
        scrollY > signinButtonPositionH ? "absolute top-[150%]" : "block"
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` relative  w-full h-[100%]  pt-1 md:hidden`}
      style={{ height: height }}
    >
      <div className={`fixed ${topPosition} transition-all z-[999]`}>
        {/* لینک‌های اصلی */}
        {navLinks.map(({ to, icon, label }) => (
          <Link key={to} to={to} className="text-gray-900 text-xl no-underline">
            <div className="flex sm:flex-row flex-col items-center pr-2 pb-6">
              <span>{icon}</span>
              <p className="text-main-2 sm:mt-3 sm:pr-1 text-sm sm:text-md sm:block">
                {label}
              </p>
            </div>
          </Link>
        ))}

        {/* لینک ثبت‌نام */}
        <div
          className={`${dipslay} fixed ${signinButtonPosition} bottom-12 transform -translate-x-1/3 transition-all`}
        >
          <Link to={`/signIn`} className="no-underline">
            <div className="flex sm:flex-row flex-col items-center pr-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-main-2 text-yellow-500 rounded-full cursor-pointer hover:bg-yellow-500 hover:text-blue-900 border-2 border-dashed border-main-1">
                <FaSignInAlt />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
