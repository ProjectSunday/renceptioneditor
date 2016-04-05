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

	dropZones: [
		{
			id: 200,
			visible: false,
			instant: false
		},{
			id: 201,
			visible: false,
			instant: false
		},{
			id: 202,
			visible: false,
			instant: false
		},{
			id: 203,
			visible: false,
			instant: false
		},{
			id: 204,
			visible: false,
			instant: false
		},{
			id: 205,
			visible: false,
			instant: false
		},{
			id: 299,
			visible: false,
			instant: false
		}
	],


	editorRight: {
		slots: [ 1000 ]
	},

	slots: [
		{
			id: 1000,
			blocks: [ 100, 101, 102, 103, 104, 105 ],
			dropZones: [200, 201, 202, 203, 204, 205, 299],
			update: false,
			visibleChildren: [ 200, 100, 201, 101, 202, 102, 203, 103, 204, 104, 205, 105, 299 ]
		}
	],


	testValues: [
		{ id: 0, value: 'zero' },
		{ id: 1, value: 'one' },
		{ id: 2, value: 'two' },
		{ id: 3, value: 'three' }
	],

	testing: {
		childOne: [ 0, 1, 2, 3 ],
		childTwo: 'blah'
	}
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