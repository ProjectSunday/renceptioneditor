import React from 'react'
// import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import Block from './block'
import DropZone from './dropzone2'

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		yos: state.blocks
// 	}
// }

// @connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)

		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)

	}

	addClicked() {
		this.props.dispatch(Actions.dragBlock(this.props.id, 1))
	}
	removeClicked() {
		this.props.dispatch(Actions.removeAllDropZones(this.props.id))
	}

	render() {
		console.log('slot.render', this.props)
		const { id, blocks, dropZones } = this.props

		let children = []

		blocks.forEach((b, i) => {
			children.push(<DropZone key={'dz' + i} {...dropZones[i]} slotId={id} />)
			children.push(<Block key={i} id={b} slotId={id} />)
		})

		//the very bottom dropzone
		children.push(<DropZone key={'dz' + blocks.length} {...dropZones[blocks.length]} slotId={id} />)

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