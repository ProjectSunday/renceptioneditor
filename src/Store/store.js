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
			name: 'imageimage'
		},
		{
			id: 104,
			name: 'texttext'
		},
		{
			id: 105,
			name: 'textplusimagetextplusimage'
		}
	],

	slots: [
		{
			id: 1000,
			blocks: [ 100, 101, 102, 103, 104, 105 ],
			dropZones: [
				{ index: 0, visible: false, instant: false },
				{ index: 1, visible: false, instant: false },
				{ index: 2, visible: false, instant: false },
				{ index: 3, visible: false, instant: false },
				{ index: 4, visible: false, instant: false },
				{ index: 5, visible: false, instant: false },
				{ index: 6, visible: false, instant: false }
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
			id: 1000,
			blocks: [ 100, 101, 102, 103, 104, 105 ]
		}
	]

}