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
			let foo = state.map(slot => {
				if (slot.id === action.slotId) {
					let blocks = slot.blocks.slice();
					blocks.splice(action.toIndex, 0, blocks.splice(action.fromIndex, 1)[0])
					return { ...slot, blocks: blocks }
				} else {
					return slot
				}
			})
			return foo
		case 'INSERT_DROPZONE':
			let slots = Immutable.List(state)
			let slot = slots.find(s => s.id == action.slotId)

			slot.content.splice(action.index, 0, { id: DROPZONE_COUNT++, type: 'dropzone' })

			return slots.toJS()
		case 'REMOVE_DROPZONE':
			var deleteIndex = state.findIndex(d => { d.slotId == action.slotId } && d.index == action.index );

			console.log('REMOVE_DROPZONE deleteIndex ', deleteIndex);

			return Immutable.fromJS(state).delete(deleteIndex);
		default:
			return state
	}
}

export default slots