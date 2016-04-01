// import update from 'react-addons-update'
// import Immutable from 'immutable'

const testing = (state = [], action) => {
	switch (action.type) {
		case 'TESTING_SET':
			return action.values
		default:
			return state
	}
}

export default testing