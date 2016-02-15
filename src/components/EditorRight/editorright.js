import React from 'react'
import { connect } from 'react-redux'

import { addBlock } from '../../Actions/actions'

import './editorright.less'

import Slot from './Slot/slot'

let EditorRight = ({ slots }) => {

	console.count('editor right')

	return (
		<div id="editorright" className="row">
			{slots.map(s => 
				<Slot key={s.id} slot={s} />
			)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		slots: state.slots
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onClick: (value) => {
// 			dispatch(addBlock('slotId', { name: 'blockname', bool: true }))
// 		}
// 	}
// }


export default connect(mapStateToProps)(EditorRight)
