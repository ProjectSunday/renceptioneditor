import React from 'react'
import { connect } from 'react-redux'

import { addTest } from '../actions'

import EditorRight from './EditorRight'

const Components = ({ dispatch }) => (
	<div>
		<div>this is root</div>

		<EditorRight />

	</div>
)


export default connect()(Components)
