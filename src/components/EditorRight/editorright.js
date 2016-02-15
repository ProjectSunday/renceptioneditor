import React from 'react'
import { connect } from 'react-redux'

import { addBlock } from '../../Actions/actions'

import './editorright.less'

import Slot from './Slot/slot'

let EditorRight = ({ slots }) => {
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

export default connect(mapStateToProps)(EditorRight)
