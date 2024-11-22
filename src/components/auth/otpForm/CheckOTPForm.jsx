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
    <div>
      <button onClick={onBack} className="mb-4">
        <HiArrowNarrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {phoneNumber && (
        <p>
          {phoneNumber}
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
        )}
      </div>

      <form className="space-y-10" onSubmit={onSubmit}>
        <p className="font-bold">کد تایید را وارد کنید</p>
        <PinInput value={otp} onChange={setOtp} />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-40 h-12 bg-main-1 text-white rounded-md mt-4 transition-all duration-300 transform hover:scale-105"
          >
            تایید
          </button>
        </div>
      </form>
    </div>
  );
}
export default CheckOTPForm;
