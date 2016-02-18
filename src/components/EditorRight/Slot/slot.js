import React, { Component } from 'react'
import { connect } from 'react-redux'

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
export default class Slot extends Component {
	render() {
		const { slot, index, dropzone, blocks, onClick, moveBlock, insertDropZone } = this.props

		// console.group('slot')
		// console.count()
		// console.log('blocks ', blocks[0].id, blocks[1].id, blocks[2].id)
		// console.log('dropzone', dropzone)


		// let hasDropZone = (index === dropzone.slotIndex || index === dropzone.previous.slotIndex)

		let hasDropZoneAppearing 	= index === dropzone.slotIndex
		let hasDropZoneDisappearing = index === dropzone.previous.slotIndex

		let blockNodes = []
		blocks.forEach((b, i) => {
			if (hasDropZoneAppearing && i === dropzone.blockIndex) {
				blockNodes.push(<DropZone key="dropzone-appearing" isAppearing={true} />)
			} else if (hasDropZoneDisappearing && i === dropzone.previous.blockIndex) {
				blockNodes.push(<DropZone key="dropzone-disappearing" isAppearing={false} />)
			}
			blockNodes.push(<Block key={i} index={i} block={b} moveBlock={moveBlock} insertDropZone={insertDropZone}/>)
		})

		// console.groupEnd()
		return (
			<div className = "slot">
				<button onClick={onClick}>Add Block</button>
				{blockNodes}
			</div>
		)
	}
}


			// {blocks.map((b, i) => {
			// 		if (hasDropZone && i == dropzone.blockIndex) {
			// 			<div key="dropzone">dropzone</div>
			// 		}
			// 		<div>huh</div>
			// 		// <Block key={i} index={i} block={b} moveBlock={moveBlock} insertDropZone={insertDropZone}/>
			// 	})}

