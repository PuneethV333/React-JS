import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../Utils/localstoreage";

// Create context
export const AutherContext = createContext();

const AutherProvider = ({ children }) => {
  // Initial state with employees array to prevent "undefined"
  const [authData, setauthData] = useState({
    employees: [],
  });

  // Load from local storage on mount
  useEffect(() => {
    const storedData = getLocalStorage();

    if (storedData && storedData.employees) {
      setauthData(storedData);
    }
  }, []);
  useEffect(() => {
  localStorage.setItem("employees", JSON.stringify(authData.employees));
}, [authData]);


  return (
    <AutherContext.Provider value={{ authData, setauthData }}>
      {children}
    </AutherContext.Provider>
  );
};

export default AutherProvider;
