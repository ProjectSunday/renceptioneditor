import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import * as Actions from '../../../actions'

import './block.less'

const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.blocks.find(b => b.id === ownProps.id))
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return { dispatch: dispatch }
}


		// showDropZone: (index, instant) => { dispatch(Actions.showDropZone(ownProps.slotId, index, instant) )},
		// dragBlock: (index) => { dispatch(Actions.dragBlock(ownProps.slotId, index))},
		// dropBlock: (index) => { dispatch(Actions.dropBlock(ownProps.slotId, index))},
		// moveBlock: (dropZone) => { dispatch(Actions.moveBlock(ownProps.slotId, ownProps.index, dropZone.slotId, dropZone.index))},
		// resetDropZones: () => { dispatch(Actions.resetDropZones(ownProps.slotId))},
  //   	setNextDropZoneInstant: (v) => { dispatch({ type: 'SET_NEXT_DROPZONE_INSTANT', value: v }) },
  //   	setDropZoneVisible: (below) => {
  //   		dispatch({
	 //    		type: 'SLOT_SET_DROPZONE_VISIBLE', 
	 //    		slotId: ownProps.slotId, 
	 //    		blockId: ownProps.id, 
	 //    		below: below
	 //    	})
  //   	}


// const targetSpec = {
// 	hover(props, monitor, component) {

// 	}
// }
// const targetCollect = (connect, monitor) => ({
// 	connectDropTarget: connect.dropTarget(),
// 	isOver: monitor.isOver()
// })

// const sourceSpec = {
// 	beginDrag(props, monitor, component) {
// 		debugger;
// 		// props.onBeginDrag(props.index, true)

// 		// props.dispatch()
// 		// props.dragBlock(props.index)

// 		props.blah = true
//     	// props.showDropZone(props.dropZoneBelowIndex, true)

//     	// props.setNextDropZoneInstant(true)

// 		return {
// 			id: props.id
// 		}
// 	},
// 	endDrag(props, monitor, component) {
// 		let dropZone = monitor.getDropResult()

// 		if (dropZone && dropZone.slotId !== undefined && dropZone.index !== undefined) {
// 			props.moveBlock(dropZone)
// 		}
			
// 		props.resetDropZones()

// 		// props.onEndDrag(props.index, dropZone.index)
// 	}
// }

@connect(mapStateToProps, mapDispatchToProps)
export default class Block extends Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.onDragStart = this.onDragStart.bind(this)
		this.onDragOver = this.onDragOver.bind(this)

		// this.componentDidMount = this.componentDidMount.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	// componentDidMount() {
	// 	console.log('componentDidMount', this.props.index)
	// 	if (this.props.isDragging) {
	// 		this.props.dragBlock(this.props.index)
	// 	}
	// }

	onDragOver(e) {
		// console.log('onDragOver')

	 //    const hoverBoundingRect = e.target.getBoundingClientRect()
	 //    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	 //    // Determine mouse position
	 //    const hoverClientY = e.clientY - hoverBoundingRect.top

	 //    this.props.setDropZoneVisible(hoverMiddleY < hoverClientY)
	}
	onDragStart(e) {
		// console.log('onDragStart', e)

		const { dispatch, slotId, id } = this.props

		e.dataTransfer.setData('text', '');

	    // this.props.setDropZoneVisible(false, true)

	    dispatch({
	    	type: 'DRAG_START',
	    	slotId: slotId,
	    	blockId: id
	    })

	}

	shouldComponentUpdate(nextProps) {
		var self = this
		// console.log('block.shouldComponentUpdate', nextProps.index)

		if (nextProps.visible === false) {
			setTimeout(function () {
				self.refs.block.style.display = 'none'
			}, 0)
		}

		return false
	}


	render() {
		// console.log('block.render', this.props)
		// const { dispatch } = this.props;
		const { id, name } = this.props

		// if (isDragging) {
		// 	this.props.dragBlock(this.props.index)
		// }

		let styles = {
			// display: isDragging ? 'none' : 'block',
			display: 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}

		const idStyles = {
			background: 'black',
			color: 'yellow'
		}

		return (
			<div ref="block" className="block" style={styles} draggable="true" onDragStart={this.onDragStart} onDragOver={this.onDragOver}>
				<span className="name">{name}<span style={idStyles}>{id}</span></span>
			</div>
		)
		// return connectDragSource(connectDropTarget(
		// 	<div className="block" style={styles}>
		// 		<span className="name">{name}<span style={{ color: 'yellow', background: 'black' }}>{id}</span></span>
		// 	</div>
		// ))
	}

}

