import Immutable from 'immutable'


const ipsum = 'Bacon ipsum dolor amet short ribs hamburger chicken, fatback capicola tri-tip kielbasa biltong cow doner meatball meatloaf flank alcatra. Bresaola porchetta tenderloin, ground round pork chop beef salami. Capicola doner alcatra short ribs pancetta. Shank leberkas kevin frankfurter porchetta hamburger filet mignon tail bacon shankle turducken beef ribs flank chuck ham hock. Ham leberkas frankfurter, drumstick t-bone tongue alcatra ball tip. Porchetta brisket andouille swine, tri-tip pancetta ham flank cupim ball tip pastrami strip steak jerky. Shoulder chuck hamburger pork belly ball tip bacon cow.';


const sampleBlocks = [
	{
		id: 100,
		name: 'imagename',
		type: 'image',
		imageSrc: 'defaultimage.svg'
	},
	{
		id: 101,
		name: 'textname',
		type: 'text',
		text: ipsum
	},
	{
		id: 102,
		name: 'textname',
		type: 'text',
		text: ipsum
	},
	{
		id: 103,
		name: 'textplusimagename',
		type: 'textplusimage',
		imageSrc: 'defaultimage.svg',
		text: ipsum
	},
	{
		id: 104,
		name: 'textplusimagename',
		type: 'textplusimage',
		imageSrc: 'defaultimage.svg',
		text: ipsum

	},
	{
		id: 105,
		name: 'textname',
		type: 'text',
		text: ipsum
	}
]

const sampleSlots = [
	{
		id: 1000,
		blocks: [ 100, 101 ],
		dropZone: { index: -1 }
	},
	{
		id: 1001,
		blocks: [ 102 ],
		dropZone: { index: -1 }
	},
	{
		id: 1002,
		blocks: [ 103 ],
		dropZone: { index: -1 }
	},
	{
		id: 1003,
		blocks: [ 104, 105 ],
		dropZone: { index: -1 }
	}
]


const SandBox = (state, action) => {
	switch (action.type) {
		case 'ADD_SAMPLE_BLOCKS':
			var state = { ...state }
			state.blocks = Immutable.fromJS(sampleBlocks).toJS()
			state.slots = Immutable.fromJS(sampleSlots).toJS()
			state.slots.forEach(s => s.updateTimeStamp = new Date())
			return state


		case 'CLEAR_ALL_BLOCKS':
			var state = { ...state }
			state.blocks = []
			state.slots.forEach(s => {
				s.blocks = []
				s.updateTimeStamp = new Date()
			})

			return state

		case 'SET_DROPZONE_DRAG_OVER_STATE':
			var state = { ...state }
			state.showDropZoneDragOverState = action.value
			return state
			
		case 'SET_ACTIVE_TEXTURE':
			var state = { ...state }
			state.activeTexture = action.activeTexture
			return state
			
			
		default:
			return state
	}
}

export default SandBox

