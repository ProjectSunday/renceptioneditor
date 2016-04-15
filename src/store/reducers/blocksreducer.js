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
			var { beingDrag } = action
			var state = { ...state }
			var block = state.blocks.fbi(state.blockSrc.blockId)
			block.beingDrag = beingDrag
			return state


		default:
			return state
	}
}

export default blocks