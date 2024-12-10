import { Navigate } from "react-router-dom";
import { useSignup } from "./context/signupProvider";

const StepProtectedRoute = ({ children, requiredStep }) => {
  const { currentStep } = useSignup();

  if (currentStep < requiredStep) {
    return <Navigate to={`/signIn/`} replace />;
  }

  return children;
};

export default StepProtectedRoute;
