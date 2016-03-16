import { createStore } from 'redux'
import reducers from './Reducers/reducers'

let initialState = {
	
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
	],

	slots: [
		{
			id: 1000,
			content: [
				{ type: 'block', id: 100 },
				{ type: 'block', id: 101 },
				{ type: 'block', id: 102 },
				{ type: 'block', id: 103 }
			]
		}
	]

}


export default createStore(reducers, initialState)

//just a visual example for me to look at, this is not used anywhere
var sampleState = {

	blocks: [],
	
	slots: [
		{
			id: 123,
			content: [
				{ id: 101, type: 'block'},
				{ id: 101, type: 'block'},
				{ id: 0, type: 'dropzone' },
				{ id: 101, type: 'block'}
			]
		}
	]

}