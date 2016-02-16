import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const blockSource = {
	beginDrag(props) {

		// console.log('yo', props.block.id)

		return {
			id: props.block.id
		}
	}
}

const blockTarget = {
	hover(props, monitor, component) {

		if (monitor.getItem().id == props.block.id) { return }

		console.count('hover')
		console.log(props)

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
		const { block, slotId, connectDragSource, connectDropTarget, isDragging } = this.props;
	
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

