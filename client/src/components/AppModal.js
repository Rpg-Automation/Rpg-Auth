import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { useLogout } from "../hooks/Generic";

function AppModal({handleClose, open}) {
	const [ logout ] = useLogout();

	return (
		<Modal
			style={styles.modal}
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div style={styles.paper}>
					<AppButton onClick={ logout } text="Logout" />
				</div>
			</Fade>
		</Modal>
	);
}

const styles = {
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		borderRadius: "9px",
		padding: "10px",
		paddingLeft: "50px",
		paddingRight: "50px",
		outline: "none",
		backgroundColor: colors.discordBlackLight
	}
};

export default AppModal;