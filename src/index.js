import React, {useState} from "react";
import ReactDOM from "react-dom";
import Titulo from "./titulo";
import Info from "./info";
import Searchengine from "./searchengine";
import Forecast from "./forecast";
import "./index.css";

const rootElement = document.getElementById("root");

function RootApp(props) {
    
//let [temperae, setTemture] = useState(0);
   function setData(event) {
       event.preventDefault();
         alert('teste');
   }
    
    
    
    return ReactDOM.render
        (<div className="container">
            <Titulo />
            <div className="row">
                <div className="col">
                    <Searchengine jhandler={setData} />
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
        </div>,
            rootElement
        );

}

RootApp();

