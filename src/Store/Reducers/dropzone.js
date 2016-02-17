import update from 'react-addons-update'

const slots = (state = { slotIndex: null, blockIndex: null }, action) => {
	switch (action.type) {
		case 'INSERT_DROPZONE':
			if (!state.slotIndex || !state.blockIndex || state.slotIndex !== action.slotIndex || state.blockIndex !== action.blockIndex) {
				return { slotIndex: action.slotIndex, blockIndex: action.blockIndex }
			} else {
				return state
			}
	// 	case 'ADD_BLOCK':
	// 		return state.map(slot => 
	// 			slot.id === action.slotId ?
	// 				update(slot, { blocks: { $push: [ action.block.id ] } }) :
	// 				slot
	// 		)
	// 	case 'DRAG_BLOCK':
	// 		let blah = state.map(slot => {
	// 			if (slot.id === action.slotId) {
	// 				let blocks = slot.blocks.slice();
	// 				blocks.splice(0, 0, blocks.splice(2, 1)[0])
	// 				return { ...slot, blocks: blocks }
	// 			} else {
	// 				return slot
	// 			}
	// 		}
	// 		)

	// 		console.log('slots', blah)
	// 		return blah
	// 	case 'MOVE_BLOCK':
	// 		let foo = state.map(slot => {
	// 			if (slot.id === action.slotId) {
	// 				let blocks = slot.blocks.slice();
	// 				blocks.splice(action.toIndex, 0, blocks.splice(action.fromIndex, 1)[0])
	// 				return { ...slot, blocks: blocks }
	// 			} else {
	// 				return slot
	// 			}
	// 		})
	// 		// console.log('foo', foo[0].blocks)
	// 		return foo
		default:
			return state
	}
}

export default slots

