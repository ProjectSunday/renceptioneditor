import Immutable from 'immutable'





const sampleBlocks = [
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
]

const sampleSlots = [
	{
		id: 1000,
		blocks: [ 100, 101, 102 ],
		dropZone: { index: -1 }
	},
	{
		id: 1001,
		blocks: [ 103 ],
		dropZone: { index: -1 }
	},
	{
		id: 1002,
		blocks: [ 104 ],
		dropZone: { index: -1 }
	},
	{
		id: 1003,
		blocks: [ 105 ],
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
			

		default:
			return state
	}
}

export default SandBox

