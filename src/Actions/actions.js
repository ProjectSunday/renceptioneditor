let blockId = 2000

export const addBlock = (slotId, block) => {
	return {
		type: 'ADD_BLOCK',
		slotId,
		block: { id: blockId++, ...block }
	}
}