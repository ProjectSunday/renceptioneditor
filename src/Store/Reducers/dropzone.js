const slots = (state = { slotIndex: null, blockId: null, instantaneous: false, positionAbove: true }, action) => {
	switch (action.type) {
		case 'INSERT_DROPZONE':
			if (state.slotIndex == null  || state.blockId == null || state.slotIndex !== action.slotIndex || state.blockId !== action.blockId || state.positionAbove !== action.positionAbove) {
				let blah = { slotIndex: action.slotIndex, blockId: action.blockId, instantaneous: action.instantaneous, positionAbove: action.positionAbove }
				// console.table([blah])
				return blah
			} else {
				return state
			}
		default:
			return state
	}
}

export default slots

