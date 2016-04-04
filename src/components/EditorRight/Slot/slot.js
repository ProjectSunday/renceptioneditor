import React from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import Block from './block'
import DropZone from './dropzone2'

const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.slots.find(s => s.id == ownProps.id))
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return { dispatch: dispatch }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)

		this.initializeDropZones = this.initializeDropZones.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)

		this.initializeDropZones()
	}

	// shouldComponentUpdate(nextProps) {
	// 	if (this.props.dropZones.length !== nextProps.dropZones.length) { return false }
	// }


	initializeDropZones() {
		const { dispatch, id, blocks } = this.props
		const dropZoneIds = this.props.dropZones

		var dropZones = dropZoneIds.map(dzi => ({
			id: dzi,
			slotId: id,
			blockAbove: blocks[dzi - 1],
			blockBelow: blocks[dzi],
			instant: false,
			visible: false
		}))

		dispatch({
			type: 'DROPZONE_ADD_ALL',
			dropZones: dropZones
		})
	}

	addClicked() {
		this.props.dispatch({
	    		type: 'SLOT_SET_DROPZONE_VISIBLE', 
	    		slotId: 1000, 
	    		blockId: 103, 
	    		below: true
		})
	}
	removeClicked() {
		this.props.dispatch(Actions.removeAllDropZones(this.props.id))
	}

	render() {
		console.log('slot.render', this.props)
		const { id, blocks, dropZones, dragBlock } = this.props

		let children = []

		blocks.forEach((b, i) => {
			children.push(<DropZone key={'dz' + i} id={dropZones[i]} slotId={id} />)
			children.push(<Block key={i} id={b} slotId={id} />)
		})

		//the very bottom dropzone
		children.push(<DropZone key={'dz' + blocks.length} id={dropZones[blocks.length]} slotId={id} />)

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