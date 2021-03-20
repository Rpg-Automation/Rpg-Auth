import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import colors from "../config/colors";

function Loader() {
	return (
		<div style={styles.root}>
			<CircularProgress style={styles.loader} size={150} />
		</div>
	);
}

const styles = {
	root: {
		paddingTop: "50px",
		textAlign: "center"
	},
	loader: {
		color: colors.primary
	}
};

export default Loader;