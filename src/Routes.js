import ImageForm from "./components/auth/ImageForm/ImageForm";
import CheckOTPForm from "./components/auth/otpForm/CheckOTPForm";
import SendPhoneNumberForm from "./components/auth/otpForm/SendPhoneNumberForm";
import RegisterMain from "./components/auth/registerForm/RegisterMain";
import SignUpFinalPage from "./components/auth/submitInformation";
import ServicesPage from "./components/ourServices/ServicesPage";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import ServicesUs from "./pages/servicesUs";
import SignIn from "./pages/signIn";
import StepProtectedRoute from "./ProtectedRoute";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },

  {
    path: "/servicesPage",
    element: <ServicesUs />,
  },

  {
    path: "/services",
    children: [
      {
        path: "homeService",
        element: <ServicesPage pageType="home" />,
      },
      {
        path: "construction",
        element: <ServicesPage pageType="construction" />,
      },
      {
        path: "allWorker",
        element: <ServicesPage pageType="allWorker" />,
      },
    ],
  },

  {
    path: "/signIn/",
    element: <SignIn />,
    children: [
      {
        index: true,
        element: (
          <StepProtectedRoute requiredStep={1}>
            <SendPhoneNumberForm />
          </StepProtectedRoute>
        ),
      },
      {
        path: "SigninOtp",
        element: (
          <StepProtectedRoute requiredStep={2}>
            <CheckOTPForm />
          </StepProtectedRoute>
        ),
      },
      {
        path: "SigninRegister",
        element: (
          <StepProtectedRoute requiredStep={3}>
            <RegisterMain />
          </StepProtectedRoute>
        ),
      },
      {
        path: "SigninImage",
        element: (
          <StepProtectedRoute requiredStep={4}>
            <ImageForm />
          </StepProtectedRoute>
        ),
      },
      {
        path: "SigninFinal",
        element: (
          <StepProtectedRoute requiredStep={5}>
            <SignUpFinalPage />
          </StepProtectedRoute>
        ),
      },
    ],
  },
];
export default routes;
