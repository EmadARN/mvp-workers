import { useNavigate } from "react-router-dom";
import SubmitInputs from "./SubmitInputs";
import Stepper from "../Stepper";
import { useCookie } from "../../../hooks/useCookies";
import { useAuthActions } from "../../../context/AuthReducer";
import { useFormState } from "../../../context/StateContext";

const SignUpFinalPage = () => {
  const navigate = useNavigate();
  const dispatch = useAuthActions();
  const [cookieValue] = useCookie("auth-token");
  const {setFormState} = useFormState()

 
  

  const handleButtonClick = () => {
   
      dispatch({
        type: "FINALIZATION_SIGNUP_GET",
        payload: { cookieValue },
      });
      navigate("/");
     
  };

  const editButtonClick = ()=>{
    setFormState(true)
    navigate("/signIn/SigninRegister");
  }

  return (
    <div className="mt-8 w-[100%]">
      <Stepper currentStep={4} />

      <div className="container mx-auto text-center w-full mb-5">
        <SubmitInputs />
        <p className="text-gray-600 text-lg font-bold mb-4">
          برای ثبت نهایی مشخصات خود را بررسی کرده و سپس بر روی دکمه ثبت اطلاعات
          حساب کلیک نمایید.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => editButtonClick()}
          className="ml-5 transition duration-500 bg-main-1 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-800 hover:text-main-1 hover:shadow-xl"
        >
          ویرایش
        </button>

        <button
          onClick={() => handleButtonClick()}
          className="transition duration-500 bg-main-1 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-800 hover:text-main-1 hover:shadow-xl"
        >
          ثبت اطلاعات حساب
        </button>
      </div>
    </div>
  );
};

export default SignUpFinalPage;
