import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

let initialState = {

	editor: {

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

		blocks: [],

		slots: [
			{
				id: 1000,
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

		blockHeight: 50,
		showDropZoneDragOverState: false,
		activeTexture: 'texture_clean_gray_paper',
		textures: [ 'texture_clean_gray_paper', 'texture_debut_light', 'texture_fabric_of_squares_gray', 'texture_p5', 'texture_p6', 'texture_skin_side_up', 'texture_subtlenet' ],
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

