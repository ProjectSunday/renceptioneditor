// import update from 'react-addons-update'
// import Immutable from 'immutable'

const testing = (state = [], action) => {
	switch (action.type) {
		case 'TESTING':
			var ui = Object.assign({}, state)

			ui.childTwoDirect.blah = "blahchanged"

			return ui
		default:
			return state
	}
}

export default testing