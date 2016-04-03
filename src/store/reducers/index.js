import { combineReducers } from 'redux'

import blocks 		from './blocksreducer'
// import globals		from './globals'
import masterBlocks from './masterBlocks'
import slots 		from './slotsreducer'
import testing 		from './testingreducer'
import aaatestValues	from './testingvaluesreducer'

export default combineReducers({
	blocks,
	masterBlocks,
	slots,
	testing,
	aaatestValues
})

