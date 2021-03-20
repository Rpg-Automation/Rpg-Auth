import React from "react";

import AppTitle from "../components/AppTitle";
import AppButton from "../components/AppButton";

function ErrorScreen() {
	return (
		<div style={styles.root}>
			<AppTitle
				style={styles.error}
				text="404 Not Found :("
			/>
			<form action="/">
				<AppButton type="Submit" text="Home" />
			</form>
		</div>
	);
}

const styles = {
	root: {
		flex: 1,
		margin: "auto",
		maxWidth: "500px",
		width: "90%",
		marginTop: "30px",
		textAlign: "center",
		color: "#fa8072"
	},
	error: {
		color: "#fa8072"
	}
};
export default ErrorScreen;