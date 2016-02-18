import update from 'react-addons-update'

let initialState = {
	slotIndex: null,
	blockIndex: null,
	previous: {
		slotIndex: null, 
		blockIndex: null
	}
}

const slots = (state = initialState, action) => {
	switch (action.type) {
		case 'INSERT_DROPZONE':
			if (state.slotIndex === null || state.blockIndex === null || state.slotIndex !== action.slotIndex || state.blockIndex !== action.blockIndex) {
				return { 
					slotIndex: action.slotIndex, 
					blockIndex: action.blockIndex,
					previous: {
						slotIndex: state.slotIndex,
						blockIndex: state.blockIndex
					}
				}
			} else {
				return state
			}
		default:
			return state
	}
}

export default slots

