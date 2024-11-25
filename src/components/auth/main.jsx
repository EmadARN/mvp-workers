import React from "react";
import SendOTPForm from "./otpForm/SendOTPForm";
import CheckOTPForm from "./otpForm/CheckOTPForm";
import RulesDetails from "./uploadImageForm/RulesDetails";
import RegisterMain from "./registerForm/RegisterMain";
import SignUpFinalPage from "./submitInformation/SubmitInfo";

const RESEND_TIME = 90;

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [step, setStep] = React.useState(1);
  const [otp, setOtp] = React.useState("");
  const [time, setTime] = React.useState(RESEND_TIME);

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


  
  React.useEffect(() => {
    const timer =
      time > 0 && setInterval(() => setTime((time) => time - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
          />
        );

        case 3:
          return(
            <RegisterMain handleSubmit={handleSubmit}/>
          )
      case 4:
        return <RulesDetails  confirmCameraHandler={confirmCameraHandler}/>;

        case 5:
          return( 
          <SignUpFinalPage  />
        )
     default: return null
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
};

export default AuthPage;
