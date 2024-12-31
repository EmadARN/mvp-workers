import React, { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1); // وضعیت قدم فعلی

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <StepContext.Provider value={{ currentStep, goToStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => useContext(StepContext);
