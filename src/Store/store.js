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
			dropZones: []
		}
	],

	// dropZones: [],


	aaatestValues: [
		{ id: 0, value: 'zero' },
		{ id: 1, value: 'one' },
		{ id: 2, value: 'two' },
		{ id: 3, value: 'three' }
	],

	testing: [ 0, 1, 2, 3 ]
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