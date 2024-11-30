import { useState, useEffect, useMemo, useCallback } from "react";
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

  

  // هوک
  const {
    //time,
    onBack,
    onResendOtp,
    phoneNumberHandler,
    sendOtpHandler,
    phoneNumber,
  } = useOtpForm(setCurrentStep, navigate);
  const { loading } = useAuth();

  const handleSubmit = (e,formData) => {
    e.preventDefault(); 
    
    
    dispatch({
      type:"FORM_POST",
      payload:{formData}
    })
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
  }, [step, currentStep]);

  useEffect(() => {
    localStorage.setItem("authStep", currentStep.toString()); // ذخیره مرحله در localStorage هر بار که currentStep تغییر می‌کند
  }, [currentStep]);

  // برای مدیریت برگشت و کاهش مرحله
  useEffect(() => {
    const onPopState = (event) => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1); // کاهش مرحله
      }
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [currentStep]);

  // استفاده از useMemo برای جلوگیری از رندر اضافی
  const renderSteps = useMemo(() => {
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
          //time={time}
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
  }, [currentStep, phoneNumber,  loading, onBack, onResendOtp, handleSubmit]);

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps}</div>
    </div>
  );
};

export default AuthPage;
