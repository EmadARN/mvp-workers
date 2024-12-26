import TextField from "../../../common/TextField";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../../../context/AuthReducer";
import Stepper from "../Stepper";
import CustomeBtn from "../../../common/CustomeBtn";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSignup } from "../../../context/signupProvider";

const SendOTPForm = () => {
  const { loading } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAuthActions();
  const { setCurrentStep } = useSignup();

  // تعریف اعتبارسنجی با Yup
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد")
      .required("شماره موبایل اجباری است"),
  });

  const sendOtpHandler = async (values) => {
    dispatch({
      type: "PHONENUMBER_GET",
      payload: values.phoneNumber,
    });

    setTimeout(() => {
      if (!loading) {
        setCurrentStep(2);
        navigate("SigninOtp");
      }
    }, 3000);
  };

  return (
    <div  className="px-4 sm:px-6 md:px-8 lg:px-10 ">
      <Stepper currentStep={1} />
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={validationSchema}
        onSubmit={sendOtpHandler}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="space-y-10">
            <div className="w-full sm:w-96 mx-auto ">
              <Field
              className={"w-full px-4 py-2 border rounded-md border-black" 
              
              }
                name="phoneNumber"
                as={TextField}
                label="شماره موبایل"
                error={touched.phoneNumber && errors.phoneNumber}
              />
            </div>
            <div className="flex justify-center">
              <CustomeBtn
                loading={loading}
                content="ارسال تایید کد"
                type="submit"
                disabled={!dirty || !isValid} // دکمه غیرفعال در صورت نادرست بودن فرم
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendOTPForm;
