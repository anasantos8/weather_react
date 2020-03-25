import React from "react";
//import "/src/styles.css";
import Child from "./images/asianchild.png";
import SimpleCast from "./simpleCast";

export default function Forecast() {
    return (
        <div className="container table-info">
            <div className="row">
                <div className="col-8">
                    <h3>And today will be...</h3>
                    <div>
                        <SimpleCast localHour="12:00" minTemp="10" maxTemp="20" />
                        <SimpleCast localHour="13:00" minTemp="11" maxTemp="22" />
                        <SimpleCast localHour="14:00" minTemp="12" maxTemp="23" />
                    </div>
                </div>
                <div className="col-4">
                    <img src={Child} className="img-fluid" alt="children" />
                </div>
            </div>
        </div>
    );
}