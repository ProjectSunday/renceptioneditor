import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockSource = {
	beginDrag(props) {

		console.log('yo', props.block.id)

		return {
			id: props.block.id
		}
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDragStart: () => {
			dispatch(dragBlock(ownProps.slotId, ownProps.block.id))
		}
	}
}


@connect(undefined, mapDispatchToProps)
@DragSource('BLOCK', blockSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  	isDragging: monitor.isDragging()
}))
export default class Block extends Component {
	render() {
		const { block, slotId, onDragStart, connectDragSource } = this.props;
	
		let styles = { display: 'block' }


		let blockInnards = <div className="innards" style={ { background: 'blue', height: 50 } }>NNNNNNNNNNNNNNNNNNNNNNNN</div>

		if (block.name == 'dragging') {		
			blockInnards = <p className="innards" style={ { height: 75 } }>draggingdraggingdraggingdraggingdraggingdraggingdragging</p>
		}


		return connectDragSource(
			<div className="block" style={styles}>
				<span className="name">{block.name}{block.id}</span>
				{blockInnards}
			</div>
		)
	}

}

