// import update from 'react-addons-update'
// import Immutable from 'immutable'

const ui = (state = {}, action) => {
	switch (action.type) {
		case 'DRAG_START':
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
		case 'UI_INITILIZE_SLOT_CHILDREN':
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
					instant: false,
					visible: false
				})
				children.push(i, b)
			})

			dropZones.push({
				id: blocks.length,
				instant: blocks.length === 0,
				visible: blocks.length === 0
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