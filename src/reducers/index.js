import { combineReducers } from 'redux'
import slots from './slots'
import masterBlocks from './masterBlocks'

export default combineReducers({
	masterBlocks,
	slots
})

