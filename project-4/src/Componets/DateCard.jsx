import React, { useState, useEffect } from "react";

const DateCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const newDate = new Date();
      setTime(
        `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()} - ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
      );
    };

    updateTime(); 
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-center text-white font-bold text-4xl mb-2">{time}</h1>
    </div>
  );
};

export default DateCard;
