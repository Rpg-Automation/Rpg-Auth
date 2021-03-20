import client from "../api/client";
import store from "../store/Store";
import { removeUser } from "../store/Actions/User";

export function useLogout() {

	const logout = async () => {
		try {
			await client().post("auth/logout");
			store.dispatch(removeUser());
			window.location.reload();
		} catch (error) {
			console.log(error);
			store.dispatch(removeUser());
			window.location.reload();
		}
	};

	return [
		logout
	];
}