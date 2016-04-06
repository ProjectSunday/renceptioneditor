import React from 'react'
import { connect } from 'react-redux'

import './components.less'

import EditorLeft from './editorleft/editorleft'
import EditorRight from './editorright/editorright'

import Testing from './testing/testing'

@connect()
class Components extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	render() {
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
}
export default Components