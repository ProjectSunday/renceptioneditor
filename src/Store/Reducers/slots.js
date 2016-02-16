import update from 'react-addons-update'

const slots = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return state.map(slot => 
				slot.id === action.slotId ?
					update(slot, { blocks: { $push: [ action.block.id ] } }) :
					slot
			)
		case 'DRAG_BLOCK':
			let blah = state.map(slot => {
				if (slot.id === action.slotId) {
					let blocks = slot.blocks.slice();
					blocks.splice(0, 0, blocks.splice(2, 1)[0])
					return { ...slot, blocks: blocks }
				} else {
					return slot
				}
			}
			)

			console.log('slots', blah)
			return blah
		default:
			return state
	}
}

export default slots