import { useNavigate } from "react-router-dom";
import SubmitInputs from "./SubmitInputs";
import Stepper from "../Stepper";
import { useCookie } from "../../../hooks/useCookies";
import { useAuthActions } from "../../../context/AuthReducer";
import { useFormState } from "../../../context/StateContext";
import CustomeBtn from "../../../common/CustomeBtn";
import { useState } from "react";
import Loading from "../../../common/Loading";

const SignUpFinalPage = () => {
  const navigate = useNavigate();
  const dispatch = useAuthActions();
  const [cookieValue, removeCookie] = useCookie("auth-token");
  const { setFormState } = useFormState();
  const [loading, setLoading] = useState(false);
  const handleButtonClick = async () => {
    if (!loading) {
      setLoading(true);
    }
    try {
      await dispatch({
        type: "FINALIZATION_SIGNUP_GET",
        payload: { cookieValue },
      });
      removeCookie();
      setTimeout(() => {
        navigate("/");
      }, 5100);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  const editButtonClick = () => {
    setFormState(true);
    navigate("/signIn/SigninRegister");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 my-28 md:my-10">
      <Stepper currentStep={4} />

      <div className="container mx-auto text-center w-full mb-5">
        <SubmitInputs />
        <p className="text-gray-600 text-lg font-bold mb-4">
          برای ثبت نهایی مشخصات خود را بررسی کرده و سپس بر روی دکمه ثبت اطلاعات
          حساب کلیک نمایید.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:gap-x-4">
        <CustomeBtn
          clickHandler={editButtonClick}
          content="ویرایش"
          w="40"
          pb={0}
        />
        <CustomeBtn
          clickHandler={handleButtonClick}
          content={loading ? <Loading /> : "ثپت اطلاعات حساب"}
          w="60"
        />
      </div>
    </div>
  );
};

export default SignUpFinalPage;
