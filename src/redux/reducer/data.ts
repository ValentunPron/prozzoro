const initialState = {
	items: [],
	next_pages: '',
	prev_pages: ''
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
				next_pages: action.payload
			}
		}
		case 'SET_PREV_PAGE': {
			return {
				...state,
				prev_pages: action.payload
			}
		}
		default:
			return state
	}
}
