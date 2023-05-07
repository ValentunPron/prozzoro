const initialState = {
	items: [],
	user: {}
}


export const user = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				items: action.payload
			};
		case 'ADD_USER':
			return {
				...state,
				items: [...state.items, action.payload],
			}
		default:
			return state
	}
}
