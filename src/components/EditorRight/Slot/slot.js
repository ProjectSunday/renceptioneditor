import React from 'react'
import { connect } from 'react-redux'

import ReactTransitionGroup from 'react-addons-transition-group'

import { addBlock, moveBlock, insertDropZone } from '../../../Actions/actions'

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

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => { 
			dispatch(addBlock(ownProps.slot.id, { name: 'test' }))
		},
		moveBlock: (fromIndex, toIndex) => {
			dispatch(moveBlock(ownProps.slot.id, fromIndex, toIndex))
		},
		insertDropZone: (blockIndex) => {
			dispatch(insertDropZone(ownProps.index, blockIndex))
		}
	}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Slot extends React.Component {
	render() {
		const { slot, index, dropzone, blocks, onClick, moveBlock, insertDropZone } = this.props

		let hasDropZone = index === dropzone.slotIndex

		let blockNodes = []
		blocks.forEach((b, i) => {
			if (hasDropZone && i === dropzone.blockIndex) {
				blockNodes.push(<DropZone key={'dropzone' + i} appearing={true} />)
			}
			blockNodes.push(<Block key={i} index={i} block={b} moveBlock={moveBlock} insertDropZone={insertDropZone}/>)
		})

		return (
			<div>
			<button onClick={onClick}>Add Block</button>
			<ReactTransitionGroup component="div">
				{blockNodes}
			</ReactTransitionGroup>
			</div>
		)
	}
}
