import AboutUs from "./pages/aboutUs";
import AllWorkerPage from "./pages/allWorkerPage";
import Home from "./pages/home";
import ServicesUs from "./pages/servicesUs";
import SignIn from "./pages/signIn";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },

  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/servicesPage",
    element: <ServicesUs />,
  },
  {
    path: "/allWorker",
    element: <AllWorkerPage />,
  },
];
export default routes;
