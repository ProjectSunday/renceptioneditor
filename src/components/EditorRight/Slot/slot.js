import React from 'react'
import { bindActionCreators } from 'redux'
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
		// blocks: state.blocks,
		dropzone: state.dropzone
	}
}

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onClick: () => {
// 			dispatch(addBlock(ownProps.slot.id, { name: 'test' }))
// 		},
// 		moveBlock: (fromIndex, toIndex) => {
// 			dispatch(moveBlock(ownProps.slot.id, fromIndex, toIndex))
// 		}
// 	}
// }

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   let blah = Object.assign({}, ownProps, stateProps, dispatchProps, {
// 	blocks: ownProps.slot.blocks.map(id => 
// 		stateProps.blocks.find(b =>
// 			b.id === id
// 		)
// 	)
// 	// insertDropZone: (blockIndex, position) => {
// 	// 	console.log('insertDropZone', this.state)



// 	// 	var insertIndex = (position === 'ABOVE') ? blockIndex : blockIndex++

// 	// 	if (insertIndex !== stateProps.dropzone.index) {
// 	// 		dispatch(insertDropZone(ownProps.index, insertIndex))
// 	// 	}
// 	// }
//   });

//   console.log('blah', blah);
//   return blah;
// }

@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
	}

	insertDropZone() {
		console.log('insertDropZone this', this)

		var insertIndex = (position === 'ABOVE') ? blockIndex : blockIndex++

		if (insertIndex !== stateProps.dropzone.index) {
			this.props.dispatch(Actions.insertDropZone(ownProps.index, insertIndex))
		}

	}

	render() {

		console.table(this.props);
		const { slot, index, dropzone, blocks, dispatch } = this.props

		let hasDropZone = index === dropzone.slotIndex


	    let boundActionCreators = bindActionCreators(Actions, dispatch)
	    console.log('boundActionCreators', boundActionCreators)

		let blockNodes = []
		blocks.forEach((b, i) => {
			if (hasDropZone && i === dropzone.index) {
				blockNodes.push(<DropZone key={'dropzone' + i} appearing={true} {...boundActionCreators}/>)
			}
			blockNodes.push(<Block key={i} index={i} block={b} {...boundActionCreators}/>)
		})

		return (
			<div>
			<button>Add Block</button>
			<ReactTransitionGroup component="div">
				{blockNodes}
			</ReactTransitionGroup>
			</div>
		)
	}
}
