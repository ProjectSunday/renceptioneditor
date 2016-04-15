import { combineReducers } from 'redux'

import editor		from './editorreducer'
import masterBlocks from './masterblocksreducer'
import testing 		from './testingreducer'
import testValues	from './testingvaluesreducer'
// import ui			from './uireducer'

export default combineReducers({
	editor,
	masterBlocks,
	testing,
	testValues
})

