import update from 'react-addons-update'
import Immutable from 'immutable'


const calculateTopPositionOfBlocks = (state, slot) => {
	var top = 0
	slot.blocks.forEach((b, i) => {
		var block = state.blocks.fbi(b)
		block.index = i
		block.top = top
		top += 50
	})
}

const slots = (state, action) => {
	switch (action.type) {
		case 'MOVE_BLOCK':
			// var { blockId, slotId } = action
			var state = { ...state }
			var src = state.blockSrc
			var dest = state.blockDest

			var slotSrc = state.slots.fbi(src.slotId)
			slotSrc.blocks.rbv(src.blockId)

			var slotDest = state.slots.fbi(dest.slotId)

			var insertIndex = slotDest.blocks.fibv(dest.blockId)
			if (dest.below) { insertIndex++ } 

			slotDest.blocks.splice(insertIndex, 0, src.blockId)

			calculateTopPositionOfBlocks(state, slotSrc)
			if (slotSrc !== slotDest) {
				calculateTopPositionOfBlocks(state, slotDest)
			}


			trace('MOVE_BLOCK', state.slots[0].blocks)
			return state


		case 'SET_TOP_FOR_ALL_SLOTS_ALL_BLOCKS': 
			var state = { ...state }
			state.slots.forEach(s => {
				var top = 0

				var blocks = [ ...s.blocks ]

				blocks.forEach(b => {
					state.blocks.fbi(b).top = top
					top += 50
				})

				s.blocks = blocks
				
				// s.render = new Date()
			})
			return state


		case 'SET_TOP_FOR_ALL_BLOCKS_IN_SLOT':
			var { slotId, index } = action
			var state = { ...state }
			var slot = state.slots.fbi(slotId)

			var top = 0
			slot.blocks.forEach((b, i) => {
				var block = state.blocks.fbi(b)
				if (i === index) { top += 50 }
				if (!block.beingDrag) {
					block.top = top
					top += 50
				}
			})

			// slot.render = new Date()

			return state


		case 'SLOTS.GET_NEXT_BLOCK':
			var { id, blockId } = action
			var blocks = state.fbi(id).blocks
			var index = blocks.fibv(blockId)
			action.nextBlock = blocks[index + 1]
			return state

		case 'SLOTS.ADD_BLOCK':
			const { dest, blockId } = action
			var slots = state.slice(0)
			var slot = slots.fbi(dest.slotId)

			slot.blocks.splice(dest.id, 0, blockId)
			return slots


			
		case 'EDITOR.MOUSE_OVER_BLOCK':
			var { id, index } = action
			var slots = state.slice(0)


			var slot = slots.fbi(id)

			slot.blocks.splice(dest.id, 0, blockId)
			return slots




		case 'SLOTS.SET_HEIGHT_FLEXIBLE':
			red('SLOTS.SET_HEIGHT_FLEXIBLE')
			var { heightFlexible } = action
			var slots = state.slice(0)

			slots.all({ heightFlexible })
			return slots

		case 'SLOTS.UPDATE_SLOT':
			var { id } = action
			var slots = state.slice(0)
			slots.fbi(id).update = true
			return slots

		case 'SLOTS.UPDATE_ALL_SLOTS':
			var { id } = action
			var slots = state.slice(0)
			slots.all({ update: true })
			return slots

		case 'SLOTS.UPDATE_SLOT_SUCCESS':
			var { id } = action
			var slots = state.slice(0)
			slots.fbi(id).update = false
			return slots

		default:
			return state
	}
}

export default slots