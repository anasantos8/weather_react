import React, {useState} from "react";
import Titulo from "./titulo";
import Searchengine from "./searchengine";
import Info from "./info"
import Forecast from "./forecast"
import axios from "axios";

export default function App(props){

    let [weatherData, setWeatherData] = useState({ready: false});
    let localCityName = "";

function setResponse(response){

//    date: new Date((response.data.list[0].dt - response.data.city.timezone) * 1000),
    setWeatherData({
        ready: true,
        date: new Date((response.data.list[0].dt - response.data.city.timezone - 7200 ) * 1000),
        city: response.data.city.name,
        data: response.data });


}

    function setResponseCoord(response) {
        localCityName = response.data.name;
//        setCity(response.data.name);
    }

function showPosition(position){
    let key = "96a2b55cf333405c0e3ab8837ae375c9";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(apiKey).then(setResponseCoord);

}

    function setCurrentLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
        setCity(localCityName);
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
                <Searchengine setCity={setCity} setCurrentLocation={setCurrentLocation} dataReturned={weatherData} />
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