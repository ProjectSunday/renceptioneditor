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
		// case 'SLOT_DRAG_START':
		// 	// console.log('SLOT_DRAG_START')
		// 	var state = state.slice(0)
		// 	var slot = state.find(s => s.id === action.slotId)
		// 	slot.dragBlock = action.blockId

		// 	var index = slot.dropZones.findIndex(d => d.blockBelow == action.blockId)

		// 	slot.dropZones[index + 1].blockAbove = slot.dropZones[index].blockAbove

		// 	slot.dropZones[index].blockAbove = undefined
		// 	slot.dropZones[index].blockBelow = undefined

		// 	slot.dropZones[index + 1].instant = true
		// 	slot.dropZones[index + 1].visible = true

		// 	return state

		case 'SLOT_INITIALIZE_DROPZONES':
			var slots = state.slice(0)
			var slot = slots.find(s => s.id == action.id)
			var dropZones = []
			for (var i = 0; i < slot.blocks.length + 1; i++) {
				dropZones.push(i)
			}
			slot.dropZones = dropZones
			return slots
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
			console.log('SHOW_DROPZONE index:', action.index)
			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)
			slot.dropZones.forEach(d => { d.visible = d.instant = false })
			slot.dropZones[action.index].visible = true
			if (action.instant) {
				slot.dropZones[action.index].instant = true
			}
			return state
		case 'SLOT_SET_DROPZONES':
			console.log('SLOT_SET_DROPZONES', action)
			var slots = state.slice(0)
			var slot = state.find(s => s.id == action.id)
			slot.dropZones = action.dropZones
			return slots
		case 'SLOT_SET_DROPZONE_VISIBLE':
			// console.log('SLOT_SET_DROPZONE_VISIBLE', action.blockId)

			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)

			slot.dropZones.forEach(d => {
				d.instant = false
				if (action.below && d.blockAbove == action.blockId) {
					d.visible = true
				} else if (!action.below && d.blockBelow == action.blockId) {
					d.visible = true
				} else {
					d.visible = false
				}
			})
			return state
		default:
			return state
	}
}

export default slots