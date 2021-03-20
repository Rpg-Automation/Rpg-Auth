
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import AppTitle from "../components/AppTitle";
//import colors from "../config/colors";
//import AppButton from "./AppButton";

//import Accordion from "@material-ui/core/Accordion";
//import AccordionSummary from "@material-ui/core/AccordionSummary";
//import AccordionDetails from "@material-ui/core/AccordionDetails";
//import Typography from "@material-ui/core/Typography";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import Avatar from "@material-ui/core/Avatar";


function ProfileCard({ userData }) {
	return (
		<Card style={styles.root}>
			<CardContent style={styles.card}>
				<AppTitle text={userData.username} />
			</CardContent>
		</Card>
	);
}

const styles = {
	root: {
		//flex: 1,
		//background: colors.discordBlackLight,
		//margin: "auto",
		//maxWidth: "500px",
		//width: "90%",
		//marginTop: "30px",
	},
	input: {
		//width: "100%",
		//paddingTop: "10px",
		//marginTop: "10px"
	},
	loader: {
		//paddingTop: "15px"
	}
};

export default ProfileCard;