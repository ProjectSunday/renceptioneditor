// import udpate from 'react-addons-update'

import Immutable from 'immutable'

var BLOCK_ID = 200

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'BLOCKS.ADD_BLOCK':
			var { name } = action
			var blocks = state.slice(0)

			action.newBlock = {
				id: BLOCK_ID++,
				name
			}
			blocks.push(action.newBlock)
			return blocks
		case 'BLOCK+UI.DRAG_START':
			// red('BLOCK --> BLOCK+UI.DRAG_START')
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

		case 'BLOCKS.SET_BEING_DRAG':
			var { id } = action
			var blocks = state.slice(0)
			var block = blocks.fbi(id)
			block.beingDrag = true
			block.update = true
			block.render = false

			return blocks

		case 'BLOCKS.SET_DROPZONE':
			var { id, below, instant } = action
			var blocks = state.slice(0)
			var prevBlock = blocks.find(b => b.dropZone)
			if (prevBlock) {
				delete prevBlock.dropZone
				prevBlock.update = true
				prevBlock.render = false
			}

			var block = blocks.fbi(id)
			block.dropZone = { below, instant }
			block.update = true
			block.render = false
			return blocks

		case 'BLOCKS.UPDATE_SUCCESS':
			var { id } = action
			var blocks = state.slice(0)
			var block = blocks.fbi(id)
			delete block.update
			return blocks

		case 'BLOCKS.RENDER_SUCCESS':
			var { id } = action
			var blocks = state.slice(0)
			var block = blocks.fbi(id)
			delete block.render
			return blocks

		default:
			return state
	}
}

export default blocks