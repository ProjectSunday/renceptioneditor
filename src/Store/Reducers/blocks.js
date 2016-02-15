// import udpate from 'react-addons-update'

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return [
				...state,
				action.block
			]
		case 'DRAG_BLOCK':
			let index = state.findIndex(s => s.id === action.blockId)
			return [
				...state.slice(0, index),
				Object.assign({}, state[index], { name: 'dragging'}),
				...state.slice(index + 1)
			]
		default:
			return state
	}
}

export default blocks