import React from "react";

import ProfileNav from "../components/Profile/ProfileNav";

import store from "../store/Store";

function HomePage() {
	const state = store.getState();

	console.log(state);

	return (
		<ProfileNav user={state.user[0]} />
	);
}

export default HomePage;