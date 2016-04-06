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
		case 'DRAG_START':
			var ui = Object.assign({}, state)

			var { blockId, slotId } = action

			var slot = ui.slots.find(s => s.id == slotId)

			//remove ui.children
			var removeIndex = slot.children.findIndex((c, i) => c == blockId && i % 2 != 0)
			var removed = slot.children.splice(removeIndex - 1, 2)

			//instanst show dropzone below
			var dropZone = slot.dropZones.find(d => d.id == slot.children[removeIndex - 1])
			dropZone.visible = dropZone.instant = true

			//set dragblock
			ui.dragBlock = { blockId, slotId }

			return ui
		case 'UI_DROPZONE_SHOW':
			var { dropZoneId, slotId } = action
			var ui = Object.assign({}, state)

			var slot = ui.slots.find(s => s.id == slotId)

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
					instant: false,
					visible: false
				})
				children.push(i, b)
			})

			dropZones.push({
				id: blocks.length,
				instant: false,
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