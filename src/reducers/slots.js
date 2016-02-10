let id = 0;

const slot = (state, action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return Object.assign(
				{},
				action.block,
				{
					id: id++
				}
			)
		default: 
			return state
	}
}

const slots = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TEST':
			return [
				...state,
				{ value: action.value }
			]
		case 'ADD_BLOCK':
			return [
				...state,
				slot(undefined, action)
			]
		default:
			return state
	}
}

export default slots