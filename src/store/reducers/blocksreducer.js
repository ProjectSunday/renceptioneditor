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
			// console.log('DRAG_START')
			var blocks = state.slice(0)
			var block = blocks.find(b => b.id == action.blockId)
			block.visible = false
			return blocks
		case 'BLOCK_DRAG_END':
			// console.log('BLOCK_DRAG_END')
			var blocks = state.slice(0)
			blocks.forEach(b => b.visible = true)
			return blocks
		case 'SLOT_MOVE_BLOCK':
			// console.log('SLOT_MOVE_BLOCK')
			var { blockId } = action
			var blocks = state.slice(0)
			blocks.fbi(blockId).visible = true
			return blocks
		default:
			return state
	}
}

export default blocks