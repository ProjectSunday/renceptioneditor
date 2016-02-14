// const block = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_BLOCK':
// 			return Object.assign(
// 				{},
// 				action.block
// 			)
// 		default: 
// 			return state
// 	}
// }

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return [
				...state,
				action.block
			]
		default:
			return state
	}
}

export default blocks