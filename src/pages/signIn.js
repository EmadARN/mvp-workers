import Stepper from "../components/auth/Stepper";
import Layout from "../container";
import RightBar from "../container/RightBar";
import { Outlet } from "react-router-dom";

const SignIn = () => {
  return (
    <Layout signinBtnDisplay="invisible">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar />
        </div>
        <div className="col-span-3 md:col-span-4">
          <Stepper />
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
