import React from 'react';
import './ShowAnswers.css'
import {
	Link
} from "react-router-dom";

// console.log(itemJsonArray[1])

export default function ShowAnswer() {
	let itemJsonArrayStr = localStorage.getItem("itemsJson");
	let itemJsonArray = JSON.parse(itemJsonArrayStr);


	return (
		<>
			<div className='app1' style={{ width: "1098px" }}>
				<div className='question-section'>
					<div style={{ textAlign: 'center', fontSize: "28px" }} className='question-text'>Welcome Mr. {itemJsonArray[0]} </div>

				</div>
			</div>
			<br />

			<div style={{ display: 'flex', padding: "20px" }}>
				<div style={{ marginRight: "18px" }}>
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>What is the capital of France?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Paris</button>
						</div>
					</div>
					<br />
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Who is CEO of Tesla?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Elon Musk</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>The iPhone was created by which company?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Apple</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>How many Harry Potter books are there?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">7</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>MS-Word is an example of?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Application software</button>
						</div>
					</div>
				</div>
				<br />
				<div>
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>A computer cannot "boot" if it does not have the?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Operating system</button>
						</div>
					</div>
					<br />
					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>The purest form of iron is ?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">wrought iron</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Hydrogen bomb is based on the principle of?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">7</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Junk e-mail is also called?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Spam</button>
						</div>
					</div>
					<br />

					<div className='app1'>
						<div className='question-section'>
							<div className='question-text'>Laser is used in laser printers?</div>
						</div>
						<div className='answer-section'>
							<button className="button1">Semiconductor laser</button>
						</div>
					</div>
				</div>
			</div>
			<Link to='/' style={{ marginRight: "500px" }}><button style={{ width: "200px", marginRight: "500px" }}>LogOut</button></Link>
		</>
	);
}
