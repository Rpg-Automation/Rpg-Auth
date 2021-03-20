import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import AppTitle from "../components/AppTitle";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const oauth = "/api/auth/discord/dash";

function LoginPage() {
	return (
		<Card style={styles.root}>
			<CardContent style={styles.card}>
				<AppTitle text="Connect Discord" />
				<form action={oauth}>
					<AppButton type="Submit" text="Authorize" />
				</form>
			</CardContent>
		</Card>
	);
}

const styles = {
	root: {
		flex: 1,
		background: colors.discordBlackLight,
		margin: "auto",
		maxWidth: "500px",
		width: "90%",
		marginTop: "30px",
	}
};

export default LoginPage;