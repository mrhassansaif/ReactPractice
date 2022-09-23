import React, { useState } from 'react';
import './Quiz.css'
import {
	Redirect,
	Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Spinner from 'react-bootstrap/Spinner'
import { auth, onAuthStateChanged, doc, getDoc, db, updateDoc } from "../Firebase/FirebaseConfig.js";

let snapData;
let uid;

export default function Quiz() {
	const [ifData, setData] = useState(false)
	const [agarPass, setagarPass] = useState(true)

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const ref = doc(db, "users", user.uid);
			const docSnap = getDoc(ref)
				.then((snapshot) => {
					snapData = snapshot.data()
					console.log(snapData.name)
					uid = user.uid
					console.log(uid)
					console.log(snapData.isPass)
					if (snapData.isPass == false) {
						setagarPass(true)
						setData(true)
					}
					else {
						setInterval(() => {

							setagarPass(false)
						}, 5000);
					}
				});
		} else {

		}
	});
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

		{
			questionText: 'MS-Word is an example of',
			answerOptions: [
				{ answerText: 'An operating system', isCorrect: false },
				{ answerText: 'A processing device', isCorrect: false },
				{ answerText: 'An input device', isCorrect: false },
				{ answerText: 'Application software', isCorrect: true },
			],
		},
		{
			questionText: 'A computer cannot "boot" if it does not have the',
			answerOptions: [
				{ answerText: 'Compiler', isCorrect: false },
				{ answerText: 'Operating system', isCorrect: true },
				{ answerText: 'Assembler', isCorrect: false },
				{ answerText: 'Loader', isCorrect: false },
			],
		},
		{
			questionText: 'The purest form of iron is ?',
			answerOptions: [
				{ answerText: 'wrought iron', isCorrect: true },
				{ answerText: 'steel', isCorrect: false },
				{ answerText: 'pig iron', isCorrect: false },
				{ answerText: 'nickel steel', isCorrect: false },
			],
		},
		{
			questionText: 'Hydrogen bomb is based on the principle of?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Junk e-mail is also called?',
			answerOptions: [
				{ answerText: 'Spoof', isCorrect: false },
				{ answerText: 'Spool', isCorrect: false },
				{ answerText: 'Sniffer script', isCorrect: false },
				{ answerText: 'Spam', isCorrect: true },
			],
		},
		{
			questionText: 'Laser is used in laser printers?',
			answerOptions: [
				{ answerText: 'Gas laser', isCorrect: false },
				{ answerText: 'Excimer laser', isCorrect: false },
				{ answerText: 'Dye laser', isCorrect: false },
				{ answerText: 'Semiconductor laser', isCorrect: true },
			],
		},
	];



	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			const Ref = doc(db, "users", uid);
			updateDoc(Ref, {
				isPass: true
			});
			setShowScore(true);
		}
	};
	return (
		<>
			{agarPass ? (<>
				{
					ifData ? (
						<>

							<div className='app1' style={{ width: "450px", height: "81px" }}>
								<div className='question-section'>
									<div style={{ textAlign: 'center', fontSize: "28px" }} className='question-text'>Welcome Mr. {snapData.name}</div>
								</div>
							</div>
							<br />


							{showScore ? (
								<>
									<div className='app'>
										<div className='score-section'>
											You scored {score} out of {questions.length}
										</div>
									</div>
									<br />
									<div className='app1' style={{ width: "450px", height: "60px" }}>
										<div className='question-section'>
											<div style={{ textAlign: 'center' }} className='question-text'>You will be redirected shortly
											</div>
										</div>
									</div>
								</>

							) : (
								<>
									<div className='app'>
										<div className='question-section'>
											<div className='question-count'>
												<span>Question {currentQuestion + 1}</span>/{questions.length}
											</div>
											<div className='question-text'>{questions[currentQuestion].questionText}</div>
										</div>
										<div className='answer-section'>
											{questions[currentQuestion].answerOptions.map((answerOption) => (
												<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
											))}
										</div>
									</div>
								</>
							)
							}

						</>) : (<Spinner animation="grow" />)
				}</>) : (<Redirect to='/pass' />)}
		</>

	);
}
