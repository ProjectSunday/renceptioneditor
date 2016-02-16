import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockSource = {
	beginDrag(props) {
		return {
			id: props.block.id,
			index: props.index
		}
	}
}

const blockTarget = {
	hover(props, monitor, component) {

	    const dragIndex = monitor.getItem().index;
	    const hoverIndex = props.index;

		if (dragIndex == hoverIndex) { return }

		// console.count('hover')
		// console.log(props)


	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

	    // Get vertical middle
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

	    // Determine mouse position
	    const clientOffset = monitor.getClientOffset();

	    // Get pixels to the top
	    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

	    // Only perform the move when the mouse has crossed half of the items height
	    // When dragging downwards, only move when the cursor is below 50%
	    // When dragging upwards, only move when the cursor is above 50%

	    // Dragging downwards
	    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
	      return;
	    }

	    // Dragging upwards
	    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
	      return;
	    }

	    // Time to actually perform the action
	    console.log(`props.moveCard(${dragIndex}, ${hoverIndex})`)

	    // Note: we're mutating the monitor item here!
	    // Generally it's better to avoid mutations,
	    // but it's good here for the sake of performance
	    // to avoid expensive index searches.
	    // monitor.getItem().index = hoverIndex;



	}
}

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onDragStart: () => {
// 			dispatch(dragBlock(ownProps.slotId, ownProps.block.id))
// 		}
// 	}
// }


// @connect(undefined, mapDispatchToProps)
@DropTarget('BLOCK', blockTarget, (connect) => ({
	connectDropTarget: connect.dropTarget()
}))
@DragSource('BLOCK', blockSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  	isDragging: monitor.isDragging()
}))
export default class Block extends Component {
	render() {
		const { index, block, connectDragSource, connectDropTarget, isDragging } = this.props;
	
		let styles = { display: 'block', opacity: isDragging ? 0 : 1 }


		
		let blockInnards = <div className="innards" style={ { background: 'blue', height: 50 } }>NNNNNNNNNNNNNNNNNNNNNNNN</div>

		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{block.name}{block.id}</span>
				{blockInnards}
			</div>
		))
	}

}

