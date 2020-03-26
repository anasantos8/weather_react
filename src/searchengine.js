import React, {useState} from "react";
//import "/src/styles.css";
//import goButton from "./Api";

export default function Searchengine(props) {
    const [city, setCity] = useState("");

function setCityName(event) {
    setCity(event.target.value);
}


    let searchData = {
        location: "Tomar",
        geoTime: "terça 22:00 GMT"
    };

    function goButton(event) {
        event.preventDefault();
        props.setCity(city);
    }

//    if (props.dataReturned != null) 
//    props.dataReturned.name;

    return (
        <div className="container table-info">
            <div className="row">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="form-text"
                        placeholder="Where you want to go?"
                        onChange={setCityName}
                    />

                    <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={goButton}
                    >
                        Go!
          </button>
                    <button type="click" className="btn btn-outline-info">
                        Current Location
          </button>
                </div>
            </div>
            <div className="row">
                <div className="col alignright">
                    <h2>{props.dataReturned.city}</h2>
                    <h3>{props.dataReturned.timeDate}</h3>
                </div>
            </div>
        </div>
    );
}