import * as Types from "../ActionTypes/Jwt";

function Reducer(state = "", action) {
	if(action.type == Types.SET_JWT)
	{
		return [
			...state,
			{
				token: action.payload
			}
		];
	}
	return state;
}

export default Reducer;