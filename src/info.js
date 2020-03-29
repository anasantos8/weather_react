import React from "react";
//import "/src/styles.css";
import Clouds from "./images/transparent_16x16.png";
//import APIData from "./Api";

export default function info(props) {


    if (props.dataReturned.ready === true) {

        let localIcon = `http://openweathermap.org/img/wn/${props.dataReturned.data.list[0].weather[0].icon}@2x.png`;
        
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
                    <p>Max: {props.dataReturned.data.list[0].main.temp_max}</p>
                    <p>
                        Min: {props.dataReturned.data.list[0].main.temp_min} [<a href="/">ºC</a> | <a href="/">ºF</a>]
          </p>
                    <p>Wind Speed: {props.dataReturned.data.list[0].wind.speed} Km/h</p>

                    <p>Feels Like: {props.dataReturned.data.list[0].main.feels_like}</p>
                </div>
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
                        <p>Max: 0</p>
                        <p>
                            Min: 0 [<a href="/">ºC</a> | <a href="/">ºF</a>]
          </p>
                        <p>Wind Speed: 0 Km/h</p>

                        <p>Feels Like: 0</p>
                    </div>
                </div>
            </div>
        );
    }
