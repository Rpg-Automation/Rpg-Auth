
import * as Types from "../ActionTypes/User";

function Reducer(state = [], action) {
	if(action.type == Types.UPDATE_USER)
	{
		state.filter(user => user.id !== action.payload.id);

		return [
			...state,
			{
				id: action.payload.id,
				username: action.payload.username,
				discriminator: action.payload.discriminator,
				avatar: action.payload.avatar,
			}
		];
	}
	else if (action.type == Types.REMOVE_USER)
		return [
			state = []
		];
	return state;
}

export default Reducer;