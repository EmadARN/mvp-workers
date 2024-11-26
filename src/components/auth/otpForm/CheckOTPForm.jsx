import { HiArrowNarrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import usePinInput from "../../../hooks/usePinInput";

function CheckOTPForm({ onBack, time, onResendOtp, setStep, length = 6 }) {
  const { phone_number, loading } = useAuth();
  const { pin, getInputProps } = usePinInput(length);
  const dispatch = useAuthActions();

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: "OTP_POST",
      payload: { phone_number: phone_number, otp: pin },
    });
    setStep(3);
  };
  console.log("pin", pin);

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 text-left">
      <button onClick={onBack} className="mb-4">
        <HiArrowNarrowRight className="w-6 h-6 text-secondary-500 rotate-180" />
      </button>

      {phone_number && (
        <p className="text-center sm:text-right">
          {phone_number}
          <button onClick={onBack}>
            <CiEdit className="text-xs text-primary-900" />
          </button>
        </p>
      )}

      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold  sm:text-right">کد تایید را وارد کنید</p>
        <div className="flex justify-center items-center gap-x-2" dir="ltr">
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              {...getInputProps(index)} // پراپ‌های مدیریت‌شده توسط هوک
              autoFocus={index === length - 1} // فوکوس روی آخرین خانه
              className="w-6 h-6 md:w-12 md:h-12 border-2 border-gray-300 text-center text-xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-main-2 transition duration-300 ease-in-out "
            />
          ))}
        </div>

        <div className="mb-4  sm:text-right text-secondary-500">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
          )}
        </div>
        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="w-full sm:w-40 h-12 bg-main-1 text-white rounded-md mt-4 transition-all duration-300 transform hover:scale-105 pt-1"
          >
            تایید
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
