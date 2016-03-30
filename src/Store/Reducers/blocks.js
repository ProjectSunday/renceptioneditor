// import udpate from 'react-addons-update'

import Immutable from 'immutable'

const blocks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			return [
				...state,
				action.block
			]
		default:
			return state
	}
}

export default blocks