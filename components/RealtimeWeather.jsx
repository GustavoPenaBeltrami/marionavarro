"use client";
import { useEffect, useState } from "react";

export const RealtimeWeather = () => {
  const [weather, setWeather] = useState(null);
  const apikey = "47884d4e9bf7454ab3f73311240205";

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${latitude},${longitude}&lang=es`
      );
      let data = await response.json();
      setWeather(data.current);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(weather);

  return (
    <>
      {weather ? (
        <div className="fixed bottom-5 z-50 right-5 p-7 flex flex-col justify-center items-center bg-cream rounded-xl opacity-60">
          <div className="flex flex-row gap-3 items-center">
            <img src={weather.condition.icon} className="w-12" />
            <p className="text-4xl">{weather.temp_c}°</p>
          </div>
          <p>{weather.condition.text}</p>
        </div>
      ) : null}
    </>
  );
};
