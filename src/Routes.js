import ImageForm from "./components/auth/ImageForm/ImageForm";
import CheckOTPForm from "./components/auth/otpForm/CheckOTPForm";
import SendOTPForm from "./components/auth/otpForm/SendOTPForm";
import RegisterMain from "./components/auth/registerForm/RegisterMain";
import SignUpFinalPage from "./components/auth/submitInformation";
import AboutUs from "./pages/aboutUs";
import AllWorkerPage from "./pages/allWorkerPage";
import Home from "./pages/home";
import ServicesUs from "./pages/servicesUs";
import SignIn from "./pages/signIn";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },

  {
    path: "/servicesPage",
    element: <ServicesUs />,
  },
  {
    path: "/allWorker",
    element: <AllWorkerPage />,
  },
  {
    path: "/signIn/",
    element: <SignIn />,
    children: [
      { index: true, element: <SendOTPForm /> },
      { path: "SigninOtp", element: <CheckOTPForm /> },
      { path: "SigninRegister", element: <RegisterMain /> },
      {
        path: "SigninImage",
        element: <ImageForm />,
      },
      {
        path: "SigninFinal",
        element: <SignUpFinalPage />,
      },
    ],
  },
];
export default routes;
