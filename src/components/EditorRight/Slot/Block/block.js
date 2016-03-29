import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import * as Actions from '../../../../actions'

import './block.less'

// const mapStateToProps = (state, ownProps) => {
// 	let index = 
// 	return {

// 	}
// 	// return state.blocks.find(b => b.id === ownProps.id)
// }
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showDropZone: (index, instant) => { dispatch(Actions.showDropZone(ownProps.slotId, index, instant) )}
	}
}


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
	beginDrag(props, monitor, component) {
		// props.onBeginDrag(props.index, true)

    	props.showDropZone(props.dropZoneBelowIndex, true)

		return {
			id: props.id
		}
	},
	endDrag(props, monitor, component) {
		let dropZone = monitor.getDropResult()

		// props.onEndDrag(props.index, dropZone.index)
	}
}

// const isBlockDragging = (props, monitor) => {
// 	return props.id === monitor.getItem().id
// }
const sourceCollect = (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  	isDragging: monitor.isDragging()
})

@connect(null, mapDispatchToProps)
@DropTarget('BLOCK', targetSpec, targetCollect)
@DragSource('BLOCK', sourceSpec, sourceCollect)
export default class Block extends Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	render() {
		// console.log('block.render', this.props)
		const { dispatch, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
		const { id, name } = this.props

		let styles = {
			display: isDragging ? 'none' : 'block',
			// display: 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}



		return connectDragSource(connectDropTarget(
			<div className="block" style={styles}>
				<span className="name">{name}<span style={{ color: 'yellow', background: 'black' }}>{id}</span></span>
			</div>
		))
	}

}

