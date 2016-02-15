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