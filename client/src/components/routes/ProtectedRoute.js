import React from "react";
import { Route } from "react-router-dom";

function ProtectedRoute({component: Component, ...rest}) {

	return (
		<Route {...rest} render={(props) => (
			<Component {...props} />
		)} />
	);
}

export default ProtectedRoute;