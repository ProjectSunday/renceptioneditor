import React from 'react'
// import { connect } from 'react-redux'

import './components.less'

import EditorLeft from './EditorLeft/editorleft'
import EditorRight from './EditorRight/editorright'

const Components = () => {
	return (
		<div>
			<div className="col-xs-4 pull-left">
				<EditorLeft />
			</div>
			<div className="col-xs-8 pull-right">
				<EditorRight />
			</div>
		</div>
	)
}


export default Components
