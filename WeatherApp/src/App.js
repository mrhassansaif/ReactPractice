import React from 'react'
import axios from "axios";
import './App.css'
import { useEffect, useState } from "react";
export default function App() {
    const [userN, setuserN] = useState([])
    let [userData, setuserData] = useState({
        "coord": {
            "lon": 67.0822,
            "lat": 24.9056
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 25.9,
            "feels_like": 26.03,
            "temp_min": 25.9,
            "temp_max": 25.9,
            "pressure": 1011,
            "humidity": 57
        },
        "visibility": 6000,
        "wind": {
            "speed": 6.17,
            "deg": 220
        },
        "clouds": {
            "all": 0
        },
        "dt": 1643787340,
        "sys": {
            "type": 1,
            "id": 7576,
            "country": "PK",
            "sunrise": 1643768030,
            "sunset": 1643807806
        },
        "timezone": 18000,
        "id": 1174872,
        "name": "Karachi",
        "cod": 200
    })
    if ('base' in userData) {
        console.log("Has Data")
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + userN + "&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric").then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });
    } else {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + "karachi" + "&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric").then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });
    }
    const userEvent = (event) => {
        let userName = document.getElementById('user').value
        setuserN(userName)
        console.log(userN)
    }
    return (
        <>
            {/* <div class="input-group mb-1" style={{ width: "80%", margin: "auto" }}>
                <input type="text" name='' id='user' class="form-control" />
                <button onClick={userEvent}>Get Data</button>
            </div> */}
            <div id="content" class="content">
                <div class="bg-color">
                    <i id="open-find">
                        <svg></svg>
                    </i>
                    <i id="close-find">
                        <svg></svg>
                    </i>
                    <div id="information" class="information">
                        <input type="text" style={{ marginLeft: "69px" }} id='user' placeholder="Find your city" />
                        <button onClick={userEvent}>Get Data</button>
                        <h1 style={{ marginTop: "80px" }}>{userData.main.temp}°</h1>
                        <h2>{userData.name}</h2>
                        <img style={{ marginLeft: "161px", height: "80px" }} src={"http://openweathermap.org/img/w/" + userData.weather[0].icon + ".png"} />
                        <span class="today">Today, {userData.heatth}</span>
                        <div class="days">
                            <div class="sunday">
                                <i class="svg-ico">{userData.main.feels_like}°</i>
                                <span class="day">Feels Like</span>
                            </div>
                            <div class="mondey">
                                <i class="svg-ico">{userData.main.humidity}</i>
                                <span class="day">Humidity</span>
                            </div>
                            <div class="tuesday">
                                <i class="svg-ico">{userData.main.temp_min}°</i>
                                <span class="day">Min Temp</span>
                            </div>
                            <div class="wednesday">
                                <i class="svg-ico">{userData.main.temp_max}°</i>
                                <span class="day">Max Temp</span>
                            </div>
                        </div>
                    </div>
                    <p class="credit-link">Hassan Saif</p>
                </div>
            </div>
        </>
    )
}