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
			let blah = state.map(slot => {
				if (slot.id === action.slotId) {
					let blocks = slot.blocks.slice();
					blocks.splice(0, 0, blocks.splice(2, 1)[0])
					return { ...slot, blocks: blocks }
				} else {
					return slot
				}
			})
			return blah
		case 'MOVE_BLOCK':
			let state = state.slice(0)
			let slot = state.find(s => s.id == action.toSlotId)
			let blocks = slot.blocks
			blocks.splice(action.toIndex, 0, blocks.splice(action.fromIndex, 1)[0])
			return state
		case 'REMOVE_ALL_DROPZONES':
			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)
			slot.dropZones = []
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