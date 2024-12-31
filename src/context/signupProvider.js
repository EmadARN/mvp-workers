import { createContext, useContext, useState, useEffect } from "react";

const SignupContext = createContext();

export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = parseInt(localStorage.getItem("currentStep") || "1", 10);
    return savedStep;
  });

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  return (
    <SignupContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </SignupContext.Provider>
  );
};
