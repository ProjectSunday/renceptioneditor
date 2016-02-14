import React from 'react'
import { connect } from 'react-redux'

import { addBlock } from '../../Actions/actions'

import './editorright.less'

import Slot from './Slot/slot'

let EditorRight = ({ slots }) => (
	<div id="editorright" className="row">
		{slots.map(slot => 
			<Slot key={slot.id} slot={slot} />
		)}
	</div>
)

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
