import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../Utils/localstoreage";

// Create context
export const AutherContext = createContext();

const AutherProvider = ({ children }) => {
  const [authData, setauthData] = useState({
    employees: [],
  });

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
