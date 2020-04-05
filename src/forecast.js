import React, {useState} from "react";
//import "/src/styles.css";
import Child from "./images/asianchild.png";
import SimpleCast from "./simpleCast";
import Clouds from "./images/transparent_16x16.png";

export default function Forecast(props) {


    function getHours(Tdate) {

        let hour = Tdate.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }

        let minutes = Tdate.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return (<div>{hour}:{minutes}</div>);
    }

//    let hour0 = "";
//    if (props.ready === true) hour0 = getHours(new Date(props.dataReturned.data.list[0].dt * 1000)); let hourx = new Date();
 //   let forecastTempMax = 0;
   // let forecastTempMin = 0;

    let hour1 = "";
    let minTemp1 = "";
    let maxTemp1 = "";
    let icon1 = Clouds;
    if (props.dataReturned.ready === true) {
        hour1 = getHours(new Date((props.dataReturned.data.list[1].dt - props.dataReturned.data.city.timezone)* 1000));
        minTemp1 = Math.round(props.dataReturned.data.list[1].main.temp_min);
        maxTemp1 = Math.round(props.dataReturned.data.list[1].main.temp_max);
        icon1 = `http://openweathermap.org/img/wn/${props.dataReturned.data.list[1].weather[0].icon}@2x.png`;
    }
    let hour2 = "";
    let minTemp2 = "";
    let maxTemp2 = "";
    let icon2 = Clouds;
    if (props.dataReturned.ready === true) {
        hour2 = getHours(new Date((props.dataReturned.data.list[2].dt - props.dataReturned.data.city.timezone)* 1000));
        minTemp2 = Math.round(props.dataReturned.data.list[2].main.temp_min);
        maxTemp2 = Math.round(props.dataReturned.data.list[2].main.temp_max);
        icon2 = `http://openweathermap.org/img/wn/${props.dataReturned.data.list[2].weather[0].icon}@2x.png`;
    }
    let hour3 = "";
    let minTemp3 = "";
    let maxTemp3 = "";
    let icon3 = Clouds;
    if (props.dataReturned.ready === true) {
        hour3 = getHours(new Date((props.dataReturned.data.list[3].dt - props.dataReturned.data.city.timezone) * 1000));
        
        minTemp3 = Math.round(props.dataReturned.data.list[3].main.temp_min);
        maxTemp3 = Math.round(props.dataReturned.data.list[3].main.temp_max);
        icon3 = `http://openweathermap.org/img/wn/${props.dataReturned.data.list[3].weather[0].icon}@2x.png`;
    }



    /*
    setData({
        forecast: [
            {
                hour: props.data.forecast[0].hour,
                minTemp: Math.round(props.dataReturned.data.list[1].main.temp_min),
                maxTemp: Math.round(props.dataReturned.data.list[1].main.temp_max),
                icon: props.data.forecast[0].icon
            },
            {
                hour: props.data.forecast[1].hour,
                minTemp: Math.round(props.dataReturned.data.list[2].main.temp_min),
                maxTemp: Math.round(props.dataReturned.data.list[2].main.temp_max),
                icon: props.data.forecast[1].icon
            },
            {
                hour: props.data.forecast[2].hour,
                minTemp: Math.round(props.dataReturned.data.list[3].main.temp_min),
                maxTemp: Math.round(props.dataReturned.data.list[3].main.temp_max),
                icon: props.data.forecast[2].icon
            }]
    });

    setData({
        forecast: [
            {
                hour: props.data.forecast[0].hour,
                minTemp: (Math.round(props.dataReturned.data.list[1].main.temp_min) * 9 / 5) + 32,
                maxTemp: (Math.round(props.dataReturned.data.list[1].main.temp_max) * 9 / 5) + 32,
                icon: props.data.forecast[0].icon
            },
            {
                hour: props.data.forecast[1].hour,
                minTemp: (Math.round(props.dataReturned.data.list[2].main.temp_min) * 9 / 5) + 32,
                maxTemp: (Math.round(props.dataReturned.data.list[2].main.temp_max) * 9 / 5) + 32,
                icon: props.data.forecast[1].icon
            },
            {
                hour: props.data.forecast[2].hour,
                minTemp: (Math.round(props.dataReturned.data.list[3].main.temp_min) * 9 / 5) + 32,
                maxTemp: (Math.round(props.dataReturned.data.list[3].main.temp_max) * 9 / 5) + 32,
                icon: props.data.forecast[2].icon
            }]
    });


    setData({
        forecast: [
            {
                hour: props.data.forecast[0].hour,
                minTemp: props.data.forecast[0].minTemp,
                maxTemp: props.data.forecast[0].maxTemp,
                icon: props.data.forecast[0].icon
            },
            {
                hour: props.data.forecast[1].hour,
                minTemp: props.data.forecast[1].minTemp,
                maxTemp: props.data.forecast[1].maxTemp,
                icon: props.data.forecast[1].icon
            },
            {
                hour: props.data.forecast[2].hour,
                minTemp: props.data.forecast[2].minTemp,
                maxTemp: props.data.forecast[2].maxTemp,
                icon: props.data.forecast[2].icon
            }]
    });

    */

//    <SimpleCast localHour={hour1} minTemp={minTemp1} maxTemp={maxTemp1} icon={icon1} />
//    <SimpleCast localHour={hour2} minTemp={minTemp2} maxTemp={maxTemp2} icon={icon2} />
//    <SimpleCast localHour={hour3} minTemp={minTemp3} maxTemp={maxTemp3} icon={icon3} />


    function setCelsius0(event) {
        if (props.dataReturned.ready === true)
        props.setData({
            forecast: [
                {
                    hour: props.data.forecast[0].hour,
                    minTemp: Math.round(props.dataReturned.data.list[1].main.temp_min),
                    maxTemp: Math.round(props.dataReturned.data.list[1].main.temp_max),
                    icon: props.data.forecast[0].icon
                },
                props.data.forecast[1],
                props.data.forecast[2]]
        });

    }
    function setFarenheit0(event) {
        if (props.dataReturned.ready === true)
        props.setData({
            forecast: [
                {
                    hour: props.data.forecast[0].hour,
                    minTemp: Math.round((props.dataReturned.data.list[1].main.temp_min * 9 / 5) + 32),
                    maxTemp: Math.round((props.dataReturned.data.list[1].main.temp_max * 9 / 5) + 32),
                    icon: props.data.forecast[0].icon
                },
                props.data.forecast[1],
                props.data.forecast[2]]
        });

    }

    function setCelsius1(event) {
        if (props.dataReturned.ready === true)
            props.setData({
                forecast: [
                    props.data.forecast[0],
                    {
                        hour: props.data.forecast[1].hour,
                        minTemp: Math.round(props.dataReturned.data.list[2].main.temp_min),
                        maxTemp: Math.round(props.dataReturned.data.list[2].main.temp_max),
                        icon: props.data.forecast[1].icon
                    },
                    props.data.forecast[2]]
            });

    }
    function setFarenheit1(event) {
        if (props.dataReturned.ready === true)
            props.setData({
                forecast: [
                    props.data.forecast[0],
                    {
                        hour: props.data.forecast[1].hour,
                        minTemp: Math.round((props.dataReturned.data.list[2].main.temp_min * 9 / 5) + 32),
                        maxTemp: Math.round((props.dataReturned.data.list[2].main.temp_max * 9 / 5) + 32),
                        icon: props.data.forecast[1].icon
                    },
                    props.data.forecast[2]]
            });

    }

    function setCelsius2(event) {
        if (props.dataReturned.ready === true)
            props.setData({
                forecast: [
                    props.data.forecast[0],
                    props.data.forecast[1],
                    {
                        hour: props.data.forecast[0].hour,
                        minTemp: Math.round(props.dataReturned.data.list[3].main.temp_min),
                        maxTemp: Math.round(props.dataReturned.data.list[3].main.temp_max),
                        icon: props.data.forecast[0].icon
                    }]
            });

    }
    function setFarenheit2(event) {
        if (props.dataReturned.ready === true)
            props.setData({
                forecast: [
                    props.data.forecast[0],
                    props.data.forecast[1],
                    {
                        hour: props.data.forecast[2].hour,
                        minTemp: Math.round((props.dataReturned.data.list[3].main.temp_min * 9 / 5) + 32),
                        maxTemp: Math.round((props.dataReturned.data.list[3].main.temp_max * 9 / 5) + 32),
                        icon: props.data.forecast[2].icon
                    }]
            });

    }
    return (
        <div className="container table-info">
            <div className="row">
                <div className="col-8">
                    <h3>And today will be...</h3>
                    <div>
                        <SimpleCast data={props.data.forecast[0]} setCelsius={setCelsius0} setFarenheit={setFarenheit0} />
                        <SimpleCast data={props.data.forecast[1]} setCelsius={setCelsius1} setFarenheit={setFarenheit1} />
                        <SimpleCast data={props.data.forecast[2]} setCelsius={setCelsius2} setFarenheit={setFarenheit2} />
                    </div>
                </div>
                <div className="col-4">
                    <img src={Child} className="img-fluid" alt="children" />
                </div>
            </div>
        </div>
    );
}