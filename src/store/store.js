import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

let initialState = {

	editor: {

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
				blocks: [ 100, 101, 102, 103, 104, 105 ]
			}
			// {
			// 	id: 1001,
			// 	blocks: []
			// 	// blocks: [ 102, 103, 104, 105 ]
			// },
			// {
			// 	id: 1002,
			// 	blocks: []
			// 	// blocks: [ 102, 103, 104, 105 ]
			// },
			// {
			// 	id: 1003,
			// 	blocks: []
			// 	// blocks: [ 102, 103, 104, 105 ]
			// }
		],

		masterBlocks: [
			{
				id: 500,
				type: 'image',
				dragImage: 'imageblock-drag.png',
				src: 'imageblock.png'
			},
			{
				id: 501,
				type: 'text',
				dragImage: 'textblock-drag.png',
				src: 'textblock.png'
			},
			{
				id: 502,
				type: 'textplusimage',
				dragImage: 'textplusimageblock-drag.png',
				src: 'textplusimageblock.png'
			}
		]


	},


	testValues: [
		{ id: 0, value: 'zero' },
		{ id: 1, value: 'one' },
		{ id: 2, value: 'two' },
		{ id: 3, value: 'three' }
	],

	testing: {
		childOne: [ 0, 1, 2, 3 ],
		childTwo: 'blah',
		childTwoDirect: {
			blah: 'blahvalue',
			foo: 'foovalue'
		}
	}

	// ui: {
	// 	destDropZone: {
	// 		id: null,
	// 		slotId: null
	// 	},
	// 	srcBlock: {
	// 		id: null,
	// 		slotId: null
	// 	},
	// 	slots: []
	// }

}

export default createStore(reducers, initialState, applyMiddleware(thunk))

//just a visual example for me to look at, this is not used anywhere
var sampleState = {

	blocks: [],
	
	slots: [
		{
			id: 1000,
			blocks: [ 100, 101, 102, 103, 104, 105 ]
		}
	],

	ui: {
		srcBlock: {
			// slotId,
			// blockId
		},
		slots: [{
			id: 1000,
			activeDropZoneId: 1,
			children:[],
			dropZones: []
		}]
	}

}