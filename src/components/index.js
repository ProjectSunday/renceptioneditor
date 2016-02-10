import React from 'react'
import { connect } from 'react-redux'

import { addTest } from '../actions'

import EditorLeft from './EditorLeft'
import EditorRight from './EditorRight'

const Components = ({ dispatch }) => (
	<div>
		<div>editor top here</div>
		<EditorLeft />
		<EditorRight />
	</div>
)


export default connect()(Components)
