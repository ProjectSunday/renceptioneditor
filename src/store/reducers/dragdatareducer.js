// import Immutable from 'immutable'

const dragData = (state = [], action) => {
	switch (action.type) {
		case 'DRAGDATA_ADD':
			var data = state.slice(0)
			data.push(action.dragData)
			return data
		default:
			return state
	}
}

export default dragData

