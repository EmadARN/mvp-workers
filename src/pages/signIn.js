import Layout from "../container";
import { Outlet, useLocation } from "react-router-dom";

const SignIn = () => {

  return (
    <Layout signinBtnDisplay="invisible">
      <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100 px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 ">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
