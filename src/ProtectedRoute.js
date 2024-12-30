import { Navigate } from "react-router-dom";
import { useSignup } from "./context/signupProvider";

const StepProtectedRoute = ({ children, requiredStep }) => {
  const { currentStep } = useSignup();
  console.log("Current Step:", currentStep);
  if (currentStep < requiredStep) {
    return <Navigate to={`/signIn/`} replace />;
  }

  // اگر در مرحله‌ای که باید باشد، محتوا را نمایش می‌دهیم
  return children;
};

export default StepProtectedRoute;
