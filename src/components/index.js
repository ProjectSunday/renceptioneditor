import React from 'react'
// import { connect } from 'react-redux'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import EditorLeft from './EditorLeft'
import EditorRight from './EditorRight'

const Components = ({ dispatch }) => (
	<div>
		<div>editor top here</div>
		<div className="col-xs-4 pull-left">
			<EditorLeft />
		</div>
		<div className="col-xs-8 pull-right">
			<EditorRight />
		</div>
	</div>
)


export default Components
