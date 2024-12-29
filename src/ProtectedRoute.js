import { Navigate } from "react-router-dom";
import { useSignup } from "./context/signupProvider";

const StepProtectedRoute = ({ children, requiredStep }) => {
  const { currentStep } = useSignup();

  // حالت انتظار اگر currentStep هنوز لود نشده است
  if (currentStep === null) {
    return <div>Loading...</div>;
  }

  if (currentStep < requiredStep) {
    return <Navigate to={`/signIn/`} replace />;
  }

  return children;
};

export default StepProtectedRoute;
