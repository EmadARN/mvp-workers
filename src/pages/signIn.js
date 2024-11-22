import AuthPage from "../components/auth/main";
import Stepper from "../components/auth/Stepper";
import Layout from "../container";
import RightBar from "../container/RightBar";

const SignIn = () => {
  return (
    <Layout signinBtnDisplay="invisible">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <RightBar />
        </div>
        <div className="col-span-3 md:col-span-4">
          <Stepper />
          <AuthPage />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
