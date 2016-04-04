// import Immutable from 'immutable'

const dropZones = (state = [], action) => {
	switch (action.type) {
		case 'DROPZONE_DELETE_ALL':
			return []
		case 'DROPZONE_ADD_ALL':
			var dropZones = state.slice(0)
			dropZones.push(action.dropZones)
			return dropZones
		default:
			return state
	}
}

export default dropZones

