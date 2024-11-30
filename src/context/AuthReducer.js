import { createContext, useContext } from "react";
import { useReducerAsync } from "use-reducer-async";
import { baseURL } from "../service/http";
import toast from "react-hot-toast";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  phone_number: "",
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_GET_PENDING":
      return { ...state, phone_number: "", error: null, loading: true };
    case "USER_GET_SUCCESS":
      return {
        ...state,
        phone_number: action.payload,
        error: null,
        loading: false,
      };
    case "USER_GET_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,
        phone_number: "",
      };

    default:
      return state;
  }
};

const asyncActionHandlers = {
  PHONENUMBER_GET:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "USER_GET_PENDING" });
      try {
        const response = await fetch(
          `${baseURL}/Auth/signup/phone_number=${action.payload}/`
        );

        const data = await response.json();
        toast.success("شماره همراه با موفقیت ثبت شد");
        dispatch({ type: "USER_GET_SUCCESS", payload: action.payload });
        console.log(data);
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "USER_GET_REJECT", error: errorMessage });
      }
    },
    OTP_POST:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "USER_GET_PENDING" });
      try {
        const response = await fetch(
          `${baseURL}/Auth/validate/signup/phone_number/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone_number: action.payload.phoneNumber,
              code: action.payload.otp,
            }),
          }
        );
  
        const data = await response.json();
  
       
  
        toast.success("کد تایید با موفقیت ثبت شد");
        dispatch({ type: "USER_GET_SUCCESS" });
        console.log(data);
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "USER_GET_REJECT", error: errorMessage });
      }
    },
  
  IMG_POST:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "USER_GET_PENDING" });
      try {
        const formData = new FormData();
        formData.append("image", action.payload.formData);

        const response = await fetch(
          `${baseURL}/AddUserInf/upload/image/camera/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${action.payload.phoneNumber}`,
            },
            body: formData,
          }
        );

        const data = await response.json();
        toast.success("عکس با موفقیت ثبت شد");
        dispatch({ type: "USER_GET_SUCCESS" });
        console.log(data);
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "USER_GET_REJECT", error: errorMessage });
      }
    },
    FORM_POST:
    ({dispatch})=>async (action) =>{
    
      
      dispatch({ type: "USER_GET_PENDING" });
      try{
        const response = await fetch(
          `${baseURL}/AddUserInf/send/first_level/inf/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: action.payload.formData.first_name,
              last_name: action.payload.formData.last_name,
              work_experience:action.payload.formData.work_experience ,
              city: action.payload.formData.city,
              job: action.payload.formData.job
            }),
          }
        );

        const data = await response.json();
        toast.success("اطلاعات با موفقیت ثبت شد");
        dispatch({ type: "USER_GET_SUCCESS" });
        console.log('form success',data);
      }
      catch(error){
        console.log('form error',error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "USER_GET_REJECT", error: errorMessage });
        
      }
    }
};

export const AuthReducer = ({ children }) => {
  const [state, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
