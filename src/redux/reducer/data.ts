const initialState = {
	items: [],
	isLoaded: false,
}


export const data = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				items: action.payload,
			};
		default:
			return state
	}
}
