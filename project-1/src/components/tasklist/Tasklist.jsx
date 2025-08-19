import React from "react";
import Card from "../../others/Card";

const Tasklist = ({ data }) => {
  const color = ["bg-blue-500", "bg-lime-600", "bg-yellow-600", "bg-amber-700"];

  return (
    <div className="w-full mt-20 px-4 md:px-10">
      <div
        id="tasklist"
        className="
          md:flex-shrink-0 
          md:h-[55vh] 
          md:flex 
          md:flex-row 
          md:items-center 
          md:gap-6 
          md:overflow-x-auto 
          md:whitespace-nowrap 
          md:p-4 
          md:scrollbar-thin 
          md:scrollbar-thumb-emerald-500 
          md:scrollbar-track-gray-800 
          md:rounded-xl
          bg-gray-900
          shadow-lg
          overflow-hidden
        "
      >
        {data.tasks.map((i, idx) => (
          <Card bgCol={color[idx % color.length]} detail={i} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Tasklist;
