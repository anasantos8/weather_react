import React, { useState } from "react";
import axios from "axios";

export let APIData = {
  tempMin: 7,
  tempMax: 16,
  windSpeed: 22,
  precipitation: 60
};

export function goButton(event) {
  alert(`bolas`);
}

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${
    props.city
    }&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(showTemperature);
  return <p />;
}
