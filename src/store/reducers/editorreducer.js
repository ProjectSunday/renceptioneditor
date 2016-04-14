const editor = (state = {}, action) => {
	switch (action.type) {

		case 'EDITOR.GET_DRAG_SOURCE':
			action.dragSource = Object.assign({}, state.dragSource)
			return state

		case 'EDITOR.SET_DRAG_SOURCE':
			var { source } = action
			var editor = Object.assign({}, state)
			editor.dragSource = source
			return editor

		default:
			return state
	}
}

export default editor