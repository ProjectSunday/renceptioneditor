const slots = (state = { slotIndex: null, blockId: null, instantaneous: false, positionAbove: true }, action) => {
	switch (action.type) {
		case 'INSERT_DROPZONE':
			if (!state.slotIndex || !state.blockId || state.slotIndex !== action.slotIndex || state.blockId !== action.blockId || state.positionAbove !== action.positionAbove) {
				return { slotIndex: action.slotIndex, blockId: action.blockId, instantaneous: action.instantaneous, positionAbove: action.positionAbove }
			} else {
				return state
			}
		default:
			return state
	}
}

export default slots

