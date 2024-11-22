import AuthPage from "../components/auth/main";
import Stepper from "../components/auth/Stepper";
import Layout from "../container";

const SignIn = () => {
  return (
    <Layout>
      <Stepper />
      <AuthPage />
    </Layout>
  );
};

export default SignIn;
