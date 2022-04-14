import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Styles from './Styles';

const MyAccelerometer = props => {
	const [subscription, setSubscription] = useState(null);

	const _subscribe = () => {
		Accelerometer.setUpdateInterval(400);

		setSubscription(
			Accelerometer.addListener(accelerometerData => {
				let movement = Math.sqrt(accelerometerData.x * accelerometerData.x + accelerometerData.y * accelerometerData.y + accelerometerData.z * accelerometerData.z);

				if (movement >= 1.2) {
					if (movement > 3.8) {
						movement = 3.8;
					}

					props.onChange(movement);
					_unsubscribe();
				}
			})
		);
	};

	const _unsubscribe = () => {
		subscription && subscription.remove();
		setSubscription(null);
	};	

	useEffect(() => {
		_subscribe();
		return () => _unsubscribe();
	}, []);

	return (
		<TouchableOpacity style={Styles.button} onPress={subscription ? _unsubscribe : _subscribe}>
			<Text style={Styles.buttonText}>{subscription ? 'Thinking...' : 'Ask'}</Text>
		</TouchableOpacity>
	);
}

export default MyAccelerometer;