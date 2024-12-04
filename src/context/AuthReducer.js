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
  token: "",
  userInfo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PHONENUMBER_GET_PENDING":
      return { ...state, phone_number: "", error: null, loading: true };
    case "PHONENUMBER_GET_SUCCESS":
      return {
        ...state,
        phone_number: action.payload,
        error: null,
        loading: false,
      };
    case "PHONENUMBER_GET_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,
        phone_number: "",
      };

    case "OTP-POST_PENDING":
      return { ...state, token: "", error: null, loading: true };
    case "OTP_POST_SUCCESS":
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      };
    case "OTP_POST_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,

        token: "",
      };

    case "UPLOAD_IMG_POST_PENDING":
      return { ...state, token: "", error: null, loading: true };
    case "UPLOAD_IMG_POST_SUCCESS":
      return {
        ...state,
        error: null,
        loading: false,
      };
    case "UPLOAD_IMG_POST_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case "CAPTURE_IMG_POST_PENDING":
      return { ...state, token: "", error: null, loading: true };
    case "CAPTURE_IMG_POST_SUCCESS":
      return {
        ...state,
        error: null,
        loading: false,
      };
    case "CAPTURE_IMG_POST_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case "FORM_POST_PENDING":
      return { ...state, token: "", error: null, loading: true };
    case "FORM_POST_SUCCESS":
      return {
        ...state,

        error: null,
        loading: false,
      };
    case "FORM_POST_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case "FORM_GET_PENDING":
      return { ...state, userInfo: null, error: null, loading: true };
    case "FORM_GET_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
        error: null,
        loading: false,
      };

    case "FORM_GET_REJECT":
      return {
        ...state,
        userInfo: null,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

const asyncActionHandlers = {
  PHONENUMBER_GET:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "PHONENUMBER_GET_PENDING" });
      try {
        const response = await fetch(
          `${baseURL}/Auth/signup/phone_number=${action.payload}/`
        );

        const data = await response.json();
        toast.success("شماره همراه با موفقیت ثبت شد");
        dispatch({ type: "PHONENUMBER_GET_SUCCESS", payload: action.payload });
        console.log(data);
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "PHONENUMBER_GET_REJECT", error: errorMessage });
      }
    },
  OTP_POST:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "OTP_POST_PENDING" });
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
        if (data.token) {
          dispatch({ type: "OTP_POST_SUCCESS", payload: data.token });
        }

        toast.success("کد تایید با موفقیت ثبت شد");

        console.log(data);
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "OTP_POST_REJECT", error: errorMessage });
      }
    },

  UPLOAD_IMG_POST:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "UPLOAD_IMG_POST_PENDING" });
      try {
        const response = await fetch(`${baseURL}/AddUserInf/upload/image/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${action.payload.token}`,
          },
          body: action.payload.formData, // ارسال فرم‌داده
        });

        dispatch({ type: "UPLOAD_IMG_POST_SUCCESS" });
        toast.success("تصویر با موفقیت آپلود شد!");
        console.log(await response.json());
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "UPLOAD_IMG_POST_REJECT", error: errorMessage });
      }
    },
  CAPTURE_IMG_POST:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "CAPTURE_IMG_POST_PENDING" });
      try {
        const response = await fetch(
          `${baseURL}/AddUserInf/upload/image/camera/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${action.payload.token}`,
            },
            body: action.payload.formData, // ارسال فرم‌داده
          }
        );

        dispatch({ type: "CAPTURE_IMG_POST_SUCCESS" });
        toast.success("تصویر با موفقیت گرفته شد!");
        console.log(await response.json());
      } catch (error) {
        console.log('image',error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "CAPTURE_IMG_POST_REJECT", error: errorMessage });
      }
    },
  FORM_POST:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "FORM_POST_PENDING" });
      try {
        const response = await fetch(
          `${baseURL}/AddUserInf/send/first_level/inf/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${action.payload.cookieValue}`, // اصلاح Bearer
              "Content-Type": "application/json", // اضافه کردن هدر Content-Type
            },
            body: JSON.stringify({
              first_name: action.payload.formData.first_name,
              last_name: action.payload.formData.last_name,
              work_experience: action.payload.formData.work_experience,
              city: action.payload.formData.city,
              job: action.payload.formData.job,
            }),
          }
        );

        const data = await response.json();
        toast.success("اطلاعات با موفقیت ثبت شد");
        dispatch({ type: "FORM_POST_SUCSESS" });
        console.log("form success", data);
      } catch (error) {
        console.log("form error", error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "FORM_POST_REJECTED", error: errorMessage });
      }
    },

  FORM_GET:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "FORM_GET_PENDING" });
      try {
        const response = await fetch(`${baseURL}/UserInf/account/inf/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${action.payload.cookieValue}`, // اصلاح Bearer
            "Content-Type": "application/json", // اضافه کردن هدر Content-Type
          },
        });

        const data = await response.json();

        dispatch({ type: "FORM_GET_SUCCESS", payload: data.user_inf });

        console.log("form success", data);
      } catch (error) {
        console.log("form error", error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "FORM_GET_REJECTED", error: errorMessage });
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
