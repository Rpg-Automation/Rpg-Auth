import React from "react";
import connect from "socket.io-client";

import ProfileNav from "../components/Profile/ProfileNav";
import ProfileControls from "../components/Profile/ProfileControls";
import store from "../store/Store";
import constants from "../config/constants";

function HomePage() {
	const socket = connect(constants.websocketUri);
	const state = store.getState();

	console.log(state);

	socket.on("response", (data) => {
		console.log(data);
	});

	return (
		<>
			<ProfileNav user={state.user[0]} />
			<br />
			<ProfileControls socket={socket} />
		</>
	);
}

export default HomePage;