const slot = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				value: action.value
			}
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

			console.log('action ', action);

			return [
				//hmn
				...state.slots: [

				]
			]

			return state
		default:
			return state
	}
}

export default slots