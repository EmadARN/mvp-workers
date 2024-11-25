import { useState, useEffect } from "react";

const RESEND_TIME = 90;

const useOtpForm = (step, setStep) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    setStep(2);
  };

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    setStep(3);
  };

  const confirmCameraHandler = async (e) => {
    e.preventDefault();
    setStep(5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const onBack = () => setStep((s) => s - 1);

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
    phoneNumber,
    setPhoneNumber,
    phoneNumberHandler,
    step,
    setStep,
    otp,
    setOtp,
    time,
    setTime,
    sendOtpHandler,
    checkOtpHandler,
    onBack,
    onResendOtp,
    handleSubmit,
    confirmCameraHandler,
  };
};

export default useOtpForm;
