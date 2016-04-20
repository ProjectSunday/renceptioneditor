import { combineReducers } from 'redux'

import editor		from './editorreducer'
import testing 		from './testingreducer'
import testValues	from './testingvaluesreducer'

export default combineReducers({
	editor,
	testing,
	testValues
})

