import React from 'react'
import './style.css'
import raat from "./img/raat.png"
import day from "./img/day.png"
import { useState } from 'react';

export default function Toggle() {
  const [isMorning, setbtnState] = useState(false)
  const imgSource = isMorning ? raat : day
  const btnText = isMorning ? "Night Mode: On" : "Day Mode: On";

  function ToggleBtnState() {
    console.log(isMorning)
    setbtnState(!isMorning)
  }

  const [darkMode, setDNCycle] = useState(false)


  return (
    <div class="container">
      <div class="background night">
        <img src={imgSource} height="252px" alt="" />
      </div>
      <div class="text">
        <h3>{btnText}</h3>
        <p>Toggle Switch To Change Mode</p>
        <input class="cbx hidden" type="checkbox" id="unchecked" onClick={ToggleBtnState} onChange={() => setDNCycle(!darkMode)} />
        <label class="lbl" for="unchecked"></label>
      </div>
    </div>
  )
}
