import { combineReducers } from 'redux'

import blocks 		from './blocks'
import dropzone		from './dropzone'
import masterBlocks from './masterBlocks'
import slots 		from './slots'

export default combineReducers({
	blocks,
	dropzone,
	masterBlocks,
	slots
})

