import * as Types from "../ActionTypes/Jwt";

export const setJwt = (token) => ({
	type: Types.SET_JWT,
	payload: token
});