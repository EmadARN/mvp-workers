import { MdForwardToInbox, MdOutlinePhoneCallback } from "react-icons/md";
import NavBar from "./NavBar";
import { toPersianDigits } from "../../utils/toPersianDigits";
import { FaRegAddressBook } from "react-icons/fa";
import BtnAnimation from "../../common/BtnAnimation";
import { useLocation } from "react-router-dom";

const AppBar = ({ signinBtnDisplay }) => {

  const location = useLocation();
  return (
    <div className=" w-full bg-main-1 fixed top-0 left-0 z-50 md:relative">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2">
        {/* Title Section */}
        <div className={`flex ${location.pathname.startsWith("/signIn") ? "justify-center" : "justify-between"}  w-full md:w-1/3 md:text-left mt-3`}>
          <h1 className="text-3xl md:text-6xl font-bold font-sans_bold p-2">
            سازندگان
          </h1>
          
          <div className={`pl-3 flex items-center block md:hidden ${signinBtnDisplay}`}>
          <BtnAnimation
            title="ثبت نام کارجو"
            color="#fff"
            size="18px"
            fweight="700"
          />
        </div>
        </div>

        {/* Info Section */}
        <div className="hidden md:flex md:w-1/2 justify-around text-lg mt-3">
          {/* Address */}
          <div className="flex flex-col items-start font-bold">
            <FaRegAddressBook className="text-3xl pb-2" />
            <p className="">آدرس</p>
            <p className="">زنجان , اعتمادیه</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start font-bold">
            <MdOutlinePhoneCallback className="text-3xl pb-2" />
            <p className="">تماس با ما</p>
            <p className="">{toPersianDigits(`0243332265`)}</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start font-bold">
            <MdForwardToInbox className="text-3xl pb-2" />
            <p className="">ایمیل ما</p>
            <p className="">info@gmail.com</p>
          </div>
        </div>
      </div>
      <NavBar signinBtnDisplay={signinBtnDisplay} />
    </div>
  );
};

export default AppBar;
