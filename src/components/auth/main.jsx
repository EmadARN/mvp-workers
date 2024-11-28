import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SendOTPForm from "./otpForm/SendOTPForm";
import CheckOTPForm from "./otpForm/CheckOTPForm";
import UploadImageForm from "./uploadImageForm/UploadImageForm";
import RegisterMain from "./registerForm/RegisterMain";
import SignUpFinalPage from "./submitInformation/SignUpFinalPage";
import { useAuth, useAuthActions } from "../../context/AuthReducer";
import useOtpForm from "./otpForm/useOtpForm";

const AuthPage = () => {
  const { step } = useParams(); // دریافت شماره مرحله از URL
  const navigate = useNavigate();

  // دریافت یا تنظیم مرحله از localStorage
  const savedStep = localStorage.getItem("authStep");
  const initialStep = savedStep ? parseInt(savedStep) : 1;
  const [currentStep, setCurrentStep] = useState(initialStep); // تنظیم مرحله جاری
  const dispatch = useAuthActions();

  //hook
  const {
    time,
    onBack,
    onResendOtp,
    phoneNumberHandler,
    sendOtpHandler,
    phoneNumber,
  } = useOtpForm(setCurrentStep, navigate);
  const { loading } = useAuth();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4);
    localStorage.setItem("authStep", "4"); // ذخیره مرحله در localStorage
    navigate(`/signIn/step4`);
  };

  // استفاده از useEffect برای همگام‌سازی localStorage و currentStep
  useEffect(() => {
    if (step) {
      const newStep = parseInt(step);
      if (newStep !== currentStep) {
        setCurrentStep(newStep); // همگام‌سازی وضعیت با URL
        localStorage.setItem("authStep", newStep.toString()); // ذخیره مرحله جدید در localStorage
      }
    }
  }, [step]); // وابسته به تغییرات step

  useEffect(() => {
    localStorage.setItem("authStep", currentStep.toString()); // ذخیره مرحله در localStorage هر بار که currentStep تغییر می‌کند
  }, [currentStep]);

  // برای مدیریت برگشت و کاهش مرحله
  useEffect(() => {
    // بررسی زمان برگشت به مرحله قبلی
    const onPopState = (event) => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1); // کاهش مرحله
      }
    };

    window.addEventListener("popstate", onPopState);

    // تمیزکاری: حذف eventListener بعد از تغییر
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [currentStep]);

  const renderSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            phoneNumberHandler={phoneNumberHandler}
            sendOtpHandler={sendOtpHandler}
            loading={loading}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={onBack}
            setStep={setCurrentStep}
            time={time}
            onResendOtp={onResendOtp}
          />
        );
      case 3:
        return <RegisterMain handleSubmit={handleSubmit} />;
      case 4:
        return <UploadImageForm setCurrentStep={setCurrentStep} />;
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
