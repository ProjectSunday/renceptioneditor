import React from 'react'
import { connect } from 'react-redux'
// import HTML5Backend from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-dnd';

import './components.less'

import EditorLeft from './editorleft/editorleft'
import EditorRight from './editorright/editorright'

import Testing from './testing/testing'

// @DragDropContext(HTML5Backend)
@connect()
class Components extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		window.dispatch = props.dispatch     //for debugging
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

				<Testing />
			</div>
		)
	}
}
export default Components