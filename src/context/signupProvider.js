import { createContext, useContext, useState, useEffect } from "react";

const SignupContext = createContext();

export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(() => {
    // مقدار اولیه از localStorage
    return parseInt(localStorage.getItem("currentStep") || "1", 10);
  });

  useEffect(() => {
    // ذخیره کردن currentStep در localStorage
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  return (
    <SignupContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </SignupContext.Provider>
  );
};
