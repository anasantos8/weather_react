import React, {useState} from "react";
import Titulo from "./titulo";
import Searchengine from "./searchengine";
import Info from "./info"
import Forecast from "./forecast"
import axios from "axios";

export default function App(props){

    let [weatherData, setWeatherData] = useState({ready: false});



    function setCity(city) {

//  Chamar o axios com o par|ametro city  da funç\ao


        setWeatherData({
            ready: true,
            city: "Lixboa",
            timeDate: "quarta, 12 abril"
        });

    }

    return (<div className="container">
            <Titulo />
            <div className="row">
                <div className="col">
                <Searchengine setCity={setCity} dataReturned={weatherData} />
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
            <a href="https://github.com/anasantos8/weather_react">Open Source Code by Ana Santos</a>
        </div>
        );

}