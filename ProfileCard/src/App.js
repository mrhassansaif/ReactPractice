import "./App.css";
import axios from "axios";

import { useEffect, useState } from "react";
import Card from "./Card/Card";


function App() {
    const [userN, setuserN] = useState([])


    const userEvent = (event) => {
        let name = document.getElementById("UserName").value
        setuserN(name)
        console.log(userN)
    }


    return (
        <>
            <div className="profile-card-ctr">
                <input id="UserName" className="profile-card__button button--blue js-message-btn" />
                <button className="profile-card__button button--blue js-message-btn" onClick={userEvent}>Get Data</button>
            </div>
            <Card user={userN}
                Test="Hello" />
        </>
    );
    function CardBody(userN) {
        console.log("Me Chal ra")

        return (
            <Card user={userN} />
        )

    }
}

export default App;
