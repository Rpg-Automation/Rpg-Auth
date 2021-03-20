import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackBar({ message, severity, timeout=3000 }) {
	const [open, setOpen] = useState(true);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Snackbar open={open} autoHideDuration={timeout} onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity}>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
}

export default SnackBar;