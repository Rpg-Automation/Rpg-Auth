import React from "react";

import colors from "../config/colors";

function AppTitle({text}) {
	return (
		<div style={styles.container}>
			<h3 style={styles.title}>
				{text}
			</h3>
		</div>
	);
}

const styles = {
	container: {
		flex: 1,
		margin: "auto",
		textAlign: "center"
	},
	title: {
		color: colors.primary,
		fontSize: "25px",
		marginTop: "10px"
	}
};

export default AppTitle;