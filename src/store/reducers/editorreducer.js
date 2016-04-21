import Immutable from 'immutable'

import SandBox from './sandboxreducer'

var NEXT_BLOCK_ID = 200
const IPSUM = 'Bacon ipsum dolor amet short ribs hamburger chicken, fatback capicola tri-tip kielbasa biltong cow doner meatball meatloaf flank alcatra. Bresaola porchetta tenderloin, ground round pork chop beef salami. Capicola doner alcatra short ribs pancetta. Shank leberkas kevin frankfurter porchetta hamburger filet mignon tail bacon shankle turducken beef ribs flank chuck ham hock. Ham leberkas frankfurter, drumstick t-bone tongue alcatra ball tip. Porchetta brisket andouille swine, tri-tip pancetta ham flank cupim ball tip pastrami strip steak jerky. Shoulder chuck hamburger pork belly ball tip bacon cow.';

const resetAllSlotsAndBlocks = (state) => {
	delete state.blockSrc
	delete state.blockDest

	state.slots.forEach(s => {
		s.dropZone.index = -1
		s.updateTimeStamp = new Date()
	})
	state.blocks.forEach(b => {
		b.beingDrag = false
		delete b.index
	})
	
}

const masterBlock = (state, action) => {
	switch (action.type) {
		case 'MASTERBLOCK_DRAG_START':
			var state = { ...state }
			state.transitionOn = true
			return state


		case 'MASTERBLOCK_DRAG_END': 
			var { masterBlock } = action
			var state = Immutable.fromJS(state).toJS()

			state.transitionOn = false

			var dest = state.blockDest

			var id = NEXT_BLOCK_ID++

			var newBlock

			switch (masterBlock.type) {
				case 'text':
					newBlock = {
						id,
						name: 'textname',
						type: 'text',
						text: IPSUM
					}
					break
				case 'image':
					newBlock = {
						id,
						name: 'imagename',
						type: 'image',
						imageSrc: 'defaultimage.svg'
					}
					break
				case 'textplusimage':
					newBlock = {
						id,
						name: 'textplusimagename',
						type: 'textplusimage',
						imageSrc: 'defaultimage.svg',
						text: IPSUM
					}
					break
				default:
					throw 'WTF'
			}

			state.blocks.push(newBlock)
			state.slots.fbi(dest.slotId).blocks.splice(dest.index, 0, id)

			resetAllSlotsAndBlocks(state)
			return state


		default:
			return state
	}

}

const editor = (state = {}, action) => {
	switch (action.type) {

		case 'DRAG_START':
			var { blockId, slotId, index} = action

			var state = { ...state }

			state.transitionOn = true

			state.blocks.fbi(blockId).beingDrag = true

			var slot = state.slots.fbi(slotId)
			slot.dropZone.index = index

			state.slots.fbi(slotId).blocks.rbv(blockId)


			state.blockSrc = { blockId, slotId }  //don't trust the component to give you the proper one

			return state


			var state = { ...state }

			state.transitionOn = true
			
			return state


		case 'DRAG_OVER':

			var { index, slotId } = action

			var b = state.blockDest
			if (b && b.index === index && b.slotId === slotId) { return state }

			var state = { ...state }

			// r('dragover action', action)

			var slot = state.slots.fbi(slotId)
			var i = 0
			slot.blocks.forEach(b => {
				if (i === action.index) { i++ }
				state.blocks.fbi(b).index = i++
			})


			slot.dropZone = { index }

			// l('dragover dz', slot.dropZone)

			state.blockDest = { index, slotId }

			return state



		case 'DRAG_END':
			// var { slotId } = action

			var state = Immutable.fromJS(state).toJS()

			var src = state.blockSrc
			var dest = state.blockDest

			state.transitionOn = false

			//insert block into dest
			var slot = state.slots.fbi(dest.slotId)
			slot.blocks.splice(dest.index, 0, src.blockId)

			resetAllSlotsAndBlocks(state)
			return state

		case 'MASTERBLOCK_DRAG_START':
		case 'MASTERBLOCK_DRAG_END':
			return masterBlock(state, action)


		case 'ADD_SAMPLE_BLOCKS':
		case 'CLEAR_ALL_BLOCKS':
		case 'SET_DROPZONE_DRAG_OVER_STATE':
		case 'SET_ACTIVE_TEXTURE':
			return SandBox(state, action)


		default:
			return state
	}
}

export default editor

