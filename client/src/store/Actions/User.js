import * as Types from "../ActionTypes/User";

export const updateUser = user => ({
	type: Types.UPDATE_USER,
	payload: {
		id: user.id,
		username: user.username,
		discriminator: user.discriminator,
		avatar: user.avatar
	}
});

export const removeUser = () => ({
	type: Types.REMOVE_USER,
	payload: ""
});