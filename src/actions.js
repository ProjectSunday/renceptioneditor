
export const masterBlockDragEnd = (id) => {
	STORE.dispatch((dispatch, getState) => {
		var state = getState()

		var dest = state.ui.destDropZone

		if (dest.id !== null) {
			var { newBlock } = dispatch({
				type: 'BLOCKS.ADD_BLOCK',
				name: state.masterBlocks.fbi(id).type
			})
			dispatch({
				type: 'SLOTS.ADD_BLOCK',
				dest,
				blockId: newBlock.id,
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