// import udpate from 'react-addons-update'

import Immutable from 'immutable'

var BLOCK_ID = 200

const blocks = (state, action) => {
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
		
		case 'SET_BEING_DRAG':
			// trace('SET_BEING_DRAG', action)
			var { id, beingDrag } = action
			var state = { ...state }
			var block = state.blocks.fbi(id)
			block.beingDrag = beingDrag
			// block.update = true
			// block.render = false

			return state


		default:
			return state
	}
}

export default blocks