import toast from "react-hot-toast";
import { API_URLS } from "./http";

export const asyncActionHandlers = {
  PHONENUMBER_GET:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "PHONENUMBER_GET_PENDING" });
      try {
        const response = await fetch(
          API_URLS.signupPhoneNumber(action.payload)
        );
        await response.json();
        toast.success("شماره همراه با موفقیت ثبت شد");
        dispatch({ type: "PHONENUMBER_GET_SUCCESS", payload: action.payload });
      } catch (error) {
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
        const response = await fetch(API_URLS.validateOTP, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone_number: action.payload.phoneNumber,
            code: action.payload.otp,
          }),
        });
        const data = await response.json();
        if (data.status === 200) {
          dispatch({ type: "OTP_POST_SUCCESS", payload: data.token });
          toast.success("کد تایید با موفقیت ثبت شد");
        } else {
          toast.error("کد وارد شده صحیح نمیباشد");
        }
      } catch (error) {
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
        const response = await fetch(API_URLS.addUserInfo, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${action.payload.cookieValue}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload.formData),
        });
        await response.json();
        toast.success("اطلاعات با موفقیت ثبت شد");
        dispatch({ type: "FORM_POST_SUCCESS" });
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
        const response = await fetch(API_URLS.uploadImage, {
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
        const response = await fetch(API_URLS.uploadCameraImage, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${action.payload.token}`,
          },
          body: action.payload.formData,
        });
        dispatch({ type: "CAPTURE_IMG_POST_SUCCESS" });
        toast.success("تصویر با موفقیت گرفته شد!");
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
        const response = await fetch(API_URLS.getUserInfo, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${action.payload.cookieValue}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        dispatch({ type: "FORM_GET_SUCCESS", payload: data.user_inf });
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
        const response = await fetch(API_URLS.finalizeSignup, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${action.payload.cookieValue}`,
            "Content-Type": "application/json",
          },
        });
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
      try {
        const response = await fetch(API_URLS.getUserList, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${action.token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        dispatch({ type: "GET_USER_LIST_SUCCESS", payload: data.data });
        console.log("لیست کاربران با موفقیت دریافت شد:", data);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || error.message || "خطایی رخ داده است";
        toast.error(errorMessage);
        dispatch({ type: "GET_USER_LIST_REJECT", error: errorMessage });
      }
    },
};
