import React from "react";

const Card = ({ bgCol, detail }) => {
  return (
    <div
      className={`w-72 sm:w-64 md:w-80 min-h-[14rem] sm:min-h-[10rem] md:min-h-[20rem]
      ${bgCol} border border-gray-300 rounded-2xl flex flex-col p-6
      flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="bg-red-600 px-4 py-1 rounded-full text-sm sm:text-base font-semibold text-white select-none whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%]">
          {detail.category}
        </h3>
        <h4 className="text-sm sm:text-base text-gray-700 font-medium select-none whitespace-nowrap overflow-hidden text-ellipsis max-w-[35%] text-right  ">
          {detail.date}
        </h4>
      </div>

      <h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900 text-pretty"
      >
        {detail.title}
      </h2>

      <p
        className="text-sm sm:text-base text-gray-700 flex-grow mb-4 text-wrap">
        {detail.description}
      </p>



      

      <h1
        className={`text-lg sm:text-xl md:text-2xl font-semibold mb-0 flex-shrink-0
          ${
            detail.accepted
              ? "text-green-600"
              : detail.failed
              ? "text-red-600"
              : detail.completed
              ? "text-blue-600"
              : "text-yellow-600"
          }`}
      >
        {detail.accepted
          ? "Accepted"
          : detail.failed
          ? "Failed"
          : detail.completed
          ? "Completed"
          : "New Task"}
      </h1>
    </div>
  );
};

export default Card;
