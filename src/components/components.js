import React, { Component } from 'react'
// import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import './components.less'

import EditorLeft from './EditorLeft/editorleft'
import EditorRight from './EditorRight/editorright'

@DragDropContext(HTML5Backend)
export default class Components extends Component {
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
