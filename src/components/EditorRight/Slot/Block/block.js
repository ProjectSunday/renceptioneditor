import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockSource = {
	beginDrag(props) {
		return {
			index: props.index
		}
	}
}

const blockTarget = {
	hover(props, monitor, component) {
	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

	    // Determine mouse position
	    const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top;


	    const position = (hoverClientY < hoverMiddleY) ? 'ABOVE' : 'BELOW';
	    props.insertDropZone(props.index, position);

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
		//console.groupCollapsed('block render')
		//console.count()
		const { index, block, blah, moveBlock, insertDropZone, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
	
		// console.log('block render', this.props)


		//hmn figure out how to add in moving pieces
		let styles = { display: isDragging ? 'none' : 'block' }
		//acity: isDragging ? 0.75 : 1 }

		// if (isOver) {
		// 	styles.background = '#eee'
		// }
		
		// let blockInnards = <div className="innards" style={ { height: 50 } }>NNNNNNNNNNNNNNNNNNNNNNNN</div>
		//console.groupEnd()
		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{block.name}{block.id}</span>
				I am a block
			</div>
		))
	}

}

