import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	picture: {
		width: 340,
		height: 340,
	},
	container: {
		flex: 1,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		width: "100%",
		height: 110,
	},
	headerText: {
		fontSize: 36,
		paddingTop: 30
	},
	footer: {
		padding: 40,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 0
	},
	footerText: {
		textAlign: "center",
		margin: 3,
		fontSize: 16,
	},
    button: {
		backgroundColor: "black",
		borderRadius: 12,
		width: 300,
		height: 100,
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 30,
		textAlign: "center",
	},
});

export default Styles;