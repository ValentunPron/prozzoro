import { combineReducers } from "redux";

import { data } from './data';
import { user } from './user';

export const rootReducers = combineReducers({
	data, user
})