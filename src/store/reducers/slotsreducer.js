import update from 'react-addons-update'
import Immutable from 'immutable'

const slots = (state = [], action) => {
	switch (action.type) {
		case 'X_MOVE_BLOCK':
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

			return slots

		case 'SLOTS.ADD_BLOCK':
			const { dest, blockId } = action
			var slots = state.slice(0)
			var slot = slots.fbi(dest.slotId)

			slot.blocks.splice(dest.id, 0, blockId)
			return slots

		default:
			return state
	}
}

export default slots