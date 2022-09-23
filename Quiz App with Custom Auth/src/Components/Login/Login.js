import React from 'react'
import './Login.css'
import {
    Link,
    Redirect
} from "react-router-dom";

import { useState } from 'react'


export default function Login() {

    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    let itemJsonArray = JSON.parse(itemJsonArrayStr);
    console.log(itemJsonArray[1])
    const [Validate, setValidate] = useState(false)

    function getData() {
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        // let lastName = document.getElementById("last-name").value

        if (itemJsonArray[1] === email && itemJsonArray[2] === password) {
            console.log('Validated')
            setValidate(true)
        }
        else {
            alert('No User Found \n Check Email or Password')
            setValidate(false)
        }
    };
    return (
        <>
            {
                Validate ? (<Redirect to='/quiz' />) : (<div className="form-container">
                    <h1 style={{ textAlign: 'center', color: 'black' }}>LOGIN</h1>
                    {/* <form className="register-form"> */}
                    <div className="register-form">
                        {/* Uncomment the next line to show the success message */}
                        {/* <div className="success-message">Success! Thank you for registering</div> */}
                        <input
                            id="email"
                            className="form-field"
                            type="text"
                            placeholder="email"
                            name="firstName"
                        />
                        {/* Uncomment the next line to show the error message */}
                        {/* <span id="first-name-error">Please enter a first name</span> */}
                        <input
                            id="password"
                            className="form-field"
                            type="password"
                            placeholder="password"
                            name="lastName"
                        />
                        {/* Uncomment the next line to show the error message */}
                        {/* <span id="last-name-error">Please enter a last name</span> */}
                        {/* Uncomment the next line to show the error message */}
                        {/* <span id="email-error">Please enter an email address</span> */}
                        <button className="form-field" style={{ color: "white" }} onClick={getData}>
                            Login
                        </button>
                        <p style={{ color: 'black' }}>Not a user <Link style={{ color: 'blue' }} to='/signup'>SignUp</Link></p>
                    </div>
                </div>)}
        </>
    )
}
