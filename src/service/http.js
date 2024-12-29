export const baseURL = "http://127.0.0.1:5000";

export const API_URLS = {
  signupPhoneNumber: (phoneNumber) =>
    `${baseURL}/Auth/signup/phone_number=${phoneNumber}/`,
  validateOTP: `${baseURL}/Auth/validate/signup/phone_number/`,
  addUserInfo: `${baseURL}/AddUserInf/send/first_level/inf/`,
  uploadImage: `${baseURL}/AddUserInf/upload/image/`,
  uploadCameraImage: `${baseURL}/AddUserInf/upload/image/camera/`,
  getUserInfo: `${baseURL}/UserInf/account/inf/`,
  finalizeSignup: `${baseURL}/AddUserInf/finalization/signup/`,
  getUserList: `${baseURL}/UserInf/user/list/`,
};
