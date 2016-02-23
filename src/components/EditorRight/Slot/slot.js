import React from 'react'
import { connect } from 'react-redux'

import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'
import DropZone from './DropZone/dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		blocks: ownProps.slot.blocks.map(id => 
			state.blocks.find(b =>
				b.id === id
			)
		),
		dropzone: state.dropzone
	}
}


@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
		this.insertDropZone = this.insertDropZone.bind(this)
	}

	insertDropZone({ blockId, instantaneous = false, positionAbove = true } = {}) {
		// console.log('insertDropZone', blockId, instantaneous, positionAbove)
		const { dispatch, index, dropzone } = this.props
		if (blockId !== dropzone.blockId || positionAbove !== dropzone.positionAbove) {
			dispatch(Actions.insertDropZone(index, blockId, instantaneous, positionAbove))
		}
	}

	render() {
		const { dispatch, slot, index, dropzone, blocks } = this.props

		const slotHasDropzone = index === dropzone.slotIndex

	    const style = {
	    	background: 'gray'
	    }

		let blockNodes = []
		blocks.forEach((b, i) => {
			blockNodes.push(<Block key={i} block={b} insertDropZone={this.insertDropZone} />)

			if (slotHasDropzone && b.id === dropzone.blockId) {
				const insertAt = dropzone.positionAbove ? i : i + 1
				blockNodes.splice(insertAt, 0, (<DropZone key={'dropzone' + insertAt} instantaneous={dropzone.instantaneous} />))
			}
		})

		return (
			<div style={style}>
			<button>Add Block</button>
			<ReactTransitionGroup component="div">
				{blockNodes}
			</ReactTransitionGroup>
			</div>
		)
	}
}
