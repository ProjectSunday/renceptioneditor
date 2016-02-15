import update from 'react-addons-update'

const slots = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return state.map(slot => 
				slot.id === action.slotId ?
					update(slot, { blocks: { $push: [ action.block.id ] } }) :
					slot
			)
		default:
			return state
	}
}

export default slots