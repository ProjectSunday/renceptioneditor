import blocks 	from './blocksreducer'
import slots 	from './slotsreducer'

const editor = (state = {}, action) => {
	switch (action.type) {

		//////////////////////////////////////////////////////////////////////////////////////////
		// BLOCKS
		//////////////////////////////////////////////////////////////////////////////////////////
		// case 'BLOCKS.SET_BEINGDRAG':
			// return { ...state, ...blocks(state, action) }



		//////////////////////////////////////////////////////////////////////////////////////////
		// SLOTS
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'SLOTS.BLAHBLAHBLAH':
			return slots(state, action)



		//////////////////////////////////////////////////////////////////////////////////////////
		// EDITOR
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'EDITOR.DRAG_START':
			var { id } = action
			var blockAction = { type: 'SET_BEING_DRAG', id, beingDrag: true }
			var state = { ...state, ...blocks(state, blockAction)}
			return state


		case 'EDITOR.MOUSE_OVER_BLOCK':
			var { slotId, index } = action
			state = slots(state, { type: 'SET_TOP_FOR_ALL_BLOCKS_IN_SLOT', slotId, index })
			state.dropIndex = index
			return state


		case 'EDITOR.DRAG_END':
			trace('EDITOR.DRAG_END', action)
			var { blockId, slotId } = action

			var blockAction = { type: 'SET_BEING_DRAG', id: blockId, beingDrag: false }
			var state = { ...state, ...blocks(state, blockAction)}

			if (state.dropSlot !== undefined) {
				state = slots(state, { ...action, type: 'MOVE_BLOCK' })
			}

			state = slots(state, { type: 'SET_TOP_FOR_ALL_SLOTS_ALL_BLOCKS' })

			state.dropIndex = undefined
			state.dropSlot = undefined
			
			red(state)
			return state


		case 'EDITOR.SET_DROP_SLOT':
			// trace('EDITOR.SET_DROP_SLOT', action)
			var { id } = action
			var state = { ...state }
			state.dropSlot = id
			return state


		//////////////////////////////////////////////////////////////////////////////////////////
		// MASTER BLOCKS
		//////////////////////////////////////////////////////////////////////////////////////////

		default:
			return state
	}
}

export default editor

