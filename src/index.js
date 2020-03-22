import React from "react";
import ReactDOM from "react-dom";
import Titulo from "./titulo";
import Info from "./info";
import Searchengine from "./searchengine";
import Forecast from "./forecast";
import Api from "./Api";

import Weather from "./Api";
const rootElement = document.getElementById("root");
ReactDOM.render

    (<div className="container">
        <Titulo />
        <div className="row">
            <div className="col">
                <Searchengine />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Info />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Forecast />
            </div>
        </div>
        <a href="https://github.com/anasantos8/weather_react">Open Source Code</a>
        <a> by Ana Santos</a>
    </div>,
        rootElement
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
