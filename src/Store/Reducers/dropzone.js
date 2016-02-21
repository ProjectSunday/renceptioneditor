const slots = (state = { slotIndex: null, index: null }, action) => {
	switch (action.type) {
		case 'INSERT_DROPZONE':
			if (!state.slotIndex || !state.index || state.slotIndex !== action.slotIndex || state.index !== action.index) {
				return { slotIndex: action.slotIndex, index: action.index }
			} else {
				return state
			}
		default:
			return state
	}
}

export default slots

