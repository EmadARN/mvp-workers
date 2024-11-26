import SendOTPForm from "./otpForm/SendOTPForm";
import CheckOTPForm from "./otpForm/CheckOTPForm";
import useOtpForm from "../../hooks/useOtpForm";
import UploadImageForm from "./uploadImageForm/UploadImageForm";
import { useState } from "react";

const AuthPage = () => {
  const [step, setStep] = useState(1);

  const { time, onBack, onResendOtp } = useOtpForm(setStep);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <SendOTPForm setStep={setStep} />;
      case 2:
        return (
          <CheckOTPForm
            onBack={onBack}
            setStep={setStep}
            time={time}
            onResendOtp={onResendOtp}
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
