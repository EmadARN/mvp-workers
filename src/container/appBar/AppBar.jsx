import { MdForwardToInbox, MdOutlinePhoneCallback } from "react-icons/md";
import NavBar from "./NavBar";
import { toPersianDigits } from "../../utils/toPersianDigits";
import { FaRegAddressBook } from "react-icons/fa";

const AppBar = ({ signinBtnDisplay }) => {
  return (
    <div className="w-full bg-main-1">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4">
        {/* Title Section */}
        <div className="w-full md:w-1/3 text-center md:text-left mt-3">
          <h1 className="text-4xl md:text-6xl font-bold font-sans_bold">
            سازندگان
          </h1>
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
