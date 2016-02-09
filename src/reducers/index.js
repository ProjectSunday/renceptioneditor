import { combineReducers } from 'redux'
import reducer1 from './reducer1'
import reducer2 from './reducer2'

const reducers = combineReducers({
	reducer1, 
	reducer2
})

export default reducers

