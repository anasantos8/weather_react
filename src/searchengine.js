import React, {useState} from "react";


export default function Searchengine(props) {
    const [city, setCity] = useState("");

function setCityName(event) {
    setCity(event.target.value);
}

    function goButton(event) {
        event.preventDefault();
        props.setCity(city);
    }

    let theCity = "You're in ...";
    let theDate = "And now it is ...";
if ( props.dataReturned.ready === true ) {
    theCity = props.dataReturned.city;

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[props.dataReturned.date.getDay()];
    let hours = props.dataReturned.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.dataReturned.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    theDate = `${day} ${hours}: ${minutes}`;
 //   theDate = props.dataReturned.date;

}


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
                    <h2>{theCity}</h2>
                    <h3>{theDate}</h3>
                </div>
            </div>
        </div>
    );
}