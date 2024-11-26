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

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "خطایی رخ داده است");
        }

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
              phone_number: action.phone_number,
              code: action.otp,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "خطایی رخ داده است");
        }

        const data = await response.json();
        toast.success("کد تایید با موفقیت ثبت شد");
        dispatch({ type: "USER_GET_SUCCESS", payload: data });
        console.log(data);
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "USER_GET_REJECT", error: errorMessage });
      }
    },
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
