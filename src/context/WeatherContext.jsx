import { createContext, useState, useContext, useEffect } from "react";
import citiesData from "../data/citiesData.json";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState(
    citiesData.find((item) => item.name === "Amasya")
  );
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [cityList, setCityList] = useState([]);
  const dayObj = [
    { day: ["Sun", "Pazar"] },
    { day: ["Mon", "Pazartesi"] },
    { day: ["Tue", "Salı"] },
    { day: ["Wed", "Çarşamba"] },
    { day: ["Thu", "Perşembe"] },
    { day: ["Fri", "Cuma"] },
    { day: ["Sat", "Cumartesi"] },
  ];

  const values = {
    citiesData,
    currentCity,
    weatherData,
    setCurrentCity,
    dayObj,
    cityName,
    cityList,
  };
  const key = "fcbd93c81c293b6456fc04914745c487";
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity.name}&units=metric&appid=${key}`
    ).then((res) => {
      setWeatherData(res.data);
      setCityName(res.data.city.name);
      setCityList(res.data.list);
    });
  }, [currentCity]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
