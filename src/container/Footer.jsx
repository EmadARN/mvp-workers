// import { FaAngleRight } from "react-icons/fa6";
// import { contactInfo, navLinks, quickLinks, services } from "../constants";
// import { Link } from "react-router-dom";

// const FooterLink = ({ href, label }) => (
//   <div className="flex justify-start text-center mt-4 group ">
//     <FaAngleRight className="text-white text-lg group-hover:text-main-1 transition duration-500 ease-in-out ml-3" />
//     <a
//       href={href}
//       className="text-white text-center text-lg hover:text-main-1 transition duration-500 ease-in-out ml-2 group-hover:text-main-1"
//     >
//       {label}
//     </a>
//   </div>
// );

// const Footer = () => {
//   return (
//     <div className=" w-full  bg-main-2 pt-6">
//       <footer className="hidden md:block">
//         <div className="flex flex-wrap justify-evenly py-12 ">
//           {/* Useful Pages */}
//           <div className="flex flex-col items-center justify-center w-full  sm:w-1/2 md:w-1/4">
//             <h5 className="text-main-1 whitespace-nowrap text-xl mb-4">
//               دسترسی سریع
//             </h5>
//             <div className="h-48">
//               {quickLinks.map((link, index) => (
//                 <FooterLink key={index} href={link.href} label={link.label} />
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="flex flex-col items-center   w-full  sm:w-1/2 md:w-1/4 text-justify">
//             <h5 className="text-main-1 text-xl mb-4 ml-6">خدمات قابل ارائه</h5>
//             <div className="h-48  ">
//               {services.map((service,index) => (
//                 <FooterLink
//                   key={index}
//                   href={service.href}
//                   label={service.label}
//                 />
//               ))}
//               <div className="mt-4">
//                 <p className="text-white text-md  ">
//                   منتظر سایر خدمات ما باشید
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/4">
//             <h5 className="text-main-1 text-xl mb-4">راه های ارتباطی با ما</h5>
//             <div className="h-48">
//               {contactInfo.map((info, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center mt-4 justify-center"
//                 >
//                   <span className="text-white text-lg">
//                     <i className={`fas ${info.icon}`}></i>
//                   </span>
//                   <p className="text-white text-lg ml-2">{info.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* mobile ui */}
//       <div className=" flex md:hidden justify-evenly py-4 border-t-[1px] border-t-main-1 w-full fixed bottom-0 left-0 bg-main-2 z-50">
//         {navLinks.map(({ to, icon, label }) => (
//           <div key={to}>
//             <div className="flex justify-center w-full  border-r-2 border-main-1">
//               <Link
//                 to={to}
//                 title={label}
//                 className="text-white text-xl no-underline"
//               >
//                 <span>{icon}</span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAngleRight,
} from "react-icons/fa";
import { navLinks, quickLinks, services } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="hidden md:block bg-main-2 text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="text-main-1 ml-2" />
                <p className="hover:text-main-1">تلفن: 0123456789</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-main-1 ml-2" />
                <p className="hover:text-main-1">ایمیل: info@example.com</p>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-main-1 ml-2" />
                <p className="hover:text-main-1">آدرس: تهران، خیابان اصلی</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* mobile ui */}
      <div className=" flex md:hidden justify-evenly py-4 border-t-[1px] border-t-main-1 w-full fixed bottom-0 left-0 bg-main-2 z-50">
        {navLinks.map(({ to, icon, label }) => (
          <div key={to}>
            <div className="flex justify-center w-full  border-r-2 border-main-1">
              <Link
                to={to}
                title={label}
                className="text-white text-xl no-underline"
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
