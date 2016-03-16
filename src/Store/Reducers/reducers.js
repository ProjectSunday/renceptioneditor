import { combineReducers } from 'redux'

import blocks 		from './blocks'
import masterBlocks from './masterBlocks'
import slots 		from './slots'

export default combineReducers({
	blocks,
	masterBlocks,
	slots
})

