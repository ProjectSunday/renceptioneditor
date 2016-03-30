import { combineReducers } from 'redux'

import blocks 		from './blocks'
import globals		from './globals'
import masterBlocks from './masterBlocks'
import slots 		from './slots'

export default combineReducers({
	blocks,
	nextDropZoneAppearsInstantly: globals.nextDropZoneAppearsInstantly,
	masterBlocks,
	slots
})

