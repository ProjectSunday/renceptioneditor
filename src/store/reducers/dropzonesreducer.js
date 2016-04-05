// import Immutable from 'immutable'

const dropZones = (state = [], action) => {
	switch (action.type) {
		case 'DROPZONE_DELETE_ALL':
			return []
		case 'DROPZONE_SHOW':
			var dropZones = state.slice(0)

			var dz = dropZones.find(d => d.visible)
			dz.visible = dz.instant = false

			// dropZones.find(d => d.visible).visible = false
			
			dropZones.find(d => d.id === action.dropZoneId).visible = true

			return dropZones

		case 'DRAG_START':
			var dropZones = state.slice(0)
			var dropZone = dropZones.find(d => d.id == action.dropZoneId)
			dropZone.visible = true
			dropZone.instant = true
			return dropZones
		default:
			return state
	}
}

export default dropZones

