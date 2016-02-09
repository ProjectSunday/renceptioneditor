const reducer1 = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TEST':
			return [
				...state,
				{ value: action.value }
			]
		default:
			return state
	}
}

export default reducer1