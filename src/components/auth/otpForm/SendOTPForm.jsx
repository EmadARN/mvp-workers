import { useState } from "react";
import TextField from "../../../common/TextField";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import Loading from "../../../common/Loading";

const SendOTPForm = ({ setStep }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { loading } = useAuth();
  const dispatch = useAuthActions();
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
        setStep(2);
      }
    }, 3000);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      <form className="space-y-10" onSubmit={sendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={phoneNumberHandler}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn w-full sm:w-[70%] md:w-[50%] lg:w-[40%] bg-main-1 rounded-md text-main-2 py-2 transition-all duration-300"
          >
            {loading ? <Loading /> : "ارسال کد تایید"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendOTPForm;
