import { useState, useEffect } from "react";

const RESEND_TIME = 90;

const useOtpForm = (setStep) => {
  const [time, setTime] = useState(RESEND_TIME);

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
    time,
    setTime,
    onBack,
    onResendOtp,
  };
};

export default useOtpForm;
