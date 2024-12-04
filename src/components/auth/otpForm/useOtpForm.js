import { useState, useEffect, useCallback } from "react";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";

const RESEND_TIME = 90;

const useOtpForm = ( navigate) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const dispatch = useAuthActions();
  const { loading } = useAuth();

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = useCallback(async (e) => {
    e.preventDefault();
    dispatch({
      type: "PHONENUMBER_GET",
      payload: phoneNumber,
    });

    setTimeout(() => {
      if (!loading) {
       
        navigate(`/signIn/step2`);
      }
    }, 3000);
  }, [phoneNumber, loading, navigate, dispatch]);

 // const onBack = useCallback(() => setCurrentStep((s) => s - 1), [setCurrentStep]);

  const onResendOtp = useCallback(() => {
    setTime(RESEND_TIME);
    // ارسال مجدد OTP را اینجا اضافه کنید
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
      return () => clearInterval(timer); // پاک کردن تایمر در صورت تغییر time یا unmount
    }
  }, [time]);

  return {
    time,
   // onBack,
    onResendOtp,
    phoneNumberHandler,
    sendOtpHandler,
    phoneNumber,
  };
};

export default useOtpForm;