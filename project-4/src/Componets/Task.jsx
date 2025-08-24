import React from "react";
import TaskCard from "./TaskCard.jsx";

const Task = ({data,setData}) => {
    const ClearAll = () => {
        setData([])
    }
  return (
    <div>
      <div className="w-2xl mx-auto px-4 py-6 grid gap-4">
        {data.map((i, idx) => (
          <TaskCard key={idx} details={i} setdetails = {setData} data = {data}/>
        ))}
      </div>
      <div className="flex items-center justify-center">
      <button className="bg-red-400 text-white px-4 py-2 cursor-pointer hover:bg-red-200" onClick={ClearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default Task;
