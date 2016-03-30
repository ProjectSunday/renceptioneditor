import update from 'react-addons-update'
import Immutable from 'immutable'

let DROPZONE_COUNT = 0

const slots = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return state.map(slot => 
				slot.id === action.slotId ?
					update(slot, { blocks: { $push: [ action.block.id ] } }) :
					slot
			)
		case 'DRAG_BLOCK':
			var state = state.slice(0)
			var slot = state.find(s => s.id === action.slotId)
			slot.dropZones[action.index].enable = false
			slot.dropZones[action.index + 1].instant = true
			slot.dropZones[action.index + 1].visible = true
			return state
		case 'MOVE_BLOCK':
			var state = state.slice(0)

			if (action.fromSlotId === action.toSlotId) {
				if (action.fromIndex < action.toIndex) {
					action.toIndex--
				}
				var slot = state.find(s => s.id === action.fromSlotId)
				var blocks = slot.blocks
				blocks.splice(action.toIndex, 0, blocks.splice(action.fromIndex, 1)[0])
			} else {
				var fromSlot = state.find(s => s.id === action.fromSlotId)
				var block = fromSlot.blocks.splice(action.fromIndex, 1)

				var toSlot = state.find(s => s.id === action.toSlotId)
				toSlot.blocks.splice(action.toIndex, 0, block[0])
			}
			return state
		case 'RESET_DROPZONES':
			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)
			slot.dropZones.forEach(d => {
				d.enable = d.instant = true
				d.visible = false
			})
			return state
		case 'SHOW_DROPZONE':
			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)
			slot.dropZones.forEach(d => { d.visible = d.instant = false })
			slot.dropZones[action.index].visible = true
			if (action.instant) {
				slot.dropZones[action.index].instant = true
			}
			return state
		default:
			return state
	}
}

export default slots