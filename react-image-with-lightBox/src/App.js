import React from "react";
import ImgGallery from "./Components/Gallery/ImgGallery";
import Header from "./Components/Header/Header";
import { Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import './App.css'

export default function App() {
    const [darkMode, setDNCycle] = useState(false)

    return (
        <>
            <div className={darkMode ? 'darkMode' : 'lightMode'}>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <div class="switch">
                            <input type="checkbox" id="toggleAll" onChange={() => setDNCycle(!darkMode)} />
                            <label for="toggleAll"></label>
                        </div>
                    </Nav.Item>
                    <Nav.Item>
                        <div>&nbsp;</div>
                    </Nav.Item>
                    <Nav.Item>
                        <div>&nbsp;</div>
                    </Nav.Item>
                    <Nav.Item>
                        <div>&nbsp;</div>
                    </Nav.Item>
                    <Nav.Item>
                        <div>&nbsp;</div>
                    </Nav.Item>

                </Nav>
                <Header />
                <Container>
                    <ImgGallery />
                </Container>
            </div>
        </>
    );
}

