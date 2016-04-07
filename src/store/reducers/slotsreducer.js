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
		// case 'DRAG_START':
		// 	var slots = state.slice(0)
		// 	var slot = slots.find(s => s.id === action.slotId)
		// 	var childIndex = slot.visibleChildren.findIndex(v => v == action.blockId)
		// 	slot.visibleChildren.splice(childIndex - 1, 2)
		// 	console.log('DRAG_START', slots)
		// 	return slots
		case 'DRAG_END':
			var slots = state.slice(0)

			//toSlotId, fromSlotId, blockId, dropZoneId

			//need blockId, slotId, dropZoneId, dropZoneSlotId

			if (action.fromSlotId === action.toSlotId) {
				var slot = state.find(s => s.id === action.fromSlotId)
				var blocks = slot.blocks
				var fromIndex = blocks.find(b => b.id == action.blockId)
				var toIndex = slot.dropZones.find(d => d.id == action.dropZoneId)
				blocks.splice(toIndex, 0, blocks.splice(fromIndex, 1)[0])
				debugger;

			} else {
				// var fromSlot = state.find(s => s.id === action.fromSlotId)
				// var block = fromSlot.blocks.splice(action.fromIndex, 1)

				// var toSlot = state.find(s => s.id === action.toSlotId)
				// toSlot.blocks.splice(action.toIndex, 0, block[0])
			}

			// var fromSlot = slots.find(s => s.id == action.fromSlotId)

			// var fromBlockId = fromSlot.blocks.splice(fromBloc)

			// var toSlot = slots.find(s => s.id == action.toSlotId)
			// toSlot.blocks.splice(toBlockIndex, 0, fromBlockId)

			console.log('dragendslot', slots)
			return slots
		// case 'SLOT_INITIALIZE_DROPZONES':
		// 	var slots = state.slice(0)
		// 	var slot = slots.find(s => s.id == action.id)
		// 	var dropZones = []
		// 	for (var i = 0; i < slot.blocks.length + 1; i++) {
		// 		dropZones.push(i)
		// 	}
		// 	slot.dropZones = dropZones
		// 	return slots
		case 'MOVE_BLOCK':
			// console.log('slots MOVE_BLOCK')
			var { srcSlotId, srcBlockId, destSlotId, destBlockId } = action

			var slots = state.slice(0)

			var srcSlot = slots.fbi(srcSlotId)
			var srcIndex = srcSlot.blocks.fibv(srcBlockId)
			srcSlot.blocks.splice(srcIndex, 1)

			var destSlot = slots.fbi(destSlotId)
			if (destBlockId === undefined) {
				var destIndex = destSlot.blocks.length
			} else {
				var destIndex = destSlot.blocks.fibv(destBlockId)
			}
			destSlot.blocks.splice(destIndex, 0, srcBlockId)

			return slots
		// case 'RESET_DROPZONES':
		// 	var state = state.slice(0)
		// 	var slot = state.find(s => s.id == action.slotId)
		// 	slot.dropZones.forEach(d => {
		// 		d.enable = d.instant = true
		// 		d.visible = false
		// 	})
		// 	return state
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
		// case 'SLOT_SET_DROPZONES':
		// 	console.log('SLOT_SET_DROPZONES', action)
		// 	var slots = state.slice(0)
		// 	var slot = state.find(s => s.id == action.id)
		// 	slot.dropZones = action.dropZones
		// 	return slots
		// case 'SLOT_SET_DROPZONE_VISIBLE':
		// 	// console.log('SLOT_SET_DROPZONE_VISIBLE', action.blockId)

		// 	var state = state.slice(0)
		// 	var slot = state.find(s => s.id == action.slotId)

		// 	slot.dropZones.forEach(d => {
		// 		d.instant = false
		// 		if (action.below && d.blockAbove == action.blockId) {
		// 			d.visible = true
		// 		} else if (!action.below && d.blockBelow == action.blockId) {
		// 			d.visible = true
		// 		} else {
		// 			d.visible = false
		// 		}
		// 	})
		// 	return state
		default:
			return state
	}
}

export default slots