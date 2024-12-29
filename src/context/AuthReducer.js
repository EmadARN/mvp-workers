import { createContext, useContext } from "react";
import { useReducerAsync } from "use-reducer-async";
import { asyncActionHandlers } from "../service/authSignIn";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  phone_number: "",
  loading: false,
  error: null,
  token: "",
  userInfo: [],
  userInTable: [],
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
        token: "",
        error: action.error,
        loading: false,
      };
    case "FORM_POST_PENDING":
      return { ...state, error: null, loading: true };
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

    case "UPLOAD_IMG_POST_PENDING":
      return { ...state, error: null, loading: true };
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
      return { ...state, error: null, loading: true };
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

    case "FINALIZATION_SIGNUP_GET_PENDING":
      return { ...state, error: null, loading: true };
    case "FINALIZATION_SIGNUP_GET_SUCCESS":
      return {
        ...state,
        error: null,
        loading: false,
      };

    case "FINALIZATION_SIGNUP_GET_REJECT":
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case "GET_USER_LIST_PENDING":
      return {
        ...state,
        userInTable: null,
        error: action.error,
        loading: true,
      };
    case "GET_USER_LIST_SUCCESS":
      return {
        ...state,
        userInTable: action.payload,
        error: action.error,
        loading: false,
      };
    case "GET_USER_LIST_REJECT":
      return {
        ...state,
        userInTable: null,
        error: action.error,
        loading: false,
      };
    default:
      return state;
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
