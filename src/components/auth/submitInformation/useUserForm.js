import { useEffect, useState, useMemo } from "react";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import { useCookie } from "../../../hooks/useCookies";

const useUserForm = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    job: "",
    work_experience: "",
    profile_image: "",
    city: "",
    phone_number: "",
  });

  const [cookieValue] = useCookie("auth-token");
  const { loading, userInfo } = useAuth();
  const dispatch = useAuthActions();

  // Effect to fetch data when cookie changes
  useEffect(() => {
    if (cookieValue) {
      dispatch({
        type: "FORM_GET",
        payload: { cookieValue },
      });
    }
  }, [cookieValue, dispatch]);

  // Function to handle changes to user fields
  const handleChange = (field) => (e) =>
    setUser((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));

  // Memoized user data to avoid unnecessary re-renders
  const userData = useMemo(
    () => ({
      first_name: userInfo?.first_name || "",
      last_name: userInfo?.last_name || "",
      job: userInfo?.job || "",
      work_experience: userInfo?.work_experience || "",
      city: userInfo?.city || "",
      profile_image: userInfo?.profile_image || "",
    }),
    [userInfo]
  );

  return { user, handleChange, userData, loading };
};

export default useUserForm;
