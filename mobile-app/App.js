import { Text, View, Image } from 'react-native';
import { useState, useEffect } from "react";
import MyAccelerometer from "./components/Accelerometer";
import Answers from './components/Answers';
import Styles from './components/Styles';

export default function App() {
	const [movement, setMovement] = useState(0);
	const [message, setMessage] = useState("");
	const [answers, setAnswers] = useState([]);

	const arduinoMap = (x, in_min, in_max, out_min, out_max) => {
		let helper = Math.round((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
		console.log("14L " + helper);
		setMovement(helper);
		console.log("16L " + helper);
	};

	const logic = value => {
		//setMovement(value);
		//console.log("26L " + answers.length);
		arduinoMap(value, 1.2, 3.8, 0, answers.length);

		if (movement >= answers.length) {
			setMovement(answers.length);
		}

		console.log("33L " + movement);
		console.log("34L " + answers[movement]);
		setMessage(answers[movement]);
	};

	useEffect(() => {
		setAnswers(Answers.sort(function(a, b){return a.length-b.length}))
		//console.log(answers);
	}, []);

	return (
		<View style={Styles.container}>			
			<View style={Styles.header}>
				<Text style={Styles.headerText}>{message}</Text>
			</View>

			<Image style={Styles.picture} source={require('./assets/ball.png')} />

			<MyAccelerometer onChange={logic}></MyAccelerometer>

			<View style={Styles.footer}>
				<Text style={Styles.footerText}>Ask the question, then move the phone</Text>
			</View>
		</View>
	);
}