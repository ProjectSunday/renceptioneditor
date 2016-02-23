let nextBlockId = 2000

export const addBlock = (slotId, block) => {
	return {
		type: 'ADD_BLOCK',
		slotId,
		block: { id: nextBlockId++, ...block }
	}
}

export const dragBlock = (slotId, blockId) => {
	return {
		type: 'DRAG_BLOCK',
		slotId,
		blockId
	}
}

export const moveBlock = (slotId, fromIndex, toIndex) => {
	return {
		type: 'MOVE_BLOCK',
		slotId,
		fromIndex,
		toIndex
	}
}

export const insertDropZone = (slotIndex, blockId, instantaneous, positionAbove) => {
	return {
		type: 'INSERT_DROPZONE',
		slotIndex,
		blockId,
		instantaneous,
		positionAbove
	}
}