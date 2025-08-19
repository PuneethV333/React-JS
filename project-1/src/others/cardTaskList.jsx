import React from 'react';

const CardTaskList = ({ color, text, count }) => {
  return (
    <div className={`${color} rounded-lg p-6 shadow-md w-60 flex flex-col items-center justify-center`}>
      <h1 className="text-5xl font-bold mb-2">
        {count}
      </h1>
      <span className="text-2xl font-semibold">{text}</span>
    </div>
  );
};

export default CardTaskList;
