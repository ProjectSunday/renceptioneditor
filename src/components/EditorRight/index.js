import React from 'react'
import { connect } from 'react-redux'

import { addBlock } from '../../actions'

import Slot from './Slot'

let EditorRight = ({ slots, onClick }) => {

	console.log('slots ', slots);

	return (
		<div>
			<div>EditorRight</div>

			<Slot 
				slot = { slots }
				onClick = { onClick }
			/>

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		slots: state.slots
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (value) => {
			dispatch(addBlock('slotId', { name: 'blockname', bool: true }))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(EditorRight)
