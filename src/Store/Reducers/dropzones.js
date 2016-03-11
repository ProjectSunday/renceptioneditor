import Immutable from 'immutable'

const dropzones = (state = [], action) => {
	switch (action.type) {
		case 'INSERT_DROPZONE':
			return Immutable.fromJS(state).insert({ slotId: action.slotId, index: action.index })
		case 'REMOVE_DROPZONE':
			var deleteIndex = state.findIndex(d => { d.slotId == action.slotId } && d.index == action.index );

			console.log('REMOVE_DROPZONE deleteIndex ', deleteIndex);

			return Immutable.fromJS(state).delete(deleteIndex);
		default:
			return state
	}
}

export default dropzones

