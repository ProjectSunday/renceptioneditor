import React from 'react'
import { connect } from 'react-redux'

import Block from './block'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	console.log('slot.mapStateToProps')

	var slot = state.slots.find(s => s.id == ownProps.id)
	var ui = state.ui.slots.find(s => s.id == ownProps.id) || {}

	return Object.assign({}, ui, slot)
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		// this.componentDidUpdate = this.componentDidUpdate.bind(this)

		// this.onDragStart = this.onDragStart.bind(this)
		// this.onDragOver = this.onDragOver.bind(this)
		// this.onDragEnd = this.onDragEnd.bind(this)

		// this.onDrop = this.onDrop.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)

		STORE.dispatch({
			type: 'UI_INITILIZE_SLOT_CHILDREN',
			slotId: props.id,
			blocks: props.blocks
		})

	}

	// shouldComponentUpdate(nextProps) {
	// 	console.log('slot.shouldComponentUpdate', !!nextProps.update)
	// 	return true
	// 	// return !!nextProps.update
	// }
	// componentDidUpdate(prevProps) {
	// 	console.log('slot.componentDidUpdate')
	// }

	// onDragStart(blockId) {
	// 	const { id, children } = this.props
	// 	this.dragBlockId = blockId

	// 	var blockIndex = children.findIndex(v => v == blockId)
	// 	var dropZoneId = children[blockIndex + 1]

	//     STORE.dispatch({
	//     	type: 'DRAG_START',
	//     	slotId: id,
	//     	blockId: blockId,
	//     	dropZoneId: dropZoneId
	//     })
	// }
	// onDragOver(blockId, below) {
	// 	const { id, children } = this.props

	// 	var blockIndex = children.findIndex(v => v == blockId)

	// 	var dropZoneId = children[below ? blockIndex + 1 : blockIndex - 1 ]

	// 	STORE.dispatch({
	// 		type: 'DROPZONE_SHOW',
	// 		dropZoneId: dropZoneId
	// 	})

	// }
	// onDragEnd(blockId) {
	// 	console.log('slot.ondragend')
	// 	const { id } = this.props


	// 		//toSlotId, fromSlotId, blockId, dropZoneId


	// 	// STORE.dispatch({
	// 	// 	type: 'DRAG_END',
	// 	// 	fromSlotId: id,
	// 	// 	blockId: blockId,
	// 	// 	toSlotId: id,
	//  //    	dropZoneId: dropZoneId

	// 	// })
	// }

	// onDrop(dropZoneId) {
	// 	const { id } = this.props

	// 	STORE.dispatch({
	// 		type: 'BLOCK_DROP',
	// 		slotId: id,
	// 		dropZoneId: dropZoneId
	// 	})
	// }

	addClicked() {
	}
	removeClicked() {
	}

	render() {
		console.log('slot.render', this.props)
		const { id, blocks, dropZones, children } = this.props

		let nodes = []

		return (<div>blah</div>)

		children.forEach((c, i) => {
			if (i % 2 == 0) {
				nodes.push(<DropZone key={i} id={c} slotId={id} />)
			} else {
				nodes.push(<Block key={i} id={c} slotId={id} />)
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
				{nodes}
			</div>
		)
	}
}

export default Slot