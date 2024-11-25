import SendOTPForm from "./otpForm/SendOTPForm";
import CheckOTPForm from "./otpForm/CheckOTPForm";
import useOtpForm from "../../hooks/useOtpForm";
import UploadImageForm from "./uploadImageForm/UploadImageForm";
import { useState } from "react";

const AuthPage = () => {
  const [step, setStep] = useState(1);

  const {
    phoneNumber,
    phoneNumberHandler,

    otp,
    setOtp,
    time,
    sendOtpHandler,
    checkOtpHandler,
    onBack,
    confirmCameraHandler,
    onResendOtp,
    handleSubmit
  } = useOtpForm(step, setStep);

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
        return <RegisterMain handleSubmit={handleSubmit} />;
      case 4:
        return <UploadImageForm confirmCameraHandler={confirmCameraHandler} />;

      case 5:
        return <SignUpFinalPage />;
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
