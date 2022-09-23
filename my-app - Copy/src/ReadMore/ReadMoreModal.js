import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function ReadMoreModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const shortText = props.text.substring(0, props.length) + "...";
    const longText = props.text;

    const [isShort, setbtnState] = useState(false);
    const textSource = isShort ? longText : shortText;
    const btnText = isShort ? " Read Less" : " Read More";

    function ToggleBtnState() {
        console.log(isShort);
        setbtnState(!isShort);
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Terms and Conditions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Jhaakaas Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>Jo Assigment Submit Nai Kare Ga Us ka 200/= Fine</Modal.Body>
                <Modal.Body>{textSource}<span style={{ color: "blue", cursor: 'pointer' }} onClick={ToggleBtnState}
                >{btnText}</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}