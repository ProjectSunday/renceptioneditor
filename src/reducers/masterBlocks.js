const initialState = [
	{ 
		type: 'image',
		dragImage: 'imageblock-drag.png',
		src: 'imageblock.png'
	},
	{ 
		type: 'text',
		dragImage: 'textblock-drag.png',
		src: 'textblock.png'
	},
	{ 
		type: 'textplusimage',
		dragImage: 'textplusimageblock-drag.png',
		src: 'textplusimageblock.png'
	}
]

const masterBlocks = (state = initialState, action) => {
	return state;
}

export default masterBlocks