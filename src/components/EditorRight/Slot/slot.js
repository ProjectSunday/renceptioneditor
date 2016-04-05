import React from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import Block from './block'
import DropZone from './dropzone2'

const mapStateToProps = (state, ownProps) => {
	console.log('slot.mapStateToProps')
	var slot = state.slots.find(s => s.id == ownProps.id)

	// const { blocks, dropZones } = slot

	// var i = 0, visibleChildren = [];

	// for (i; i < blocks.length; i++) {
	// 	visibleChildren.push(dropZones[i])
	// 	visibleChildren.push(blocks[i])
	// }

	// visibleChildren.push(dropZones[i])

	return Object.assign({}, state.slots.find(s => s.id == ownProps.id))
	// return {
	// 	blocks: slot.blocks,
	// 	dropZones: slot.dropZones,
	// 	visibleChildren: slot.visibleChildren
	// }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return { dispatch: dispatch }
}

@connect(mapStateToProps, mapDispatchToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		// this.componentDidUpdate = this.componentDidUpdate.bind(this)


		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)

	}

	// shouldComponentUpdate(nextProps) {
	// 	console.log('slot.shouldComponentUpdate', !!nextProps.update)
	// 	return true
	// 	// return !!nextProps.update
	// }
	// componentDidUpdate(prevProps) {
	// 	console.log('slot.componentDidUpdate')
	// }

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
				children.push(<DropZone key={i} id={vid} />)
			} else {
				children.push(<Block key={i} id={vid} slotId={id} />)
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