import { combineReducers } from 'redux'

import blocks 		from './blocks'
import slots 		from './slots'
import masterBlocks from './masterBlocks'

export default combineReducers({
	blocks,
	masterBlocks,
	slots
})

