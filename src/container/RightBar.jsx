import { useState, useEffect } from "react";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";

const RightBar = () => {
  const [topPosition, setTopPosition] = useState("top-[13%]");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setTopPosition("top-[4%]");
    } else {
      setTopPosition("top-[13%]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-main-1 w-full h-full pt-1 md:hidden ">
      <div className={`fixed ${topPosition} transition-all z-[999]`}>
        {/* لینک‌های اصلی */}
        <Link to="/" className="text-gray-900 text-xl no-underline">
          <div className="flex sm:flex-row flex-col items-center pr-2 pb-6">
            <span>
              <FaHome />
            </span>
            <p className="text-main-2 sm:mt-3 sm:pr-1 text-sm sm:text-md sm:block">
              خانه
            </p>
          </div>
        </Link>

        <Link to="/About" className="text-gray-900 text-xl no-underline">
          <div className="flex sm:flex-row flex-col items-center pr-2 pb-6">
            <span>
              <LuShieldAlert />
            </span>
            <p className="text-main-2 sm:pr-1 text-sm sm:text-md sm:block">
              درباره ما
            </p>
          </div>
        </Link>

        <Link to="/ServicesPage" className="text-gray-900 text-xl no-underline">
          <div className="flex sm:flex-row flex-col items-center pr-2">
            <span>
              <MdOutlineMiscellaneousServices />
            </span>
            <p className="text-main-2 text-sm sm:text-md sm:pr-1 sm:block">
              سرویس ها
            </p>
          </div>
        </Link>
      </div>

      {/* لینک ثبت‌نام در پایین */}
      <div className="fixed bottom-8 transform -translate-x-1/3">
        <Link to="/signIn" className="no-underline">
          <div className="flex sm:flex-row flex-col items-center pr-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-main-2 text-yellow-500 rounded-full cursor-pointer hover:bg-yellow-500 hover:text-blue-900 border-2 border-dashed border-main-1">
              <FaSignInAlt />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightBar;
