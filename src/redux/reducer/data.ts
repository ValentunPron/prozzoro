const initialState = {
	items: [],
	next_page: '',
	prev_page: '',
}


export const data = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				items: action.payload,
			};
		case 'SET_NEXT_PAGE': {
			return {
				...state,
				next_page: action.payload
			}
		}
		case 'SET_PREV_PAGE': {
			return {
				...state,
				prev_page: action.payload
			}
		}
		default:
			return state
	}
}
