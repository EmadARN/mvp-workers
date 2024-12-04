import AboutUs from "./pages/aboutUs";
import AllWorkerPage from "./pages/allWorkerPage";
import SigninFinal from "./pages/auth/SigninFinal";
import SigninImageForm from "./pages/auth/SigninImageForm";
import SignInOtp from "./pages/auth/SignInOtp";
import SignInPhoneNumber from "./pages/auth/SignInPhoneNumber";
import SignInRegister from "./pages/auth/SignInRegister";
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
      { path: "/SigninPhone", element: <SignInPhoneNumber /> },
      { path: "/SigninOtp", element: <SignInOtp /> },
      { path: "/SigninRegister", element: <SignInRegister /> },
      {
        path: "/SigninImage",
        element: <SigninImageForm />,
      },
      {
        path: "/SigninFinal",
        element: <SigninFinal />,
      },
    ],
  },
];
export default routes;
