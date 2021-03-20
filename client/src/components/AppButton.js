import React from "react";
import { Button } from "@material-ui/core";
import colors from "../config/colors";

function AppButton({onClick, text="click me", color, type, disabled=false}) {
	return (
		<div style={styles.container}>
			<Button
				style={styles.button}
				type={type}
				disabled={disabled}
				onClick={onClick}
				variant="contained"
				color={color}
			> {text}
			</Button>
		</div>
	);
}

const styles = {
	container: {
		margin: "auto",
		color: "salmon",
		textAlign: "center",
		marginTop: "30px",
		marginBottom: "20px"
	},
	button: {
		color: colors.white,
		fontFamily: "system-ui",
		width: "100%",
		paddingTop: "10px",
		paddingBottom: "10px",
		backgroundColor: "#7289da"
	}
};

export default AppButton;