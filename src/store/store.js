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
		],

		slots: [
			{
				id: 1000,
				// blocks: [ 100, 101, 102 ],
				blocks: [],
				dropZone: { index: -1 }
			},
			{
				id: 1001,
				blocks: [],
				dropZone: { index: -1 }
			},
			{
				id: 1002,
				blocks: [],
				dropZone: { index: -1 }
			},
			{
				id: 1003,
				blocks: [],
				dropZone: { index: -1 }
			}
		],

		transitionOn: false

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

}

export default createStore(reducers, initialState, applyMiddleware(thunk))

