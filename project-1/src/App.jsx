import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployDashboard from "./components/Dashboard/employDashboard";
import AdminDashBoard from "./components/Dashboard/adminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localstoreage";
import { AutherContext } from "./context/autherProvider";

const App = () => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
  }, []);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const { authData, setauthData } = useContext(AutherContext);

  useEffect(() => {
    if (authData) {
      const loggedInUserString = localStorage.getItem("loggedInUser");
      if (loggedInUserString) {
        const loggedInUser = JSON.parse(loggedInUserString);
        setUser(loggedInUser.role);
        setloggedInUserData(loggedInUser.data);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid id-pass");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashBoard changeUser = {setUser}/>
      ) : user == "employee" ? (
        <EmployDashboard changeUser = {setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
