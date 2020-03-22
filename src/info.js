import React from "react";
//import "/src/styles.css";
import Clouds from "./images/transparent_16x16.png";
import APIData from "./Api";

export default function info() {
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
                    <p>Max: {APIData.tempMax}</p>
                    <p>
                        Min: {APIData.tempMin} [<a href="/">ºC</a> | <a href="/">ºF</a>]
          </p>
                    <p>Wind Speed: {APIData.windSpeed} Km/h</p>

                    <p>Precipitation: {APIData.precipitation} %</p>
                </div>
            </div>
        </div>
    );
}
