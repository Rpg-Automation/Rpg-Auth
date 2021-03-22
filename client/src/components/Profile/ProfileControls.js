import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import { Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import colors from "../../config/colors";
import store from "../../store/Store";

const Alert =(props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function ProfileControls({ socket }) {

	const state = store.getState();

	const [alertOpts, setAlertOpts] = useState({
		text: "a message",
		severity: "warning",
		open: false
	});

	const handleClose = (event, reason) => {
		if (reason === "clickaway") return;
		setAlertOpts({
			...alertOpts,
			open: false
		});
	};

	const start = () => {
		socket.emit("request-start", state.user[0].id);
		setAlertOpts({
			text: "automation started",
			severity: "success",
			open: true
		});
	};

	const stop = () => {
		socket.emit("request-stop", state.user[0].id);
		setAlertOpts({
			text: "automation stopped",
			severity: "warning",
			open: true
		});
	};

	return (
		<div>
			<Accordion style={styles.accordion}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<SettingsIcon />
				</AccordionSummary>
				<AccordionDetails style={{ display: "block" }}>
					<div style={buttonStyles.root}>
						<Button
							style={buttonStyles.stop}
							onClick={stop}
							variant="contained"
						> Stop
						</Button>
						<Button
							style={buttonStyles.start}
							onClick={start}
							variant="contained"
						> Start
						</Button>
					</div>
				</AccordionDetails>
			</Accordion>
			<div>
				<Snackbar open={alertOpts.open} autoHideDuration={3000} onClose={handleClose}>
					<Alert onClose={handleClose} severity={alertOpts.severity}>
						{alertOpts.text}
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
}

const styles = {
	accordion: {
		display: "block",
		background: colors.discordBlackLight
	}
};

const buttonStyles = {
	root: {
		display: "block",
		margin: "auto",
		maxWidth: "500px"
	},
	stop: {
		paddingLeft: "5px",
		paddingRight: "5px",
		margin: "auto",
		color: colors.white,
		fontFamily: "system-ui",
		width: "50%",
		paddingTop: "10px",
		paddingBottom: "10px",
		backgroundColor: colors.danger
	},
	start: {
		paddingLeft: "5px",
		paddingRight: "5px",
		margin: "auto",
		color: colors.white,
		fontFamily: "system-ui",
		width: "50%",
		paddingTop: "10px",
		paddingBottom: "10px",
		backgroundColor: "lightgreen"
	}
};

export default ProfileControls;