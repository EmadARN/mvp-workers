import { useState, useCallback } from "react";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";

const useSendOtpForm = (navigate) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useAuthActions();
  const { loading } = useAuth();

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch({
        type: "PHONENUMBER_GET",
        payload: phoneNumber,
      });

      setTimeout(() => {
        if (!loading) {
          navigate("SigninOtp");
        }
      }, 3000);
    },
    [phoneNumber, loading, navigate, dispatch]
  );

  return {
    phoneNumberHandler,
    sendOtpHandler,
    phoneNumber,
  };
};

export default useSendOtpForm;
