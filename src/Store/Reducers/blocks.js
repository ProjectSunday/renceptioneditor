// import udpate from 'react-addons-update'

import Immutable from 'immutable'

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return [
				...state,
				action.block
			]
		case 'DRAG_BLOCK':
			let index = state.findIndex(s => s.id === action.blockId)
			var blah = [
				Object.assign({}, state[index], { name: 'dragging'}),
				...state.slice(0, 2)
			]

			console.log('blah', blah);

			return blah
		default:
			return state
	}
}

export default blocks