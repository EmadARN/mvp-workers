import { createContext, useContext, useState, useEffect } from "react";

const SignupContext = createContext();

export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = parseInt(localStorage.getItem("currentStep") || "1", 10);
    console.log("Initial currentStep from localStorage:", savedStep);  // بررسی مقدار اولیه
    return savedStep;
  });

  useEffect(() => {
    // ذخیره currentStep به‌روز شده در localStorage
    console.log("Saving currentStep to localStorage:", currentStep);  // بررسی ذخیره مقدار
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  return (
    <SignupContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </SignupContext.Provider>
  );
};
