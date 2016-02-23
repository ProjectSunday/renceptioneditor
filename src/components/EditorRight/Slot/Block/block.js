import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockSource = {
	beginDrag(props) {
		props.insertDropZone({
			blockId: props.block.id, 
			instantaneous: true,
			positionAbove: true
		})
		return {
			id: props.block.id
		}
	}
}

const blockTarget = {
	hover(props, monitor, component) {
	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    // Determine mouse position
	    const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top

	    props.insertDropZone({
	    	blockId: props.block.id, 
	    	instantaneous: false,
	    	positionAbove: (hoverClientY < hoverMiddleY)
	    })
	}
}

@DropTarget('BLOCK', blockTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))
@DragSource('BLOCK', blockSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  	isDragging: monitor.isDragging()
}))
export default class Block extends Component {
	render() {
		const { dispatch, block, insertDropZone, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
	
		let styles = { 
			display: isDragging ? 'none' : 'block',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}

		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{block.name}{block.id}</span>
				I am a block
			</div>
		))
	}

}

