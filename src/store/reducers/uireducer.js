// import update from 'react-addons-update'
// import Immutable from 'immutable'

const ui = (state = {}, action) => {
	switch (action.type) {
		case 'UI_BLOCK_DRAG_START':
			// console.log('UI_BLOCK_DRAG_START')
			// red(action)
			var { id, slotId } = action
			var ui = Object.assign({}, state)

			var slot = ui.slots.fbi(slotId)

			//remove ui.children
			var removeIndex = slot.children.findIndex((c, i) => c == id && i % 2 != 0)

			var removed = slot.children.splice(removeIndex - 1, 2)

			//instanst show dropzone below

			var dropZone = slot.dropZones.fbi(slot.children[removeIndex - 1])
			dropZone.instant = true

			//set active dropzone
			slot.activeDropZoneId = dropZone.id

			//set sourceBlock

			ui.srcBlock = { id, slotId }

			return ui
		// case 'X_DRAG_END':
		// 	// console.log('X_DRAG_END')
		// 	// red(action)
		// 	// var { blockId, slotId } = action

		// 	var ui = Object.assign({}, state)

		// 	ui.activeDropZone.id == null
		// 	ui.srcBlock = { id: null, slotId: null }

		// 	ui.slots.forEach(s => {
		// 		s.dropZones.forEach(d => {
		// 			d.expanding = false
		// 			d.instant = true
		// 		})
		// 	})

		// 	red(ui)
		// 	return ui
		case 'UI_BLOCK_DRAG_OVER':
			var { id, slotId, below } = action
			var ui = Object.assign({}, state)

			var slot = ui.slots.fbi(slotId)

			var childIndex = slot.children.findIndex((c, i) => c == id && i % 2 != 0)
			childIndex =  below ? childIndex + 1 : childIndex - 1

			var dropZoneId = slot.children[childIndex]
			if (slot.activeDropZoneId === dropZoneId) { return state }

			slot.dropZones.forEach(d => {
				d.instant = false
			})

			slot.activeDropZoneId= dropZoneId
			return ui
		case 'UI_DROPZONE_SET_INSTANT_NULL':
			var { id, slotId } = action
			var ui = Object.assign({}, state)

			ui.slots.fbi(slotId).dropZones.fbi(id).instant = null

			return ui
		case 'UI_RESET_SLOT':
			var ui = Object.assign({}, state)

			var { slotId, blocks } = action

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
					instant: true
				})
				children.push(i, b)
			})

			dropZones.push({
				id: blocks.length,
				instant: blocks.length === 0 ? true : null
			})

			children.push(blocks.length)

			slot.children = children
			slot.dropZones = dropZones
			slot.activeDropZoneId = null

			return ui
		case 'UI_SET_DEST_DROPZONE':
			var ui = Object.assign({}, state)
			var { id, slotId } = action
			ui.destDropZone = { id, slotId }
			return ui
		default:
			return state
	}
}

export default ui