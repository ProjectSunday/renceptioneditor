import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import * as Actions from '../../../actions'

import './block.less'

const mapStateToProps = (state, ownProps) => {

	var block = state.blocks.find(b => b.id === ownProps.id)

	return Object.assign({}, block)

}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showDropZone: (index, instant) => { dispatch(Actions.showDropZone(ownProps.slotId, index, instant) )},
		dragBlock: (index) => { dispatch(Actions.dragBlock(ownProps.slotId, index))},
		dropBlock: (index) => { dispatch(Actions.dropBlock(ownProps.slotId, index))},
		moveBlock: (dropZone) => { dispatch(Actions.moveBlock(ownProps.slotId, ownProps.index, dropZone.slotId, dropZone.index))},
		resetDropZones: () => { dispatch(Actions.resetDropZones(ownProps.slotId))},
    	setNextDropZoneInstant: (v) => { dispatch({ type: 'SET_NEXT_DROPZONE_INSTANT', value: v }) }

	}
}


const targetSpec = {
	hover(props, monitor, component) {
	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    // console.log('yoooo', props.nextDropZoneInstant)
	    // Determine mouse position
	    const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top

	    if (hoverClientY < hoverMiddleY) {
	    	props.showDropZone(props.dropZoneAboveIndex, props.blah)
	    } else {
	    	props.showDropZone(props.dropZoneBelowIndex, props.blah)
	    }

	    props.blah = false
	    // props.setNextDropZoneInstant(false)
	}
}
const targetCollect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
})

const sourceSpec = {
	beginDrag(props, monitor, component) {
		debugger;
		// props.onBeginDrag(props.index, true)

		// props.dispatch()
		// props.dragBlock(props.index)

		props.blah = true
    	// props.showDropZone(props.dropZoneBelowIndex, true)

    	// props.setNextDropZoneInstant(true)

		return {
			id: props.id
		}
	},
	endDrag(props, monitor, component) {
		let dropZone = monitor.getDropResult()

		if (dropZone && dropZone.slotId !== undefined && dropZone.index !== undefined) {
			props.moveBlock(dropZone)
		}
			
		props.resetDropZones()

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

@connect(mapStateToProps, mapDispatchToProps)
@DropTarget('BLOCK', targetSpec, targetCollect)
@DragSource('BLOCK', sourceSpec, sourceCollect)
export default class Block extends Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.componentDidMount = this.componentDidMount.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	// componentDidMount() {
	// 	console.log('componentDidMount', this.props.index)
	// 	if (this.props.isDragging) {
	// 		this.props.dragBlock(this.props.index)
	// 	}
	// }

	// shouldComponentUpdate(nextProps) {
	// 	console.log('shouldComponentUpdate', nextProps.index, this.props.isDragging)
	// 	return true
	// }
	render() {
		console.log('block.render index:', this.props.index, 'isDragging:', this.props.isDragging)
		const { dispatch, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
		const { id, name, beingDrag } = this.props

		// if (isDragging) {
		// 	this.props.dragBlock(this.props.index)
		// }

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

