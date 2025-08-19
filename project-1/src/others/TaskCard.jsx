import React from "react";

const TaskCard = ({ bgColor, details }) => (
  <div
    className={`${bgColor} grid grid-cols-5 mb-2 items-center rounded-lg shadow-md max-w-3xl mx-auto py-3 px-6 cursor-pointer text-sm sm:text-base`}
  >
    <h2 className="font-semibold text-white">{details.name}</h2>
    <h2 className="text-green-400 text-center">{details.taskCount.completed}</h2>
    <h2 className="text-blue-400 text-center">{details.taskCount.accepted}</h2>
    <h2 className="text-yellow-400 text-center">{details.taskCount.newtask}</h2>
    <h2 className="text-red-400 text-center">{details.taskCount.failed}</h2>
  </div>
);

export default TaskCard;
