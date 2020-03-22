import React from "react";
//import "/src/styles.css";

export default function SimpleCast(castData) {
    return (
        <div className="col">
            <div className="card border-info mb-3">
                <div className="card-header">{castData.localHour}</div>
                <i className="icon" />
                <p className="card-text">
                    max:{castData.maxTemp}/min:{castData.minTemp}
                </p>
            </div>
        </div>
    );
}
