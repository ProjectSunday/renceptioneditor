// import update from 'react-addons-update'
// import Immutable from 'immutable'

const testValues = (state = [], action) => {
	switch (action.type) {
		case 'TESTVALUES_SET_VALUE':
			var testValues = state.slice(0)

			var testValue = testValues.find(v => v.id == action.id)
			testValue.value = action.value

			return testValues
		case 'TESTING_MOVE_AND_SET':
			console.log('testValues TESTING_MOVE_AND_SET')
			var testValues = state.slice(0)
			var testValue = testValues.find(t => t.id == action.id)
			testValue += 'moved'
			return testValues

		case 'TEST_INITIALIZE_DROPZONE':
			console.log('testing INITIALIZE_DROPZONE')

			var testValues = state.slice(0)
			testValues[1].value = 'changed'


			return testValues
		default:
			return state
	}
}

export default testValues