import React from "react";
//import "/src/styles.css";
import Clouds from "./images/transparent_16x16.png";

export default function SimpleCast(castData) {

/*
    <img
        src={localIcon}
        className="img-fluid"
        alt="weather icon"
        id="icon"
    />
*/

//    <i className="icon" />

    return (
        <div className="col">
            <div className="card border-info mb-3">
                <div className="card-header">{castData.localHour}</div>
                <div className="card-icon-center" >
                <img
                    src={castData.icon}
                    className="img-fluid"
                    alt="weather icon"
                    /></div>
                <p className="card-text">
                    max:{castData.maxTemp}/min:{castData.minTemp}
                </p>
            </div>
        </div>
    );
}
