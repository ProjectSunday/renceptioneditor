	let nextBlockId = 2000

export const addBlock = (slotId, block) => {
	return {
		type: 'ADD_BLOCK',
		slotId,
		block: { id: nextBlockId++, ...block }
	}
}

export const dragBlock = (slotId, index) => {
	return {
		type: 'DRAG_BLOCK',
		slotId,
		index
	}
}

export const moveBlock = (fromSlotId, fromIndex, toSlotId, toIndex) => {
	return {
		type: 'MOVE_BLOCK',
		fromSlotId,
		fromIndex,
		toSlotId,
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

export const resetDropZones = (slotId) => {
	return {
		type: 'RESET_DROPZONES',
		slotId
	}
}
export const showDropZone = (slotId, index, instant) => {
	return {
		type: 'SHOW_DROPZONE',
		slotId,
		index,
		instant
	}
}





