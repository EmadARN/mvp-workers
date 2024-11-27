import { useState, useEffect } from "react";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";

const RESEND_TIME = 90;

const useOtpForm = (setCurrentStep, navigate) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const dispatch = useAuthActions();
  const { loading } = useAuth();

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: "PHONENUMBER_GET",
      payload: phoneNumber,
    });

    setTimeout(() => {
      if (!loading) {
        setCurrentStep(2);
        localStorage.setItem("authStep", "2"); // ذخیره مرحله در localStorage
        navigate(`/signIn/step2`);
      }
    }, 3000);
  };

  const onBack = () => setCurrentStep((s) => s - 1);

  const onResendOtp = () => {
    setTime(RESEND_TIME);
    // می‌توانید ارسال مجدد OTP را هم اضافه کنید
  };

  useEffect(() => {
    const timer =
      time > 0 && setInterval(() => setTime((time) => time - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return {
    time,
    setTime,
    onBack,
    onResendOtp,
    phoneNumberHandler,
    sendOtpHandler,
    phoneNumber,
  };
};

export default useOtpForm;
