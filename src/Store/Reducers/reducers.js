import { combineReducers } from 'redux'

import blocks 		from './blocks'
import dropzones	from './dropzones'
import masterBlocks from './masterBlocks'
import slots 		from './slots'

export default combineReducers({
	blocks,
	dropzones,
	masterBlocks,
	slots
})

