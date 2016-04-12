// import udpate from 'react-addons-update'

import Immutable from 'immutable'

var BLOCK_ID = 200

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'SLOTS+BLOCKS.ADD_BLOCK':
			var { masterBlock, dest } = action
			var blocks = state.slice(0)

			blocks.push({
				id: ++BLOCK_ID,
				name: masterBlock.type
			})

			return blocks
		case 'X_BLOCK_DRAG_START':
			var { id } = action
			var blocks = state.slice(0)
			var block = blocks.fbi(id)
			block.beingDrag = true
			return blocks
		case 'X_BLOCK_DRAG_END':
			var { id } = action
			var blocks = state.slice(0)
			var block = blocks.fbi(id)
			delete block.beingDrag
			return blocks
		default:
			return state
	}
}

export default blocks