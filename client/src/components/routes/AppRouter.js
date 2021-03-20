import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";
import Loader from "../Loader";

import store from "../../store/Store";
import { updateUser } from "../../store/Actions/User";
import { setJwt } from "../../store/Actions/Jwt";
import client from "../../api/client";
import SnackBar from "../SnackBar";

function App() {

	const [ user, setUser ] = useState("");
	const [ loading, setIsLoading ] = useState(true);
	
	const validate = async () => {
		try {
			const { headers, data } = await client().post("auth/verify");
			const response = data.data;

			store.dispatch(updateUser(response));
			store.dispatch(setJwt(headers.authorization));
			setUser(response);
			setIsLoading(false);
			
			if (!data.ok) {
				setUser("");
				setIsLoading(false);
			}
		} catch (error) {
			setUser("");
			setIsLoading(false);
			console.log(error.message);
		}
	};

	useEffect(() => {
		validate();
	}, []);

	return (
		!loading ? (
			user ? (
				<Router>
					<Redirect to='/' />
					<Switch>
						<ProtectedRoute path="/" component={HomePage} />
					</Switch>
				</Router>
			) : (
				<Router>
					<Redirect to='/login' />
					<SnackBar severity="error" message="authentication error" />
					<Switch>
						<AuthRoute path="/login" component={LoginPage} />
					</Switch>
				</Router>
			)
		) : <Loader />
		
	);
}

export default App;
