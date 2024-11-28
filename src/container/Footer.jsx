import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-7">
      <footer className="w-full bg-[#030F27]">
        <div className="flex flex-wrap justify-evenly border-b-3 border-white pb-8 pt-8 sm:pr-0">
          {/* <!-- Useful Pages --> */}
          <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/4 mt-8 mb-8">
            <h5 className="text-[#CC902F] whitespace-nowrap text-xl">
              دسترسی سریع
            </h5>

            <div className="flex items-center mt-4 group">
              <FaAngleRight className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-[#fdbe33] transition duration-500 ease-in-out" />
              <a
                href="/About"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#fdbe33] transition duration-500 ease-in-out ml-2 group-hover:text-[#fdbe33]"
              >
                درباره ما
              </a>
            </div>

            <div className="flex items-center mt-4 group">
              <FaAngleRight className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-[#fdbe33] transition duration-500 ease-in-out" />
              <a
                href="/servicesPage"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#fdbe33] transition duration-500 ease-in-out ml-2 group-hover:text-[#fdbe33]"
              >
                خدمات
              </a>
            </div>
          </div>

          {/* <!-- Services --> */}
          <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/4 mt-8 mb-8">
            <h5 className="text-[#CC902F] text-xl">خدمات قابل ارائه</h5>

            <div className="flex items-center mt-4 group">
              <FaAngleRight className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-[#fdbe33] transition duration-500 ease-in-out" />
              <a
                href="/About"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#fdbe33] transition duration-500 ease-in-out ml-2 group-hover:text-[#fdbe33]"
              >
                خدمات منزل
              </a>
            </div>

            <div className="flex items-center mt-4 group">
              <FaAngleRight className="text-white text-lg sm:text-xl md:text-2xl group-hover:text-[#fdbe33] transition duration-500 ease-in-out" />
              <a
                href="/About"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#fdbe33] transition duration-500 ease-in-out ml-2 group-hover:text-[#fdbe33]"
              >
                خدمات ساختمانی
              </a>
            </div>

            <div className="mt-4">
              <p className="text-white text-lg sm:text-xl md:text-2xl">
                منتظر سایر خدمات ما باشید
              </p>
            </div>
          </div>

          {/* <!-- Contact Info --> */}
          <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/4 mt-8 mb-8 mr-0 md:mr-20">
            <h5 className="text-[#CC902F] text-xl">راه های ارتباطی با ما</h5>

            <div className="flex items-center mt-4">
              <span className="text-white text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="text-white text-lg sm:text-xl md:text-2xl ml-2">
                Your Address
              </p>
            </div>

            <div className="flex items-center mt-4 ml-7 sm:ml-8">
              <span className="text-white text-2xl">
                <i className="fas fa-phone"></i>
              </span>
              <p className="text-white text-lg sm:text-xl md:text-2xl ml-2">
                +123 456 7890
              </p>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-white text-2xl">
                <i className="fas fa-envelope"></i>
              </span>
              <p className="text-white text-lg sm:text-xl md:text-2xl ml-2">
                email@example.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <p className="text-white text-xl">ساخته شده توسط</p>
          <p className="ml-2 text-[#EFAE30] text-xl">آدلی کارا</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
