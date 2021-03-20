import "dotenv/config";
import React from "react";
import AppRouter from "./components/routes/AppRouter";

function App() {
	return (
		<div style={styles.root} >
			<AppRouter />
		</div>
	);
}

const styles = {
	root: {
		flex: 1,
		margin: "auto",
		textAlign: "center"
	}
};

export default App;
