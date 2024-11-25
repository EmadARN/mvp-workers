import { HiArrowNarrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import PinInput from "./PinInput";

function CheckOTPForm({
  onSubmit,
  otp,
  setOtp,
  onBack,
  time,
  onResendOtp,
  phoneNumber,
}) {
  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6">
      <button onClick={onBack} className="mb-4">
        <HiArrowNarrowRight className="w-6 h-6 text-secondary-500" />
      </button>

      {phoneNumber && (
        <p className="text-center sm:text-left">
          {phoneNumber}
          <button onClick={onBack}>
            <CiEdit className="text-xs text-primary-900" />
          </button>
        </p>
      )}

      <div className="mb-4  sm:text-right text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
        )}
      </div>

      <form className="space-y-10" onSubmit={onSubmit}>
        <p className="font-bold  sm:text-right">کد تایید را وارد کنید</p>
        <PinInput value={otp} onChange={setOtp} />
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
