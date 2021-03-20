import React from "react";
import { Link } from "react-router-dom";

import colors from "../config/colors";

function AppLink({to, text}) {
	return (
		<div style={styles.container}>
			<Link style={styles.link} to={to}>{text}</Link>
		</div>
	);
}

const styles = {
	container: {
		textAlign: "center",
		color: colors.primary,
		paddingTop: "10px"
	},
	link: {
		textDecoration: "none"
	}
};

export default AppLink;