import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import { useCookie } from "../../../hooks/useCookies";
import { fields } from "../../../constants";
import { includeObj } from "../../../utils/objectUtils";
import toast from "react-hot-toast";
import { useFormState } from "../../../context/StateContext";


export const useRegisterLogic = () => {


  

  const {formState} = useFormState()

  console.log('ffff',formState);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    work_experience: "",
    city: "زنجان",
    job: "خدمات منزل",
  });

  const navigate = useNavigate();
  const [cookieValue] = useCookie("auth-token");
  const dispatch = useAuthActions();
  const { userInfo } = useAuth();

  const includesKey = [
    "first_name",
    "last_name",
    "work_experience",
    "city",
    "job",
  ];

  useEffect(() => {
    if (userInfo && formState) {
      const filteredData = includeObj(userInfo, includesKey);
      setFormData((prevData) => ({ ...prevData, ...filteredData }));
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch({
      type: "FORM_GET",
      payload: { cookieValue },
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      dispatch({
        type: "FORM_POST",
        payload: { formData, cookieValue },
      });
      toast.success("اطلاعات با موفقیت ثبت شد!");
      {formState ?navigate(`/signIn/SigninFinal`):navigate(`/signIn/SigninImage`)}
    } catch (error) {
      toast.error("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    fields,
    handleChange,
    handleSubmit,
  };
};
