import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!props.data) {
      setUserName("Admin");
    } else {
      setUserName(props.data.name);
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('')
  };

  return (
    <div className="flex items-end justify-between bg-gray-800 p-6 rounded-xl shadow-md">
      <h1 className="text-3xl font-medium text-white leading-tight">
        Hello <br />
        <span className="text-5xl font-extrabold text-emerald-400 select-text">
          {userName} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-3 font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 cursor-pointer"
        aria-label="Log Out"
        type="button"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
