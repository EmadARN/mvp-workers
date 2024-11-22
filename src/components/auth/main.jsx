import SendOTPForm from "./otpForm/SendOTPForm";
import CheckOTPForm from "./otpForm/CheckOTPForm";
import useOtpForm from "../../hooks/useOtpForm";
import UploadImageForm from "./uploadImageForm/UploadImageForm";

const AuthPage = () => {
  const {
    phoneNumber,
    phoneNumberHandler,
    step,
    otp,
    setOtp,
    time,
    sendOtpHandler,
    checkOtpHandler,
    onBack,
    onResendOtp,
  } = useOtpForm();

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={onBack}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendOtp={onResendOtp}
            phoneNumber={phoneNumber}
          />
        );
      case 3:
        return <UploadImageForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
};

export default AuthPage;
