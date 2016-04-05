// import udpate from 'react-addons-update'

import Immutable from 'immutable'

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return [
				...state,
				action.block
			]
		case 'DRAG_START':
			var blocks = state.slice(0)
			var block = blocks.find(b => b.id == action.blockId)
			block.visible = false
			return blocks
		default:
			return state
	}
}

export default blocks