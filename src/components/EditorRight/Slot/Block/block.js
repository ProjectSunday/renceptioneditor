import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const targetSpec = {
	hover(props, monitor, component) {
	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    // Determine mouse position
	    const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top

	    if (hoverClientY < hoverMiddleY) {
	    	props.showDropZone(props.dropZoneAboveIndex)
	    } else {
	    	props.showDropZone(props.dropZoneBelowIndex)
	    }

	}
}
const targetCollect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
})

const sourceSpec = {
	beginDrag(props) {
		props.onBeginDrag(props.index, true)

		return {
			id: props.id
		}
	}
}
const sourceCollect = (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  	isDragging: monitor.isDragging()
})

@DropTarget('BLOCK', targetSpec, targetCollect)
@DragSource('BLOCK', sourceSpec, sourceCollect)
export default class Block extends Component {
	componentWillEnter(callback) {
		console.log('block: componentWillEnter')
		setTimeout(callback, 0)
	}
	render() {

		const { dispatch, block, insertDropZone, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
		const { id, name } = this.props

		let styles = {
			display: isDragging ? 'none' : 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}

		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{name}{id}</span>
			</div>
		))
	}

}

