const initialState = [
	{ 
		type: 'image',
		dragImage: 'imageblock-drag.png',
		src: 'imageblock.png'
		// src: 'http://www.adiumxtras.com/images/thumbs/garfield_dock_icon_1_15299_5372_thumb.png'
	},
	{ 
		type: 'text',
		dragImage: 'textblock-drag.png',
		src: 'textblock.png'
		// src: 'http://www.adiumxtras.com/images/thumbs/garfield_dock_icon_1_15299_5372_thumb.png'
	},
	{ 
		type: 'textplusimage',
		dragImage: 'textplusimageblock-drag.png',
		src: 'textplusimageblock.png'
		// src: 'http://www.adiumxtras.com/images/thumbs/garfield_dock_icon_1_15299_5372_thumb.png'
	}
]

const masterBlocks = (state = initialState, action) => {
	return state;
}

export default masterBlocks