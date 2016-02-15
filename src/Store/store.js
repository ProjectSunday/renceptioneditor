import { createStore } from 'redux'
import reducers from './Reducers/reducers'

let initialState = {
	slots: [
		{
			id: 100,
			blocks: [ 100, 101, 102 ]
		}
	],
	blocks: [
		{
			id: 100,
			name: 'image'
		},
		{
			id: 101,
			name: 'text'
		},
		{
			id: 102,
			name: 'textplusimage'
		}
	]
}


export default createStore(reducers, initialState)