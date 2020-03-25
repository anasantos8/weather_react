import React from "react";
//import "/src/styles.css";
//import goButton from "./Api";

export default function Searchengine(props) {
    let searchData = {
        location: "Tomar",
        geoTime: "terça 22:00 GMT"
    };

    function goButton(event) {
        alert(`bolas`);
    }

//    onClick = { goButton }

    return (
        <div className="container table-info">
            <div className="row">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="form-text"
                        placeholder="Where you want to go?"
                    />

                    <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={props.jhandler}
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
                    <h2>{searchData.location}</h2>
                    <h3>{searchData.geoTime}</h3>
                </div>
            </div>
        </div>
    );
}