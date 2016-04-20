// import blocks 	from './blocksreducer'
// import slots 	from './slotsreducer'


import Immutable from 'immutable'


const resetAllSlotsAndBlocks = (state) => {
	delete state.blockSrc
	delete state.blockDest

	state.slots.all({ dropZone: { index: -1 }, updateTimeStamp: new Date() })
	state.blocks.forEach(b => {
		b.beingDrag = false
		delete b.index
	})
	
}


const editor = (state = {}, action) => {
	switch (action.type) {

		case 'DRAG_START':
			var { blockId, slotId, index} = action

			var state = { ...state }

			state.blocks.fbi(blockId).beingDrag = true

			var slot = state.slots.fbi(slotId)
			slot.dropZone.index = index

			state.slots.fbi(slotId).blocks.rbv(blockId)


			state.blockSrc = { blockId, slotId }  //don't trust the component to give you the proper one

			return state




		case 'DRAG_OVER':
			var { index, slotId } = action

			var b = state.blockDest
			if (b && b.index === index && b.slotId === slotId) { return state }

			var state = { ...state }

			r('dragover action', action)

			var slot = state.slots.fbi(slotId)
			var i = 0
			slot.blocks.forEach(b => {
				if (i === action.index) { i++ }
				state.blocks.fbi(b).index = i++
			})


			slot.dropZone = { index }

			// l('dragover dz', slot.dropZone)

			state.blockDest = { index, slotId }

			return state



		case 'DRAG_END':
			// var { slotId } = action

			var state = Immutable.fromJS(state).toJS()

			var src = state.blockSrc
			var dest = state.blockDest

			//insert block into dest
			var slot = state.slots.fbi(dest.slotId)
			slot.blocks.splice(dest.index, 0, src.blockId)

			resetAllSlotsAndBlocks(state)


			return state


		default:
			return state
	}
}

export default editor

