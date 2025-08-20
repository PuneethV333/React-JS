import React, { useEffect, useState } from "react";

const MainCard = ({ Weatherdata }) => {
  if (!Weatherdata) {
    return <h2 className="text-center text-gray-600">Loading...</h2>;
  }
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const { main, name, weather, wind, sys } = Weatherdata;
  const [countryName, SetCountryName] = useState("India");

  useEffect(() => {
    if (sys?.country) {
      const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
        type: "region",
      });
      SetCountryName(regionNamesInEnglish.of(sys.country));
    }
  }, [sys?.country]);

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-[#222] p-5 ">
      <h1 className="text-5xl text-[#222] ">
        {name},{countryName}
      </h1>
      <p className=" text-[#666]">
        {week[now.getDay()]}, {month[now.getMonth()]} {now.getDate()}{" "}
        {now.getFullYear()} at {time}
      </p>
      <div className="bg-black text-white w-36 rounded-full cursor-pointer px-4 py-2 text-center">
        <h3>{weather[0].description}</h3>
      </div>
      <div>
        <img
          className="w-15 h-15"
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </div>
      <h2 className="text-3xl text-[#222]">{main.temp}°C</h2>
      <p className="text-xl text-[#222]">
        Min: {main.temp_min}°C Max: {main.temp_max}°C
      </p>

      <div className="grid grid-cols-2 gap-6 w-full mt-6">
        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2a2 2 0 00-2 2v8.5A4.5 4.5 0 1014 15V4a2 2 0 00-2-2zm0 19a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
              fill="#222"
            />
          </svg>
          <div>
            <p className="text-gray-600 text-sm">Feels Like</p>
            <p className="font-semibold text-lg">{main.feels_like}°C</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C12 2 7 9 7 13a5 5 0 0010 0c0-4-5-11-5-11z"
              fill="#222"
            />
          </svg>
          <div>
            <p className="text-gray-600 text-sm">Humidity</p>
            <p className="font-semibold text-lg">{main.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#222"
              strokeWidth="2"
              fill="none"
            />
            <path d="M12 12v-4m0 4l3 3" stroke="#222" strokeWidth="2" />
          </svg>
          <div>
            <p className="text-gray-600 text-sm">Pressure</p>
            <p className="font-semibold text-lg">{main.pressure} hPa</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 12h16M9 7c0-2.5 3-2.5 3 0M9 17c0 2.5 3 2.5 3 0"
              stroke="#222"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div>
            <p className="text-gray-600 text-sm">Wind</p>
            <p className="font-semibold text-lg">{wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
