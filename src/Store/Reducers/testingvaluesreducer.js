// import update from 'react-addons-update'
// import Immutable from 'immutable'

const testValues = (state = [], action) => {
	switch (action.type) {
		case 'TESTVALUES_SET_VALUE':
			var testValues = state.slice(0)

			var testValue = testValues.find(v => v.id == action.id)
			testValue.value = action.value

			return testValues
		default:
			return state
	}
}

export default testValues