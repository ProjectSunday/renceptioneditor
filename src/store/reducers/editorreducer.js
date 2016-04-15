import blocks 	from './blocksreducer'
import slots 	from './slotsreducer'

const editor = (state = {}, action) => {
	switch (action.type) {

		//////////////////////////////////////////////////////////////////////////////////////////
		// BLOCKS
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'BLOCKS.BLAH BLAH':
			return blocks(state, action)



		//////////////////////////////////////////////////////////////////////////////////////////
		// SLOTS
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'SLOTS.BLAHBLAHBLAH':
			return slots(state, action)



		//////////////////////////////////////////////////////////////////////////////////////////
		// EDITOR
		//////////////////////////////////////////////////////////////////////////////////////////
		case 'EDITOR.GET_DRAG_SOURCE':
			action.dragSource = Object.assign({}, state.dragSource)
			return state

		case 'EDITOR.SET_DRAG_SOURCE':
			var { source } = action
			var editor = Object.assign({}, state)
			editor.dragSource = source
			return editor


		//////////////////////////////////////////////////////////////////////////////////////////
		// EDITOR
		//////////////////////////////////////////////////////////////////////////////////////////


		//move masterblocks here

		default:
			return state
	}
}

export default editor

