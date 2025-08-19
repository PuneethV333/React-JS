import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    handleLogin(email, pass);
    setEmail("");
    setPass("");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
      <div className="border-4 border-emerald-600 rounded-3xl shadow-lg bg-gray-800 bg-opacity-70 p-12 max-w-md w-full">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={formHandle}
        >
          <input
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-xl outline-none bg-transparent rounded-full w-full py-3 px-6 border-emerald-600 border-2 mb-6 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            type="email"
            placeholder="Enter your Email"
            id="email"
            required
          />
          <input
            autoComplete="off"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="text-xl outline-none bg-transparent rounded-full w-full py-3 px-6 border-emerald-600 border-2 mb-6 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            type="password"
            placeholder="Enter your password"
            id="password"
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 cursor-pointer border-none font-semibold rounded-full text-lg w-full py-3 px-6 hover:bg-emerald-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!email || !pass}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
