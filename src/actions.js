export const masterBlockDragEnd = (id) => {
	red('masterBlockDragEnd id:', id)

	//check valid dropzone

	//add block

	//reset all ui slots

	//reset all dropzone


	STORE.dispatch((dispatch, getState) => {
		var state = getState()

		var dest = state.ui.destDropZone

		if (dest.id !== null) {
			var children = state.ui.slots.fbi(dest.id).children
			var childIndex = children.findIndex((c, i) => c === dest.id && i % 2 == 0)
			

			dispatch({
				type: 'SLOTS+BLOCKS.ADD_BLOCK',
				masterBlock: state.masterBlocks.fbi(id),
				dest: { id: children[childIndex + 1], slotId: dest.slotId }
			})
		}

		state.slots.forEach(s => {
			dispatch({
				type: 'UI_RESET_SLOT',
				slotId: s.id,
				blocks: s.blocks
			})
		})

		dispatch({ 
			type: 'UI_RESET_SLOT_DROPZONES' 
		})

		dispatch({
			type: 'UI_SET_DEST_DROPZONE',
			id: null,
			slotId: null
		})
	})



}