const reducer2 = (state = [], action) => {
	switch (action.type) {
		case 'BLAH2':
			return [
				...state,
				{ thing: 'blah2' }
			]
		default:
			return state
	}
}

export default reducer2