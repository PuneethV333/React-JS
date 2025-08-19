import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { AutherContext } from "../context/autherProvider";

const allTask = () => {
  const {authData,setauthData} = useContext(AutherContext);
  const color = ["bg-blue-500", "bg-lime-600", "bg-yellow-600", "bg-amber-700"];
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-auto">
      {authData.employees.map((i, idx) => (
        <TaskCard key={idx} bgColor={color[idx % color.length]} details={i} />
      ))}
    </div>
  );
};

export default allTask;
