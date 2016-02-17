import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockSource = {
	beginDrag(props) {
		return {
			block: props.block,
			index: props.index
		}
	}
}

const blockTarget = {
	hover(props, monitor, component) {

		// console.log(component);



	    const dragIndex = monitor.getItem().index;
	    const hoverIndex = props.index;


	    // props.blah = true;

	    // component.props.blah = true;


	    console.log('huh', props);
	    props.insertDropZone(hoverIndex)

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
	    //props.moveBlock(dragIndex, hoverIndex);

	    // Note: we're mutating the monitor item here!
	    // Generally it's better to avoid mutations,
	    // but it's good here for the sake of performance
	    // to avoid expensive index searches.
	    //monitor.getItem().index = hoverIndex;



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
		const { index, block, blah, moveBlock, insertDropZone, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
	
		console.log('block render', block.id)


		//hmn figure out how to add in moving pieces
		let styles = { display: isDragging ? 'none' : 'block' }
		//acity: isDragging ? 0.75 : 1 }

		if (isOver) {
			styles.background = '#eee'
		}
		
		// let blockInnards = <div className="innards" style={ { height: 50 } }>NNNNNNNNNNNNNNNNNNNNNNNN</div>

		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{block.name}{block.id}</span>
				I am a block
			</div>
		))
	}

}

