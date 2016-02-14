// import blocks from './blocks'

// let id = 500;


// const slot = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_BLOCK':

// 			return state.map()
// 			return [
// 				...slot,


// 			Object.assign(
// 				{},
// 				action.block,
// 				{
// 					id: id++
// 				}
// 			)
// 		default: 
// 			return slot
// 	}
// }

const slots = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return state.map(slot => {
				slot.id == action.slotId) ? 
					slot.blocks.push(action.block.id) : 
					slot
			})
		default:
			return state
	}
}

export default slots