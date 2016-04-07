// let nextBlockId = 2000

export const initializeSlotUiChildren = (slotId, blocks) => {
	STORE.dispatch({
		type: 'UI_INITILIZE_SLOT_CHILDREN',
		slotId,
		blocks
	})
}

//////////////////////////////////////////////////////////////////////////////////////////////
// BLOCKS
//////////////////////////////////////////////////////////////////////////////////////////////
export const blockMove = (srcSlotId, srcBlockId, destSlotId, destBlockId) => {
	STORE.dispatch({
		type: 'MOVE_BLOCK',
		srcSlotId,
		srcBlockId,
		destSlotId,
		destBlockId
	})
}

export const blockDragEnd = () => {
	STORE.dispatch({
		type: 'BLOCK_DRAG_END'
	})
}


