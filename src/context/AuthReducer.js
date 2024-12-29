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

const handlePending = (state) => ({ ...state, loading: true, error: null });
const handleSuccess = (state, payload) => ({
  ...state,
  loading: false,
  ...payload,
});
const handleReject = (state, error) => ({ ...state, loading: false, error });

const reducer = (state, action) => {
  switch (action.type) {
    case "PHONENUMBER_GET_PENDING":
    case "OTP_POST_PENDING":
    case "FORM_POST_PENDING":
    case "UPLOAD_IMG_POST_PENDING":
    case "CAPTURE_IMG_POST_PENDING":
    case "FORM_GET_PENDING":
    case "FINALIZATION_SIGNUP_GET_PENDING":
    case "GET_USER_LIST_PENDING":
      return handlePending(state);

    case "PHONENUMBER_GET_SUCCESS":
      return handleSuccess(state, { phone_number: action.payload });
    case "OTP_POST_SUCCESS":
      return handleSuccess(state, { token: action.payload });
    case "FORM_GET_SUCCESS":
      return handleSuccess(state, { userInfo: action.payload });
    case "GET_USER_LIST_SUCCESS":
      return handleSuccess(state, { userInTable: action.payload });

    case "PHONENUMBER_GET_REJECT":
    case "OTP_POST_REJECT":
    case "FORM_POST_REJECT":
    case "UPLOAD_IMG_POST_REJECT":
    case "CAPTURE_IMG_POST_REJECT":
    case "FORM_GET_REJECT":
    case "FINALIZATION_SIGNUP_GET_REJECT":
    case "GET_USER_LIST_REJECT":
      return handleReject(state, action.error);

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
