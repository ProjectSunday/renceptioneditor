import { combineReducers } from 'redux'

import blocks 		from './blocksreducer'
import editor		from './editorreducer'
import editorRight	from './editorrightreducer'
import masterBlocks from './masterblocksreducer'
import slots 		from './slotsreducer'
import testing 		from './testingreducer'
import testValues	from './testingvaluesreducer'
import ui			from './uireducer'

export default combineReducers({
	blocks,
	editor,
	editorRight,
	masterBlocks,
	slots,
	testing,
	testValues,
	ui
})

