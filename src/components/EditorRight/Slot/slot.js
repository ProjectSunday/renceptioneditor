import React from 'react'
import { connect } from 'react-redux'

import Block from './block'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	var blah = state.slots.find(s => s.id == ownProps.id)
	console.log('slot.mapStateToProps', blah)

	return state.slots[0]

	// return Object.assign({}, blah)
	// return Object.assign({}, state.slots.find(s => s.id == ownProps.id))
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		// this.componentDidUpdate = this.componentDidUpdate.bind(this)

		this.onDragStart = this.onDragStart.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

		this.onDrop = this.onDrop.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)

		this.dragBlockId = null

	}

	// shouldComponentUpdate(nextProps) {
	// 	console.log('slot.shouldComponentUpdate', !!nextProps.update)
	// 	return true
	// 	// return !!nextProps.update
	// }
	// componentDidUpdate(prevProps) {
	// 	console.log('slot.componentDidUpdate')
	// }

	onDragStart(blockId) {
		const { id, visibleChildren } = this.props
		this.dragBlockId = blockId

		var blockIndex = visibleChildren.findIndex(v => v == blockId)
		var dropZoneId = visibleChildren[blockIndex + 1]

	    STORE.dispatch({
	    	type: 'DRAG_START',
	    	slotId: id,
	    	blockId: blockId,
	    	dropZoneId: dropZoneId
	    })
	}
	onDragOver(blockId, below) {
		const { id, visibleChildren } = this.props

		var blockIndex = visibleChildren.findIndex(v => v == blockId)

		var dropZoneId = visibleChildren[below ? blockIndex + 1 : blockIndex - 1 ]

		STORE.dispatch({
			type: 'DROPZONE_SHOW',
			dropZoneId: dropZoneId
		})

	}
	onDragEnd(blockId) {
		console.log('slot.ondragend')
		const { id } = this.props


			//toSlotId, fromSlotId, blockId, dropZoneId


		// STORE.dispatch({
		// 	type: 'DRAG_END',
		// 	fromSlotId: id,
		// 	blockId: blockId,
		// 	toSlotId: id,
	 //    	dropZoneId: dropZoneId

		// })
	}

	onDrop(dropZoneId) {
		const { id } = this.props

		STORE.dispatch({
			type: 'BLOCK_DROP',
			slotId: id,
			dropZoneId: dropZoneId
		})
	}

	addClicked() {
	}
	removeClicked() {
	}

	render() {
		console.log('slot.render', this.props)
		const { id, blocks, dropZones, visibleChildren } = this.props

		let children = []

		visibleChildren.forEach((vid, i) => {
			if (i % 2 == 0) {
				children.push(<DropZone key={i} id={vid} onDrop={this.onDrop} />)
			} else {
				children.push(<Block key={i} id={visibleChildren[i]} slotId={id} onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDragEnd={this.onDragEnd} />)
			}
		})

	    const style = {
	    	background: '#eee',
			boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
    		overflow: 'hidden'
	    }

		return (
			<div style={style}>
				<button onClick={this.addClicked}>Add</button>
				<button onClick={this.removeClicked}>Remove</button>
				<button onclick={this.test}>test</button>
				{children}
			</div>
		)
	}
}

export default Slot