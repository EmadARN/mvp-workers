import { HiArrowNarrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Stepper from "../Stepper";
import useCheckOTP from "./useCheckOTP";
import CustomeBtn from "../../../common/CustomeBtn";

function CheckOTPForm({ length = 6 }) {
  const {
    pin,
    phone_number,
    time,
    getInputProps,
    checkOtpHandler,
    onBack,
    onResendOtp,
  } = useCheckOTP(length);

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 text-left">
      <Stepper currentStep={1} />
      <button onClick={onBack} className="mb-4">
        <HiArrowNarrowRight className="w-6 h-6 text-secondary-500 rotate-180" />
      </button>

      {phone_number && (
        <p className="text-center text-right">
          {phone_number}
          <button onClick={onBack}>
            <CiEdit className="text-xs text-primary-900" />
          </button>
        </p>
      )}

      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-right">کد تایید را وارد کنید</p>
        <div className="flex justify-center items-center gap-x-2" dir="ltr">
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              {...getInputProps(index)} // پراپ‌های مدیریت‌شده توسط هوک
              autoFocus={index === 0} // فوکوس روی آخرین خانه
              className="w-10 py-4 h-6  md:w-12 md:h-12 border-2 border-gray-300 text-center text-xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-main-2 transition duration-300 ease-in-out "
            />
          ))}
        </div>

        <div className="mb-4 text-right text-secondary-500">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
          )}
        </div>
        <div className="flex justify-center ">
          <CustomeBtn content="تایید" disabled={pin.length !== 6} />
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
