import { createStore } from 'redux'
import reducers from './Reducers/reducers'

let initialState = {
	slots: [
		{
			id: 100,
			blocks: [ 100, 101, 102, 103, 104, 105 ]
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
		},
		{
			id: 103,
			name: 'imageimageimageimage ============================='
		},
		{
			id: 104,
			name: 'texttexttexttext ================================='
		},
		{
			id: 105,
			name: 'textplusimagetextplusimagetextplusimagetextplusimage'
		}
	]
}


export default createStore(reducers, initialState)