import blocks 	from './blocksreducer'
import slots 	from './slotsreducer'

const editor = (state = {}, action) => {
	switch (action.type) {

		//////////////////////////////////////////////////////////////////////////////////////////
		// BLOCKS
		//////////////////////////////////////////////////////////////////////////////////////////


		//////////////////////////////////////////////////////////////////////////////////////////
		// SLOTS
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'DRAG_OVER_SLOT':
			return slots(state, action)


		//////////////////////////////////////////////////////////////////////////////////////////
		// EDITOR
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'EDITOR.DRAG_START':
			var { blockId, slotId } = action
			var state = { ...state }
			state.blockSrc = { blockId, slotId }
			state = blocks(state, { type: 'SET_BEING_DRAG', beingDrag: true })
			return state





		// case 'EDITOR.MOUSE_OVER_BLOCK':
		// 	var { blockId, slotId, below } = action

		// 	var d = state.blockDest
		// 	if ( d && d.slotId === slotId && d.blockId === blockId && d.below === below ) {
		// 		return state
		// 	}

		// 	state.blockDest =  { blockId, slotId, below }

		// 	state = slots(state, { type: 'MOVE_BLOCK' })
			
		// 	return state


		case 'EDITOR.DRAG_END':
			var { blockId, slotId } = action
			var state = { ...state }
			state.blockSrc = { blockId, slotId }
			state = blocks(state, { type: 'SET_BEING_DRAG', beingDrag: false })

			delete state.blockSrc
			delete state.blockDest

			return state





		// case 'EDITOR.SET_DROP_SLOT':
		// 	// trace('EDITOR.SET_DROP_SLOT', action)
		// 	var { id } = action
		// 	var state = { ...state }
		// 	// state.blockDest. = id
		// 	return state


		//////////////////////////////////////////////////////////////////////////////////////////
		// MASTER BLOCKS
		//////////////////////////////////////////////////////////////////////////////////////////

		default:
			return state
	}
}

export default editor

