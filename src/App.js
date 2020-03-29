import React, {useState} from "react";
import Titulo from "./titulo";
import Searchengine from "./searchengine";
import Info from "./info"
import Forecast from "./forecast"
import axios from "axios";

export default function App(props){

    let [weatherData, setWeatherData] = useState({ready: false});

function setResponse(response){

    setWeatherData({
        ready: true,
        date: new Date((response.data.list[0].dt + response.data.city.timezone - 5400) * 1000),
        city: response.data.city.name,
        data: response.data });


}

    function setCity(props){    
        let key = "96a2b55cf333405c0e3ab8837ae375c9";
        let apiKey = `https://api.openweathermap.org/data/2.5/forecast?q=${props}&appid=${key}&units=metric`;
        axios.get(apiKey).then(setResponse);

    }

    return (<div className="container">
            <Titulo />
            <div className="row">
                <div className="col">
                <Searchengine setCity={setCity} dataReturned={weatherData} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Info dataReturned={weatherData} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Forecast dataReturned={weatherData} />
                </div>
            </div>
            <a href="https://github.com/anasantos8/weather_react">Open Source Code by Ana Santos</a>
        </div>
        );

}