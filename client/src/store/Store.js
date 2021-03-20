import { createStore, combineReducers } from "redux";

import UserReducer from "./Reducers/UserReducer";
import JwtReducer from "./Reducers/JwtReducer";

const reducers = combineReducers({
	user: UserReducer,
	jwt: JwtReducer
});
const store = createStore(reducers);

export default store;