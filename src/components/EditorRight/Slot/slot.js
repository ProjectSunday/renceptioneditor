import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import * as Actions from '../../../actions'

import Block from './block'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		blocks: ownProps.blocks.map(id => state.blocks.find(b => b.id === id))
	}
}

@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)

		this.onBeginDrag 		= this.onBeginDrag.bind(this)
		this.onEndDrag			= this.onEndDrag.bind(this)
		this.showDropZone 		= this.showDropZone.bind(this)
		this.setDropZoneVisible = this.setDropZoneVisible.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)


		// this.state = {
		// 	blocks: this.appendDropZoneData(props.blocks),
		// 	dropZones: this.generateDropZones(props.blocks)
		// 	// [ dz0,  b0 , dz1, b1 , dz2, b2, dz3 ]
		// }

	}
	appendDropZoneData(blocks) {
		return blocks.map((b, i) => 
			Object.assign(b, { index: i, dropZoneAboveIndex: i, dropZoneBelowIndex: i + 1 })
		)
	}
	generateDropZones(blocks) {
		return Array.from({length: blocks.length + 1}, (x, i) => 
			({ index: i, visible: false, appearing: false, instant: false })
		)
	}

	onBeginDrag(blockIndex) {
		// console.log('onBeginDrag', blockIndex)
		
		//relink blocks to new dropzones
		let blocks = this.state.blocks.slice(0)
		var block = blocks[blockIndex]

		if (blockIndex > 0) {
			blocks[blockIndex - 1].dropZoneBelowIndex = block.dropZoneBelowIndex
		}


		this.setDropZoneVisible(block.dropZoneBelowIndex, true)

		// this.nextDropZoneShouldBeInstant = true

		//disable dropzone
		// let dropZones = this.state.dropZones.slice(0)
		// dropZones[block.dropZoneAboveIndex].enable = false
		
		this.setState({
			blocks: blocks,
			dropZones: this.state.dropZones.slice(0)
			// dropZones: dropZones
		})

		// this.showDropZone(block.dropZoneAboveIndex, true)
	}
	onEndDrag(blockIndex, dropZoneIndex) {
		console.log('onEndDrag', blockIndex, dropZoneIndex)




		// let blocks = this.state.blocks.slice(0)


		if (blockIndex != dropZoneIndex && this.state.blocks[blockIndex].dropZoneBelowIndex != dropZoneIndex) {
			console.log('moving block ', blockIndex, dropZoneIndex)
			let id = this.props.id


			// this.props.dispatch(Actions.moveBlock(id, blockIndex, id, dropZoneIndex))
		}
		
		// this.setDropZoneVisible(null)

		// blocks.splice(dropZoneIndex, 0, blocks.splice(blockIndex, 1)[0])

		// debugger;

		// this.setState({
		// 	blocks: blocks,
		// 	dropZones: this.state.dropZones.splice(0)
		// })
	}
	showDropZone(dropZoneIndex) {
		// console.log('showDropZone', dropZoneIndex)
		if (this.state.dropZones[dropZoneIndex].visible) { return }
		// console.log('showDropZone', dropZoneIndex)

		this.setDropZoneVisible(dropZoneIndex, false)

		this.setState({
			dropZones: this.state.dropZones.slice(0)
		})

	}

	setDropZoneVisible(dropZoneIndex, instant = false) {

		// console.log('setDropZoneVisible', dropZoneIndex)
		this.state.dropZones.forEach(d => {
			d.visible = d.instant = false
		})
		if (instant) {
			this.state.dropZones[dropZoneIndex].instant = true
		}
		if (dropZoneIndex != null) {
			this.state.dropZones[dropZoneIndex].visible = true
		}
	}

	addClicked() {

		this.props.dispatch(Actions.dragBlock(this.props.id, 1))

	}
	removeClicked() {
		this.props.dispatch(Actions.removeAllDropZones(this.props.id))
	}



	// componentWillReceiveProps(nextProps) {
	// 	this.setState({
	// 		blocks: this.appendDropZoneData(nextProps.blocks),
	// 		dropZones: this.generateDropZones(nextProps.blocks)
	// 	})
	// }

	render() {
		var self = this;
		// console.log('slot.render', this.props)
		const { blocks, dropZones, id } = this.props
		// const { blocks, dropZones } = this.state

		let children = []

		blocks.forEach((b, i) => {
			children.push(<DropZone key={'dz' + i} {...dropZones[i]} index={i} slotId={id} />)

			var indexAbove = i
			if (!dropZones[indexAbove].enable) {
				indexAbove = i - 1
			}

			var indexBelow = i + 1
			if (!dropZones[indexBelow].enable) {
				indexBelow = i + 2
			}

			children.push(<Block key={i} {...b} index={i} slotId={id} dropZoneAboveIndex={indexAbove} dropZoneBelowIndex={indexBelow} />)
		})

		//the very bottom dropzone
		children.push(<DropZone key={'dz' + blocks.length} {...dropZones[blocks.length]} index={blocks.length} slotId={id} />)

	    const style = {
	    	background: '#eee',
			boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
    		overflow: 'hidden'
	    }

		return (
			<div style={style}>
				<button onClick={self.addClicked}>Add</button>
				<button onClick={self.removeClicked}>Remove</button>
				<button onclick={self.test}>test</button>
				{children}
			</div>
		)
	}
}
