import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

// import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../Actions/actions'

// import './slot.less'

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
		this.insertDropZone = this.insertDropZone.bind(this)
		this.onBeginDrag = this.onBeginDrag.bind(this)
		this.showDropZone = this.showDropZone.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)
		this.dropZoneMounted = this.dropZoneMounted.bind(this)
		this.removeDropZone = this.removeDropZone.bind(this)

		// this.visibleChildren = props.slot.blocks


		// let defaultDropZone = { visible: false, appearing: false }

		this.state = {
			blocks: props.blocks.map((b, i) => {
				return Object.assign(b, { index: i, dropZoneAboveIndex: i, dropZoneBelowIndex: i + 1 })
			}),
			dropZones: Array.from({length: props.blocks.length + 1}, (x, i) => ({ index: i, enable: true, visible: false, appearing: false }))

			// [ dz0,  b0 , dz1, b1 , dz2, b2, dz3 ]
		}

	}
	onBeginDrag(blockIndex) {
		console.log('onBeginDrag')
		
		//relink blocks to new dropzones
		let blocks = this.state.blocks.slice(0)
		var block = blocks[blockIndex]

		if (blockIndex > 0) {
			blocks[blockIndex - 1].dropZoneBelowIndex = block.dropZoneBelowIndex
		}

		//disable dropzone
		let dropZones = this.state.dropZones.slice(0)
		dropZones[block.dropZoneAboveIndex].enable = false
		
		this.setState({
			blocks: blocks,
			dropZones: dropZones
		})
	}
	showDropZone(dropZoneIndex) {
		// console.log(this.state.dropZones)
		if (this.state.dropZones[dropZoneIndex].visible) { return }

		let dropZones = this.state.dropZones.slice(0)
		dropZones.forEach(d => d.visible = false)
		dropZones[dropZoneIndex].visible = true

		// console.log('after ', dropZones)
		this.setState({
			dropZones: dropZones
		})
	}
	insertDropZone(displayIndex, positionBelow, instantaneous) {
		// console.log('insertDropZone', blockId, positionBelow, instantaneous)


		return;


		var existingDropZone = this.state.dropZones.find(d => d.index == index)
		if (existingDropZone && existingDropZone.appearing) { return }

		let dropZones = this.state.dropZones.map(d => Object.assign(d, { appearing: false}))
		let currentIndex = dropZones.findIndex(d => d.index == index)

		if (currentIndex !== -1) {
			dropZones[currentIndex].appearing = true
		} else {
			dropZones.push({
				index: index,
				appearing: true
			})
		}


		// let blocks = this.state.blocks.slice(0)
		// blocks.upsig(b => b.id == blockId, { isDragging: true })


		this.setState({
			// blocks: blocks,
			dropZones: dropZones
		})

				// dispatch(Actions.insertDropZone(slot.id, index))
	}
	componentWillMount() {
		this.setState({
			tempBlocks: [ this.props.blocks[0] ]
		})
	}
	addClicked() {

		let dropZones = this.state.dropZones.slice(0)

		dropZones[0].visible = true;
		dropZones[1].visible = true;

		this.setState({
			dropZones: dropZones
		})
	}

	removeClicked() {

		this.setState({
			dropZones: [{ blockId: 101, appearing: false }]
		})

	}

	removeDropZone(dropZone) {
		// let dropZones = Immutable.fromJS(this.state.dropZones).removeIn([ ''])

		this.setState({
			dropZones: this.state.dropZones.filter(d => d.index != dropZone.index)
		})


	}

	dropZoneMounted() {
		this.setState({
			test: true
		})
	}

	test2() {

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

		// console.log('slot render', dropZones)
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
