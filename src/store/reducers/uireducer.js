// import update from 'react-addons-update'
// import Immutable from 'immutable'

const ui = (state = {}, action) => {
	switch (action.type) {
		case 'UI_SET':
			var ui = state.slice(0)

			// ui[0] = { 'blah': 'this is completely new' }

			// return ui

			// console.log(ui[0].test === test)
			// test.push(action.value)


			ui[0].yo = { 'blah': 'this is completely new' }

			console.log('test ', state[0] === ui[0])
			console.log('test ', state === ui)

			// ui[0].test.splice(0, 0, action.value)
			return ui
		case 'DRAG_STARTvoid':
			var ui = Object.assign({}, state)

			var { blockId, slotId } = action

			var slot = ui.slots.fbi(slotId)

			//remove ui.children
			var removeIndex = slot.children.findIndex((c, i) => c == blockId && i % 2 != 0)
			var removed = slot.children.splice(removeIndex - 1, 2)

			//instanst show dropzone below
			var dropZone = slot.dropZones.fbi(slot.children[removeIndex - 1])
			dropZone.visible = dropZone.instant = true

			//set sourceBlock
			ui.srcBlock = { blockId, slotId }

			return ui
		case 'UI_RESET_DROPZONES':
			console.log('UI_RESET_DROPZONES')
			var { slotId } = action
			var ui = Object.assign({}, state)

			ui.slots.fbi(slotId).dropZones.forEach(d => {
				d.instant = true
				d.visible = false
			})

			return ui
		case 'BLOCK_DRAG_OVER':
			var { slotId, blockId, below } = action
			var ui = Object.assign({}, state)

			// ui.dragDest = { slotId, blockId, below }

			var slot = ui.slots.fbi(slotId)
			var index = slot.children.findIndex((c, i) => c == blockId && i % 2 != 0)

			index =  below ? index + 1 : index - 1

			var dropZoneId = slot.children[index]

			slot.dropZones.forEach(d => {
				d.instant = false
				if (d.id == dropZoneId) {
					d.visible = true
				} else {
					d.visible = false
				}
			})

			return ui

		case 'BLOCK_DROP':
			var { slotId, dropZoneId } = action
			var ui = Object.assign({}, state)

			//get block below dropzone and  insert source block

			ui.slots.fbi(ui.srcBlock.slotId)
				.children.filter(ui.srcBlock.blockId)


			var dropZoneIndex = ui.slots.fbi(slotId).b


			var slot = ui.slots.fibi(slotId)



			return ui
		case 'UI_INITILIZE_SLOT_CHILDREN':
			// type: 'UI_INITILIZE_SLOT_CHILDREN',
			// slotId,
			// blocks
			// console.log('UI_INITILIZE_SLOT_CHILDREN')
			var ui = Object.assign({}, state)

			var { blocks, slotId } = action
			

			var slot = ui.slots.find(s => s.id == slotId)

			if (!slot) {
				slot = { id: slotId }
				ui.slots.push(slot)
			}

			var children = []
			var dropZones = []

			blocks.forEach((b, i) => {
				dropZones.push({
					id: i,
					instant: true,
					visible: false
				})
				children.push(i, b)
			})

			dropZones.push({
				id: blocks.length,
				instant: true,
				visible: false
			})
			children.push(blocks.length)

			slot.children = children
			slot.dropZones = dropZones

			return ui
		default:
			return state
	}
}

export default ui