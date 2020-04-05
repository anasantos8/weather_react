import React from "react";

export default function SimpleCast(castData) {

    function showCelsius(event) {
        event.preventDefault();
        castData.setCelsius();
    }

    function showFahrenheit(event) {
        event.preventDefault();
        castData.setFarenheit();
    }

    return (
        <div className="col">
            <div className="card border-info mb-3">
                <div className="card-header">{castData.data.hour}</div>
                <div className="card-icon-center" >
                <img
                    src={castData.data.icon}
                    className="img-fluid"
                    alt="weather icon"
                    /></div>
                <p className="card-text">
                    max:{castData.data.maxTemp}/min:{castData.data.minTemp}  [<a href="/" onClick={showCelsius}>ºC</a> | <a href="/" onClick={showFahrenheit}>ºF</a>]
                </p>
            </div>
        </div>
    );
}
