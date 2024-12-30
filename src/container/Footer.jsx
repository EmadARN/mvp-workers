import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAngleRight,
  FaReact,
} from "react-icons/fa";
import { navLinks, quickLinks, services } from "../constants";
import { Link } from "react-router-dom";

const Footer = ({ footerDiplay }) => {
  return (
    <div>
      <footer className=" hidden md:block bg-main-2 text-white pt-6 px-4">
        <div
          className={`${footerDiplay} container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8`}
        >
          {/* ستون اول: دسترسی سریع */}
          <div>
            <h3 className="text-main-1 text-lg font-sans_normal mb-4">
              دسترسی سریع
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-main-1 ml-2" />
                  <a href={link.href} className="hover:text-main-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون دوم: خدمات قابل ارائه */}
          <div>
            <h3 className="text-main-1 text-lg font-sans_normal mb-4">
              خدمات قابل ارائه
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-main-1 ml-2" />
                  <a href={service.href} className="hover:text-main-1">
                    {service.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center">
                <p className="hover:text-main-1">منتظر سایر خدمات ما باشید</p>
              </li>
            </ul>
          </div>

          {/* ستون سوم: راه‌های ارتباطی */}
          <div>
            <h3 className="text-main-1 text-lg font-sans_normal mb-4">
              راه‌های ارتباطی با ما
            </h3>
            <ul className="space-y-2 child-hover:text-main-1 ">
              <li className="flex items-center">
                <FaPhone className=" ml-2" />
                <p>تلفن: 0123456789</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className=" ml-2" />
                <p>ایمیل: info@example.com</p>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className=" ml-2" />
                <p>آدرس: تهران، خیابان اصلی</p>
              </li>
            </ul>
          </div>
        </div>
        {/* خط افقی و متن با آیکون */}
        <div
          className={`border-t-2 border-main-1 py-2 text-center ${
            footerDiplay ? "mt-0" : "mt-6"
          } `}
        >
          <p
            className={`text-sm font-sans_bold text-white ${
              footerDiplay ? "text-center" : "text-left"
            }`}
          >
            ساخته شده توسط{" "}
            <FaReact className="inline-block text-main-1 ml-2" size={16} />
          </p>
        </div>
      </footer>
      {/* mobile ui */}
      <div className=" flex md:hidden justify-evenly py-4 border-t-[1px] border-t-main-1 w-full fixed bottom-0 left-0 bg-main-2 z-50 ">
        {navLinks.map(({ to, icon, label }) => (
          <div key={to}>
            <div className="flex justify-center w-full ">
              <Link
                to={to}
                title={label}
                className="text-white text-xl no-underline "
              >
                <span>{icon}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
