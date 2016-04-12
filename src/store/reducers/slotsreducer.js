import update from 'react-addons-update'
import Immutable from 'immutable'

let DROPZONE_COUNT = 0

const slots = (state = [], action) => {
	switch (action.type) {
		case 'X_MOVE_BLOCK':
			// console.log('slotsreducer.X_MOVE_BLOCK')
			// red(action)
			var { src, dest } = action

			var slots = state.slice(0)

			var srcSlot = slots.fbi(src.slotId)
			var srcIndex = srcSlot.blocks.fibv(src.id)
			srcSlot.blocks.splice(srcIndex, 1)

			var destSlot = slots.fbi(dest.slotId)
			if (dest.id === undefined) {
				var destIndex = destSlot.blocks.length
			} else {
				var destIndex = destSlot.blocks.fibv(dest.id)
			}
			destSlot.blocks.splice(destIndex, 0, src.id)

			// red(slots[0].blocks)
			return slots
		default:
			return state
	}
}

export default slots