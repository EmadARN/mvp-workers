import { createContext, useContext, useState } from "react";

export const FormState = createContext();

const StateContext = ({ children }) => {
  const [formState, setFormState] = useState(false);

  return (
    <FormState.Provider value={{ formState, setFormState }}>
      {children}
    </FormState.Provider>
  );
};

export default StateContext;

export const useFormState = () => useContext(FormState);
