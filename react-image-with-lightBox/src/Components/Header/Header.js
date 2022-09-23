import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import profile from './img/profile.jpg'

export default function Header() {
    return (
        <div>
            <Container style={{ marginTop: "50px" }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="2" style={{ marginRight: "100px" }}>
                        <div style={{ border: "3px solid #ed0d1c", borderRadius: "50%", padding: "3px", height: "161px", width: "161px" }} >
                            <img src={profile} style={{ borderRadius: "81px" }} />
                        </div>
                    </Col>

                    <Col xs lg="5">
                        <h3>mrhassan_saif</h3>
                        <p><b>230</b> posts &nbsp;&nbsp;&nbsp; <b>1,313</b> followers &nbsp;&nbsp;&nbsp;<b>294</b> following</p>
                        <p>Muhammad Hassan Bin Saif
                            <p style={{ color: "gray" }}>Photograper</p>
                            <p>Programmer, Chocoholic, Otaku, Astrophilic, Ex-ASFian, & Lazy AF.
                                <br />Gaming ID: Demon_Wolf<br />
                            </p>
                        </p>
                    </Col>
                </Row>
                <br />
                <br />

                <Row style={{ marginLeft: "210px" }}>
                    <Col xs lg="2" style={{ width: "110px" }}>
                        <div style={{}} >
                            <img src="https://avatarfiles.alphacoders.com/114/114213.jpg" style={{ borderRadius: "81px", height: "86px", width: "86px", marginBottom: "10px" }} />
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q&A</span>
                        </div>
                    </Col>
                    <Col xs lg="2" style={{ width: "110px" }}>
                        <div style={{}} >
                            <img src="https://avatarfiles.alphacoders.com/597/thumb-1920-59762.jpg" style={{ borderRadius: "81px", height: "86px", width: "86px", marginBottom: "10px" }} />
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Gaming</span>
                        </div>
                    </Col>
                    <Col xs lg="2" style={{ width: "110px" }}>
                        <div style={{}} >
                            <img src="https://avatarfiles.alphacoders.com/125/thumb-1920-125471.png" style={{ borderRadius: "81px", height: "86px", width: "86px", marginBottom: "10px" }} />
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Random</span>
                        </div>
                    </Col>
                    <Col xs lg="2" style={{ width: "110px" }}>
                        <div style={{}} >
                            <img src="https://avatarfiles.alphacoders.com/720/thumb-1920-72013.jpg" style={{ borderRadius: "81px", height: "86px", width: "86px", marginBottom: "10px" }} />
                            <span>&nbsp;&nbsp;&nbsp;Sceneezz</span>
                        </div>
                    </Col>
                    <Col xs lg="2" style={{ width: "110px" }}>
                        <div style={{}} >
                            <img src="https://avatarfiles.alphacoders.com/651/thumb-1920-6515.jpg" style={{ borderRadius: "81px", height: "86px", width: "86px", marginBottom: "10px" }} />
                            <span>&nbsp;&nbsp;&nbsp;Random</span>
                        </div>
                    </Col>
                    <Col xs lg="2" style={{ width: "110px" }}>
                        <div style={{}} >
                            <img src={profile} style={{ borderRadius: "81px", height: "86px", width: "86px", marginBottom: "10px" }} />
                            <span>&nbsp;&nbsp;&nbsp;Highlights</span>
                        </div>
                    </Col>

                </Row>
                <hr />
                <center><p>Posts</p></center>
                <hr />
            </Container>

        </div >
    )
}
