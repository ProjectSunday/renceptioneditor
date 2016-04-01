// import udpate from 'react-addons-update'

import Immutable from 'immutable'

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return [
				...state,
				action.block
			]
		case 'BLOCK_DRAG_START':
			var state = state.slice(0)
			state[2].hide = true


			// slot.dropZones[action.index].enable = false
			// slot.dropZones[action.index + 1].instant = true
			// slot.dropZones[action.index + 1].visible = true
			// slot.blockBeingDrag = slot.blocks[action.index]
			return state
		default:
			return state
	}
}

export default blocks