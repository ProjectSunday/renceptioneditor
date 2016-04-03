// import update from 'react-addons-update'
// import Immutable from 'immutable'

const testing = (state = [], action) => {
	switch (action.type) {
		case 'TESTING_SET':
			return action.values
		case 'TESTING_MOVE_AND_SET':
			console.log('testing TESTING_MOVE_AND_SET')
		
			var testing = state.slice(0)

			testing.splice(action.toIndex, 0, testing.splice(action.fromIndex, 1)[0])

			return testing
		default:
			return state
	}
}

export default testing