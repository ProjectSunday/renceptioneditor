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


			// let blocks = state.slice(0).blocks

			// let blocks = s.blocks
			// let foo = state.map(slot => {
			// 	if (slot.id === action.slotId) {
			// 		let blocks = slot.blocks.slice();
			// 		blocks.splice(action.toIndex, 0, blocks.splice(action.fromIndex, 1)[0])
			// 		return { ...slot, blocks: blocks }
			// 	} else {
			// 		return slot
			// 	}
			// })
			return state
		// case 'INSERT_DROPZONE':
		// 	let slots = Immutable.List(state)
		// 	let slot = slots.find(s => s.id == action.slotId)

		// 	slot.content.splice(action.index, 0, { id: DROPZONE_COUNT++, type: 'dropzone' })

		// 	return slots.toJS()
		// case 'REMOVE_DROPZONE':
		// 	var deleteIndex = state.findIndex(d => { d.slotId == action.slotId } && d.index == action.index );

		// 	console.log('REMOVE_DROPZONE deleteIndex ', deleteIndex);

		// 	return Immutable.fromJS(state).delete(deleteIndex);

		case 'REMOVE_ALL_DROPZONES':
			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)
			slot.dropZones = []
			return state
		case 'SHOW_DROPZONE':
			// console.log('SHOW_DROPZONE', action)
			var state = state.slice(0)
			var slot = state.find(s => s.id == action.slotId)
			slot.dropZones.forEach(d => { d.visible = d.instant = false })
			slot.dropZones[action.index].visible = true
			if (action.instant) {
				slot.dropZones[action.index].instant = true
			}
			// console.log('SHOW_DROPZONE', state)
			return state
		default:
			return state
	}
}

export default slots