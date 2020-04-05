import React from "react";
import Clouds from "./images/transparent_16x16.png";


export default function Info(props) {

    function showFahrenheit(event) {
        event.preventDefault();

        props.setLocalData({
        minTemp: Math.round((props.dataReturned.data.list[0].main.temp_min * 9 / 5) + 32),
        maxTemp: Math.round((props.dataReturned.data.list[0].main.temp_max * 9 / 5) + 32),
        feelsLike: Math.round((props.dataReturned.data.list[0].main.feels_like * 9 / 5) + 32),
        type: "F" });

    }

    function showCelsius(event) {
        event.preventDefault();

        props.setLocalData({
            minTemp: Math.round(props.dataReturned.data.list[0].main.temp_min),
            maxTemp: Math.round(props.dataReturned.data.list[0].main.temp_max),
            feelsLike: Math.round(props.dataReturned.data.list[0].main.feels_like),
            type: "C"
        });

    }

    if (props.dataReturned.ready === true) {

        let localIcon = `http://openweathermap.org/img/wn/${props.dataReturned.data.list[0].weather[0].icon}@2x.png`;
        let localTempWind = Math.round(props.dataReturned.data.list[0].wind.speed);

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
                     <p>Max: {props.localData.maxTemp} [<a href="/" onClick={showCelsius}>ºC</a> | <a href="/" onClick={showFahrenheit}>ºF</a>]</p>
                     <p>Min: {props.localData.minTemp} ªC </p>
                        <p>Wind Speed: {localTempWind} Km/h</p>
                     <p>Feels Like: {props.localData.feelsLike} ªC</p>
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
