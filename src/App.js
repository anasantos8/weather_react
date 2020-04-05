import React, {useState} from "react";
import Titulo from "./titulo";
import Searchengine from "./searchengine";
import Info from "./info"
import Forecast from "./forecast"
import axios from "axios";
import Clouds from "./images/transparent_16x16.png";

export default function App(props){

    let [weatherData, setWeatherData] = useState({ ready: false });
//    let localCityName = "";

    let [localInfoData, setLocalInfoData] = useState({
        minTemp: 0,
        maxTemp: 0,
        feelsLike: 0,
        type: "C"
    });

    let [localForecastData, setLocalForecastData] = useState({
        forecast: [ { hour: 0, minTemp: 0, maxTemp: 0, icon: Clouds },
                    { hour: 0, minTemp: 0, maxTemp: 0, icon: Clouds },
                    { hour: 0, minTemp: 0, maxTemp: 0, icon: Clouds } ]
    });

    function getHours(Tdate) {

        let hour = Tdate.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }

        let minutes = Tdate.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return (<div>{hour}:{minutes}</div>);
    }

    
function setResponse(response){
    setWeatherData({
        ready: true,
        date: new Date((response.data.list[0].dt - response.data.city.timezone ) * 1000),
        city: response.data.city.name,
        data: response.data });

    setLocalInfoData({
        minTemp: Math.round(response.data.list[0].main.temp_min),
        maxTemp: Math.round(response.data.list[0].main.temp_max),
        feelsLike: Math.round(response.data.list[0].main.feels_like),
        type: "C"
    });

    setLocalForecastData({
        forecast: [
            {
                hour: getHours(new Date((response.data.list[1].dt + response.data.city.timezone) * 1000)),
                minTemp: Math.round(response.data.list[1].main.temp_min),
                maxTemp: Math.round(response.data.list[1].main.temp_max),
                icon: `http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png`
            },
            {
                hour: getHours(new Date((response.data.list[2].dt + response.data.city.timezone) * 1000)),
                minTemp: Math.round(response.data.list[2].main.temp_min),
                maxTemp: Math.round(response.data.list[2].main.temp_max),
                icon: `http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png`
            },
            {
                hour: getHours(new Date((response.data.list[3].dt + response.data.city.timezone) * 1000)),
                minTemp: Math.round(response.data.list[3].main.temp_min),
                maxTemp: Math.round(response.data.list[3].main.temp_max),
                icon: `http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`
            }]
        });



//    {
//       list: [ { dt: 0,
//              weather: [ {icon: "" } ],
//              wind: {speed: 0}, 
//              main: {temp_max: 0, temp_min: 0, feels_like: 0} } ,
//            { dt: 0,
//              weather: [ {icon: "" } ],
//              wind: {speed: 0}, 
//              main: {temp_max: 0, temp_min: 0, feels_like: 0} } ,
//            { dt: 0,
//              weather: [ {icon: "" } ],
//              wind: {speed: 0}, 
//              main: {temp_max: 0, temp_min: 0, feels_like: 0} } ,
//            { dt: 0,
//              weather: [ {icon: "" } ],
//              wind: {speed: 0}, 
//              main: {temp_max: 0, temp_min: 0, feels_like: 0} } ],
//       city: { name: "", timezone: 0 }
//    }

}

    function setResponseCoord(response) {
//        localCityName = response.data.name;
        setCity(response.data.name);
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
                <Info dataReturned={weatherData} localData={localInfoData} setLocalData={setLocalInfoData} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Forecast dataReturned={weatherData} data={localForecastData} setData={setLocalForecastData} />
                </div>
            </div>
            <a href="https://github.com/anasantos8/weather_react">Open Source Code by Ana Santos</a>
        </div>
        );

}