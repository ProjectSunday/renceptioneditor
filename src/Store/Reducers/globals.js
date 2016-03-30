export default {
	nextDropZoneAppearsInstantly(state = false, action) {
		switch (action.type) {
			case 'SET_NEXT_DROPZONE_INSTANT':
				console.log('SET_NEXT_DROPZONE_INSTANT', action.value)
				return action.value
			default:
				return state
		}
	}
}