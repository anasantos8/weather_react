import React, {useState} from "react";

import Clouds from "./images/transparent_16x16.png";


export default function Info(props) {
    
    let localTempMax = 0;
    let localTempMin = 0;
    let localFeelsLike = 0;
let localTempType="C";

let [localData, setLocalData]  = useState({
    minTemp: 0,
    maxTemp: 0,
    feelsLike: 0,
    type: "C"
});

function showFahrenheit(event) {
        event.preventDefault();
            localTempMin= (localTempMin*9/5)+32;
            localTempMax= (localTempMax*9/5)+32;
            localFeelsLike= (localFeelsLike * 9/5) + 32;
            localTempType= "F";
/*
    setLocalData({
        minTemp: (localTempMin * 9 / 5) + 32,
        maxTemp: (localTempMax * 9 / 5) + 32,
        feelsLike: (localFeelsLike * 9 / 5) + 32,
        type: "F"
    });
*/
    }

    function showCelsius(event) {
        event.preventDefault();
        localTempMax = Math.round(props.dataReturned.data.list[0].main.temp_max);
        localTempMin = Math.round(props.dataReturned.data.list[0].main.temp_min);
        localFeelsLike = Math.round(props.dataReturned.data.list[0].main.feels_like);
        localTempType= "C"

/*        setLocalData({
            minTemp: localTempMin,
            maxTemp: localTempMax,
            feelsLike: localFeelsLike,
            type: "C"
        });
*/
    }

    if (props.dataReturned.ready === true) {

        let localIcon = `http://openweathermap.org/img/wn/${props.dataReturned.data.list[0].weather[0].icon}@2x.png`;
        let localTempWind = Math.round(props.dataReturned.data.list[0].wind.speed);
        localTempMax = Math.round(props.dataReturned.data.list[0].main.temp_max);
        localTempMin = Math.round(props.dataReturned.data.list[0].main.temp_min);
        localFeelsLike = Math.round(props.dataReturned.data.list[0].main.feels_like);

        /*
        setLocalData({
            minTemp: localTempMin,
            maxTemp: localTempMax,
            feelsLike: localFeelsLike,
            type: "C"
        });
*/
        return (
        <div className="container table-info">
            <div className="row">
                <div className="col-4">
                    <h3>Outside it's</h3>
                </div>
                <div className="col-4">
                    <img
                        src={localIcon}
                        className="img-fluid"
                        alt="weather icon"
                        id="icon"
                    />
                </div>
                <div className="col-4">
                        <p>Max: {localTempMax} [<a href="/" onClick={showCelsius}>ºC</a> | <a href="/" onClick={showFahrenheit}>ºF</a>]</p>
                        <p>Min: {localTempMin} ªC </p>
                        <p>Wind Speed: {localTempWind} Km/h</p>
                    <p>Feels Like: {localFeelsLike} ªC</p>
                </div>©
            </div>
        </div>
    );
    }
    else 
        return (
            <div className="container table-info">
                <div className="row">
                    <div className="col-4">
                        <h3>Outside it's</h3>
                    </div>
                    <div className="col-4">
                        <img
                            src={Clouds}
                            className="img-fluid"
                            alt="weather icon"
                            id="icon"
                        />
                    </div>
                    <div className="col-4">
                        <p>Max: _ <a href="/">ºC</a> | <a href="/">ºF</a></p>
                        <p>Min: _ºC </p>
                        <p>Wind Speed: _ Km/h</p>
                        <p>Feels Like: _ ªC</p>
                    </div>
                </div>
            </div>
        );
    }
