import TextField from "../../../common/TextField";
import Loading from "../../../common/Loading";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthReducer";
import Stepper from "../Stepper";
import useSendOtpForm from "./useSendOtpForm";

const SendOTPForm = () => {
  const { loading } = useAuth();
  const navigate = useNavigate();

  const { phoneNumberHandler, sendOtpHandler, phoneNumber } =
    useSendOtpForm(navigate);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      <Stepper currentStep={1} />
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
