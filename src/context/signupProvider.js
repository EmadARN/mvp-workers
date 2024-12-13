import React, { createContext, useContext, useState } from "react";

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <SignupContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => useContext(SignupContext);
