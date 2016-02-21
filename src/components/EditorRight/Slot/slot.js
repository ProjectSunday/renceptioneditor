import React from 'react'
import { connect } from 'react-redux'

import ReactTransitionGroup from 'react-addons-transition-group'

import { addBlock, moveBlock, insertDropZone } from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'
import DropZone from './DropZone/dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		// blocks: ownProps.slot.blocks.map(id => 
		// 	state.blocks.find(b =>
		// 		b.id === id
		// 	)
		// ),
		blocks: state.blocks,
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
		}
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let blah = Object.assign({}, ownProps, stateProps, dispatchProps, {
	blocks: ownProps.slot.blocks.map(id => 
		stateProps.blocks.find(b =>
			b.id === id
		)
	),
	insertDropZone: (blockIndex, position) => {
		console.log('insertDropZone', this.state)



		var insertIndex = (position === 'ABOVE') ? blockIndex : blockIndex++

		if (insertIndex !== stateProps.dropzone.index) {
			dispatch(insertDropZone(ownProps.index, insertIndex))
		}
	}
  });

  console.log('blah', blah);
  return blah;
}

@connect(mapStateToProps, mapDispatchToProps, mergeProps)
export default class Slot extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
	}
	render() {

		console.table(this.props);
		const { slot, index, dropzone, blocks, onClick, moveBlock, insertDropZone } = this.props

		let hasDropZone = index === dropzone.slotIndex

		let blockNodes = []
		blocks.forEach((b, i) => {
			if (hasDropZone && i === dropzone.index) {
				blockNodes.push(<DropZone key={'dropzone' + i} appearing={true} />)
			}

			let hasDropZoneAbove, hasDropZoneBelow;


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
