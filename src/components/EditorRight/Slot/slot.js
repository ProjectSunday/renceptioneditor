import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import * as Actions from '../../../Actions/actions'

import Block from './Block/block'
import DropZone from './dropzone3'

const mapStateToProps = (state, ownProps) => {
	return {
		blocks: ownProps.slot.blocks.map(id => {
			return Object.assign(state.blocks.find(b => b.id === id), { drag: false })
		})
	}
}

@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.onBeginDrag 		= this.onBeginDrag.bind(this)
		this.showDropZone 		= this.showDropZone.bind(this)
		this.setDropZoneVisible = this.setDropZoneVisible.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)

		this.nextDropZoneShouldBeInstant = false;

		this.state = {
			blocks: props.blocks.map((b, i) => 
				Object.assign(b, { index: i, dropZoneAboveIndex: i, dropZoneBelowIndex: i + 1 })
			),
			dropZones: Array.from({length: props.blocks.length + 1}, (x, i) => 
				({ index: i, visible: false, appearing: false, instant: false })
			)
			// [ dz0,  b0 , dz1, b1 , dz2, b2, dz3 ]
		}

	}
	onBeginDrag(blockIndex) {
		console.log('onBeginDrag', blockIndex)
		
		//relink blocks to new dropzones
		let blocks = this.state.blocks.slice(0)
		var block = blocks[blockIndex]

		if (blockIndex > 0) {
			blocks[blockIndex - 1].dropZoneBelowIndex = block.dropZoneBelowIndex
		}


		this.setDropZoneVisible(block.dropZoneAboveIndex, true)

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
	showDropZone(dropZoneIndex) {
		console.log('showDropZone', dropZoneIndex)
		if (this.state.dropZones[dropZoneIndex].visible) { return }
		// console.log('showDropZone', dropZoneIndex)

		this.setDropZoneVisible(dropZoneIndex, false)

		this.setState({
			dropZones: this.state.dropZones.slice(0)
		})

	}

	setDropZoneVisible(dropZoneIndex, instant = false) {

		console.log('setDropZoneVisible', dropZoneIndex)
		this.state.dropZones.forEach(d => {
			d.visible = d.instant = false
		})
		if (instant) {
			this.state.dropZones[dropZoneIndex].instant = true
		}
		this.state.dropZones[dropZoneIndex].visible = true
	}

	addClicked() {

		this.onBeginDrag(1)

	}
	removeClicked() {

		this.setState({
			dropZones: [{ blockId: 101, appearing: false }]
		})

	}

	render() {
		var self = this;
		const { dispatch, slot } = this.props
		const { blocks, dropZones } = this.state

		let children = []

		blocks.forEach((b, i) => {
			children.push(<DropZone key={'dz' + i} {...dropZones[i]} />)
			children.push(<Block key={i} {...blocks[i]} onBeginDrag={self.onBeginDrag} showDropZone={self.showDropZone} />)
		})

		//the very bottom dropzone
		children.push(<DropZone key={'dz' + blocks.length} {...dropZones[blocks.length]} />)

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
