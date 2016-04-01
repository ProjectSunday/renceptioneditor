import { combineReducers } from 'redux'

import blocks 		from './blocksreducer'
import globals		from './globals'
import masterBlocks from './masterBlocks'
import slots 		from './slotsreducer'

export default combineReducers({
	blocks,
	nextDropZoneAppearsInstantly: globals.nextDropZoneAppearsInstantly,
	masterBlocks,
	slots
})

