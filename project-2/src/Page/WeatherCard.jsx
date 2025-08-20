import React, { useContext, useState } from "react";
import MainCard from "./MainCard";
import bgImage from "../assets/93502.jpg";
import { WeatherData } from "../Context/WeatherContext";

const WeatherCard = () => {
  const { city, setCity, result, error, loading } = useContext(WeatherData);

  const [inputCity, SetinputCity] = useState(city);
  const formHandle = (e) => {
    e.preventDefault();
    setCity(inputCity);
  };
  return (
    <div>
      <form
        className="p-3"
        style={{ backgroundImage: `url(${bgImage})` }}
        onSubmit={formHandle}
      >
        <input
          onChange={(e) => SetinputCity(e.target.value)}
          id="city"
          type="text"
          className="bg-white py-2 px-5 rounded-3xl w-80 mt-2 shadow-2xl outline-none  placeholder:text-stone-500 "
          placeholder="Enter the city...."
        />
      </form>
      <div className="flex items-center justify-center">
        <div
          className="w-fit h-[550px] mb-5 lg:absolute lg:top-3 
                rounded-[3vw] bg-white/20 backdrop-blur-3xl shadow-xl"
        >
          <MainCard Weatherdata={result} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
