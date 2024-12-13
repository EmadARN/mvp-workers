import { useCallback, useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import usePinInput from "./usePinInput";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCookie } from "../../../hooks/useCookies";
import { useSignup } from "../../../context/signupProvider";

const RESEND_TIME = 90;
function useCheckOTP(length = 6) {
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { setCurrentStep } = useSignup();

  const [cookieValue, setBrowserCookie] = useCookie("auth-token");
  const { phone_number, token } = useAuth();
  const dispatch = useAuthActions();
  const { pin, getInputProps } = usePinInput(length);

  useEffect(() => {
    if (token) {
      setBrowserCookie(token, "auth-token");
      setCurrentStep(3);
      navigate("/signIn/SigninRegister");
    }
  }, [token, navigate, setBrowserCookie]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    if (phone_number) {
      try {
        await dispatch({
          type: "OTP_POST",
          payload: { phoneNumber: phone_number, otp: pin },
        });
      } catch (error) {
        toast.error("خطای پیش‌بینی نشده");
      }
    }
  };
  const onResendOtp = useCallback(() => {
    setTime(RESEND_TIME);
    // ارسال مجدد OTP را اینجا اضافه کنید
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(
        () => setTime((prevTime) => prevTime - 1),
        1000
      );
      return () => clearInterval(timer); // پاک کردن تایمر در صورت تغییر time یا unmount
    }
  }, [time]);

  const onBack = useCallback(() => navigate("/signIn"), [navigate]);

  return {
    phone_number,
    pin,
    time,
    onBack,
    getInputProps,
    checkOtpHandler,
    onResendOtp,
  };
}

export default useCheckOTP;
