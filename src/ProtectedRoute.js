import React from "react";
import { Navigate } from "react-router-dom";
import { useStep } from "./context/signupProvider";

const StepProtectedRoute = ({ children, requiredStep }) => {
  const { currentStep } = useStep();

  if (currentStep < requiredStep) {
    return <Navigate to="/signIn" replace />;
  }

  return children;
};

export default StepProtectedRoute;
