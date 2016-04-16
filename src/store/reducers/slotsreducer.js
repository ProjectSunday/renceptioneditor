// import Immutable from 'immutable'


const calculateTopPositionOfBlocks = (state, slot) => {
	var top = 0
	slot.blocks.forEach((b, i) => {
		var block = state.blocks.fbi(b)
		block.index = i
		block.top = top
		top += 50
	})
}

const slots = (state, action) => {
	switch (action.type) {
		// case 'MOVE_BLOCK':
		// 	// var { blockId, slotId } = action
		// 	var state = { ...state }
		// 	var src = state.blockSrc
		// 	var dest = state.blockDest

		// 	var slotSrc = state.slots.fbi(src.slotId)
		// 	slotSrc.blocks.rbv(src.blockId)

		// 	var slotDest = state.slots.fbi(dest.slotId)

		// 	var insertIndex = slotDest.blocks.fibv(dest.blockId)
		// 	if (dest.below) { insertIndex++ } 

		// 	slotDest.blocks.splice(insertIndex, 0, src.blockId)

		// 	calculateTopPositionOfBlocks(state, slotSrc)
		// 	if (slotSrc !== slotDest) {
		// 		calculateTopPositionOfBlocks(state, slotDest)
		// 	}

		// 	return state


		case 'MOVE_BLOCK':
			// var { blockId, slotId } = action
			var state = { ...state }
			var src = state.blockSrc
			var dest = state.blockDest

			var slotSrc = state.slots.fbi(src.slotId)
			slotSrc.blocks.rbv(src.blockId)

			var slotDest = state.slots.fbi(dest.slotId)

			var insertIndex = slotDest.blocks.fibv(dest.blockId)
			if (dest.below) { insertIndex++ } 

			slotDest.blocks.splice(insertIndex, 0, src.blockId)

			calculateTopPositionOfBlocks(state, slotSrc)
			if (slotSrc !== slotDest) {
				calculateTopPositionOfBlocks(state, slotDest)
			}

			return state


		default:
			return state
	}
}

export default slots