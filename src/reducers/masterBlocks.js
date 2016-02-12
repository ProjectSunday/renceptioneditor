const initialState = [
	{ 
		type: 'image',
		dragImage: 'images/dragimages/image.png',
		src: 'images/imageblock.png'
		// src: 'http://www.adiumxtras.com/images/thumbs/garfield_dock_icon_1_15299_5372_thumb.png'
	},
	{ 
		type: 'text',
		dragImage: 'images/dragimages/text.png',
		src: 'images/textblock.png'
		// src: 'http://www.adiumxtras.com/images/thumbs/garfield_dock_icon_1_15299_5372_thumb.png'
	},
	{ 
		type: 'textplusimage',
		dragImage: 'images/dragimages/textplusimage.png',
		src: 'images/textplusimageblock.png'
		// src: 'http://www.adiumxtras.com/images/thumbs/garfield_dock_icon_1_15299_5372_thumb.png'
	}
]

const masterBlocks = (state = initialState, action) => {
	return state;
}

export default masterBlocks