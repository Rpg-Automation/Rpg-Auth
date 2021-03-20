import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import colors from "../../config/colors";
import AppModal from "../AppModal";

function ProfileNav({ user }) {

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);	
	const handleClose = () => setOpen(false);
	
	return (
		<div style={styles.nav}>
			<Tooltip title={`${user.username}#${user.discriminator}`} TransitionComponent={Zoom}>
				<Avatar className="avatar" onClick={handleOpen} alt={user.username} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=256`} />
			</Tooltip>
			<AppModal open={open} handleClose={handleClose} />
		</div>
	);
}

const styles = {
	nav: {
		padding: "15px",
		background: colors.discordBlackLight,
		boxShadow: ".5px .5px 8px .5px black"
	}
};

export default ProfileNav;