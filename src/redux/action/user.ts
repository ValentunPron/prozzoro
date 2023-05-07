import axios from "axios";

export const fetchUser = () => (dispatch: Function) => {
	axios('./db.json').then(({ data }) => {
		dispatch(setUser(data.user));
	})
}

export const setUser = (items: any) => ({
	type: 'SET_USER',
	payload: items,
});

export const addUser = (userObj: any) => ({
	type: 'ADD_USER',
	payload: userObj,
});
