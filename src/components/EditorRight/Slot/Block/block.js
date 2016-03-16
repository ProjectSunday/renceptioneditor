import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockTarget = {
	hover(props, monitor, component) {
	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    // Determine mouse position
	    const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top

	    // props.insertDropZone({
	    // 	blockId: props.block.id, 
	    // 	instantaneous: false,
	    // 	positionAbove: (hoverClientY < hoverMiddleY)

	    let positionBelow = hoverClientY > hoverMiddleY

		props.showDropZone(props.block.id, positionBelow, false)

	}
}

const blockSource = {
	beginDrag(props) {
		props.showDropZone(props.block.id, false, true)

		return {
			id: props.block.id
		}
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
	componentWillEnter(callback) {
		console.log('block: componentWillEnter')
		setTimeout(callback, 0)
	}
	render() {
		const { dispatch, block, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
	
		// console.log('block render', block.id)

		let styles = {
			display: isDragging ? 'none' : 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}

		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{block.name}{block.id}</span>
			</div>
		))
	}

}

