import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherData = createContext();

const WeatherContext = ({ children }) => {
  const [result, setResult] = useState(null);
  const [city, setCity] = useState("bengaluru");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_key = "7fb6633cc1b8d311a84f376ea7aeb8ee";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        );
        setResult(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  return (
    <WeatherData.Provider
      value={{ city, setCity: setCity, result, error, loading }}
    >
      {children}
    </WeatherData.Provider>
  );
};

export default WeatherContext;
