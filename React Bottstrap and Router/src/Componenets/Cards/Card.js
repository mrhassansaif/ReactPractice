import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DarthVAder from './83929.jpg'

export default function BCard() {
    return (
        <Container style={{ width: "90%" }}>
            <div>
                <h2 style={{ textAlign: "center" }}>Who is Darth Vader?</h2>

                <br />
                <br />

                <div class="row no-gutters">
                    <div class="col-auto">
                        <img src={DarthVAder} style={{ width: '32rem' }} class="img-fluid" alt="" />
                    </div>
                    <div class="col">
                        <div class="card-block px-2">
                            <h4 class="card-title" style={{ textAlign: "center" }}>Darth Vader</h4>
                            <p class="card-text">Originally a slave on Tatooine, Anakin Skywalker is a Jedi prophesied to bring balance to the Force. He is lured to the dark side of the Force by Palpatine and becomes a Sith lord, assuming the title <b>Darth Vader</b>. After a lightsaber battle with his former mentor Obi-Wan Kenobi on Mustafar, in which he is severely injured, Vader is transformed into a cyborg. He then serves the Galactic Empire as its chief enforcer.
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    )
}
