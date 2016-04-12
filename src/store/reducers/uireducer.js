// import update from 'react-addons-update'
// import Immutable from 'immutable'

const ui = (state = {}, action) => {
	switch (action.type) {
		case 'X_BLOCK_DRAG_START':
			// red(action)
			var { id, slotId } = action
			var ui = Object.assign({}, state)
			var slot = ui.slots.fbi(slotId)

			//remove ui.children
			var removeIndex = slot.children.findIndex((c, i) => c == id && i % 2 != 0)
			var removed = slot.children.splice(removeIndex - 1, 2)

			//instanst show dropzone below
			var dropZone = slot.dropZones.fbi(slot.children[removeIndex - 1])
			dropZone.pulse = { instant: true, height: '50px'}
			dropZone.visible = true

			//set sourceBlock
			ui.srcBlock = { id, slotId }

			return ui
		case 'UI_BLOCK_DRAG_OVER':
			var { id, slotId, below } = action
			var ui = Object.assign({}, state)
			var slot = ui.slots.fbi(slotId)

			var childIndex = slot.children.findIndex((c, i) => c == id && i % 2 != 0)
			childIndex =  below ? childIndex + 1 : childIndex - 1

			var nextDropZoneId = slot.children[childIndex]

			var prevDropZone = slot.dropZones.find(d => d.visible)

			if (prevDropZone) {  //when dragging from one slot to another, a visible dropzone in that new slot may not exist
				if (prevDropZone.id === nextDropZoneId) { return state }
				
				prevDropZone.visible = false
				prevDropZone.pulse = { instant: false, height: '0px' }
			}

			var nextDropZone = slot.dropZones.fbi(nextDropZoneId)
			nextDropZone.visible = true
			nextDropZone.pulse = { instant: false, height: '50px'}

			return ui
		case 'UI_DROPZONE_PULSE_SUCCESS':
			var { id, slotId } = action
			var ui = Object.assign({}, state)

			ui.slots.fbi(slotId).dropZones.fbi(id).pulse = null

			return ui
		case 'UI_RESET_SLOT':
			var ui = Object.assign({}, state)

			var { slotId, blocks } = action

			var slot = ui.slots.fbi(slotId)
			if (!slot) {
				slot = { id: slotId }
				ui.slots.push(slot)
			}

			slot.children = []
			slot.dropZones = []

			blocks.forEach((b, i) => {
				slot.dropZones.push({
					id: i,
					visible: false,
					pulse: { instant: true, height: '0px'}
				})
				slot.children.push(i, b)
			})

			slot.dropZones.push({
				id: blocks.length,
				visible: false,
				pulse: { instant: true, height: '0px' }
			})

			if (!blocks.length) {
				slot.dropZones[0].pulse = { instant: true, height: '50px'}
				slot.dropZones[0].visible = true
			}

			slot.children.push(blocks.length)

			return ui
		case 'UI_RESET_SLOT_DROPZONES':
			var ui = Object.assign({}, state)

			ui.slots.forEach(s => {
				if (s.children.length === 1) {
					s.dropZones[0].visible = true
					s.dropZones[0].pulse = { instant: true, height: '50px' }
				} else {
					s.dropZones.forEach(d => {
						d.visible = false
						d.pulse = { instant: true, height: '0px' }
					})
				}
			})

			return ui
		case 'UI_SET_DEST_DROPZONE':
			// trace('UI_SET_DEST_DROPZONE ', action.id)
			var ui = Object.assign({}, state)
			var { id, slotId } = action
			ui.destDropZone = { id, slotId }
			return ui
		default:
			return state
	}
}

export default ui