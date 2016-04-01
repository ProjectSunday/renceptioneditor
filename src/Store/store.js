import { createStore } from 'redux'
import reducers from './reducers'

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
				{ blockAbove: undefined, blockBelow: 100, instant: false, visible: false },
				{ blockAbove: 100, blockBelow: 101, instant: false, visible: false },
				{ blockAbove: 101, blockBelow: 102, instant: false, visible: false },
				{ blockAbove: 102, blockBelow: 103, instant: false, visible: false },
				{ blockAbove: 103, blockBelow: 104, instant: false, visible: false },
				{ blockAbove: 104, blockBelow: 105, instant: false, visible: false },
				{ blockAbove: 105, blockBelow: undefined, instant: false, visible: false },
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
	],

	nextDropZoneAppearsInstantly: false

}