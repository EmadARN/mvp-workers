import { FaAngleRight } from "react-icons/fa6";
import { contactInfo, quickLinks, services } from "../constants";

const FooterLink = ({ href, label }) => (
  <div className="flex items-center mt-4 group">
    <FaAngleRight className="text-white text-lg group-hover:text-main-1 transition duration-500 ease-in-out" />
    <a
      href={href}
      className="text-white text-lg hover:text-main-1 transition duration-500 ease-in-out ml-2 group-hover:text-main-1"
    >
      {label}
    </a>
  </div>
);

const Footer = () => {
  return (
    <div className=" w-full  bg-main-2 ">
      <footer className="">
        <div className="flex flex-wrap justify-evenly py-12 ">
          {/* Useful Pages */}
          <div className="flex flex-col items-start justify-center w-full  sm:w-1/2 md:w-1/4">
            <h5 className="text-main-1 whitespace-nowrap text-xl mb-4">
              دسترسی سریع
            </h5>
            <div className="h-48">
              {quickLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start justify-center w-full  sm:w-1/2 md:w-1/4">
            <h5 className="text-main-1 text-xl mb-4 ">خدمات قابل ارائه</h5>
            <div className="h-48 ">
              {services.map((service) => (
                <FooterLink
                  key={service.href}
                  href={service.href}
                  label={service.label}
                />
              ))}
              <div className="mt-4">
                <p className="text-white text-md  ">
                  منتظر سایر خدمات ما باشید
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start justify-center w-full sm:w-1/2 md:w-1/4">
            <h5 className="text-main-1 text-xl mb-4">راه های ارتباطی با ما</h5>
            <div className="h-48">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center mt-4">
                  <span className="text-white text-lg">
                    <i className={`fas ${info.icon}`}></i>
                  </span>
                  <p className="text-white text-lg ml-2">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center py-4 border-t-[1px] border-t-main-1 ">
        <p className="text-white text-xl">ساخته شده توسط</p>
        <p className="ml-2 text-main-1 text-xl pr-2 bold">آدلی کارا</p>
      </div>
    </div>
  );
};

export default Footer;
