import toast from "react-hot-toast";
import { baseURL } from "./http";

export const asyncActionHandlers = {
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
        if (data.status === 200) {
          dispatch({ type: "OTP_POST_SUCCESS", payload: data.token });
          toast.success("کد تایید با موفقیت ثبت شد");
        } else {
          throw new Error("کد وارد شده اشتباه است");
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "OTP_POST_REJECT", error: errorMessage });
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
              Authorization: `Bearer ${action.payload.cookieValue}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload.formData),
          }
        );
        const data = await response.json();
        toast.success("اطلاعات با موفقیت ثبت شد");
        dispatch({ type: "FORM_POST_SUCCESS" });
        console.log("form success", data);
      } catch (error) {
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "FORM_POST_REJECT", error: errorMessage });
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
          body: action.payload.formData,
        });
        dispatch({ type: "UPLOAD_IMG_POST_SUCCESS" });
        toast.success("تصویر با موفقیت آپلود شد!");
        console.log(await response.json());
      } catch (error) {
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
            body: action.payload.formData,
          }
        );
        dispatch({ type: "CAPTURE_IMG_POST_SUCCESS" });
        toast.success("تصویر با موفقیت گرفته شد!");
        console.log(await response.json());
      } catch (error) {
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "CAPTURE_IMG_POST_REJECT", error: errorMessage });
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
            Authorization: `Bearer ${action.payload.cookieValue}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        dispatch({ type: "FORM_GET_SUCCESS", payload: data.user_inf });
        console.log("form success", data);
      } catch (error) {
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "FORM_GET_REJECTED", error: errorMessage });
      }
    },

  FINALIZATION_SIGNUP_GET:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "FINALIZATION_SIGNUP_GET_PENDING" });
      try {
        const response = await fetch(
          `${baseURL}/AddUserInf/finalization/signup/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${action.payload.cookieValue}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        dispatch({ type: "FINALIZATION_SIGNUP_GET_SUCCESS" });
        console.log("form success", data);
      } catch (error) {
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({
          type: "FINALIZATION_SIGNUP_GET_REJECTED",
          error: errorMessage,
        });
      }
    },

  USERS_TABLE:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "GET_USER_LIST_PENDING" });
      try {
        const response = await fetch(`${baseURL}/UserInf/user/list/`, {
          method: "GET",
          headers: {
            Authorization: "Barear 1",
          },
        });
        const data = await response.json();
        dispatch({ type: "GET_USER_LIST_SUCCESS", payload: data.data });
        console.log("tabel success", data);
      } catch (error) {
        const errorMessage = error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "GET_USER_LIST_REJECT", error: errorMessage });
      }
    },
};
