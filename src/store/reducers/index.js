import { combineReducers } from 'redux'

import blocks 		from './blocksreducer'
import editorRight	from './editorrightreducer'
import masterBlocks from './masterBlocks'
import slots 		from './slotsreducer'
import testing 		from './testingreducer'
import testValues	from './testingvaluesreducer'
import ui			from './uireducer'

export default combineReducers({
	blocks,
	editorRight,
	masterBlocks,
	slots,
	testing,
	testValues,
	ui
})

