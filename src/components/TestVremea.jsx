import React, { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
import axios from "axios";

const TestVremea = () => {
  const [weather, setWeather] = useState({});
  const [error, setErrors] = useState("");
  const [latLong, setLatLong] = useState("Paris");

  let urlCurrent = `http://api.weatherapi.com/v1/current.json?key=10d18304ce664a3f93b173102230604&q=${latLong}&aqi=no`;
  let urlSearch = `https://api.weatherapi.com/v1/search.json?key=10d18304ce664a3f93b173102230604&q=${latLong}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //can be use watchPosition or getCurrentPosition
      let myPosition = `${position.coords.latitude},${position.coords.longitude}`;
      setLatLong(myPosition);
      console.log(myPosition);
    });

    axios.get(urlCurrent).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    });
  }, [urlCurrent]);

  return <div>{}</div>;
};

export default TestVremea;
