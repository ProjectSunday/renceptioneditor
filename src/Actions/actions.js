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
	debugger;
	return {
		type: 'MOVE_BLOCK',
		slotId,
		fromIndex,
		toIndex
	}
}

export const insertDropZone = (slotId, index) => {
	return {
		type: 'INSERT_DROPZONE',
		slotId,
		index
	}
}

export const removeDropZone = (slotId, index) => {
	return {
		type: 'REMOVE_DROPZONE',
		slotId,
		index
	}
}