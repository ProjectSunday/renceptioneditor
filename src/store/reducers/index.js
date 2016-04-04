import { combineReducers } from 'redux'

import blocks 		from './blocksreducer'
// import globals		from './globals'
import dropZones	from './dropzonesreducer.js'
import editorRight	from './editorrightreducer.js'
import masterBlocks from './masterBlocks'
import slots 		from './slotsreducer'
import testing 		from './testingreducer'
import testValues	from './testingvaluesreducer'

export default combineReducers({
	blocks,
	dropZones,
	editorRight,
	masterBlocks,
	slots,
	testing,
	testValues
})

