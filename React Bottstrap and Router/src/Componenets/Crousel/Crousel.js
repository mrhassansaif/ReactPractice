import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DarthVAder from './83929.jpg'
import DarthVAder1 from './123456.jpg'
import DarthVAder2 from './569454.png'

export default function Crousel() {
    return (
        <Container style={{ width: "52rem" }}>
            <div>
                <Carousel>
                    <Carousel.Item interval={500}>
                        <img
                            style={{ maxHeight: "450px" }}
                            className="d-block w-100"
                            src={DarthVAder}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Darth Vader</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            style={{ maxHeight: "450px" }}
                            className="d-block w-100"
                            src={DarthVAder1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Sith Lords</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ maxHeight: "450px" }}
                            className="d-block w-100"
                            src={DarthVAder2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>New Republic</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    )
}
