import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import './block.less'

const TRANSITION_DELAY = 2000

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	var block = state.editor.blocks.fbi(ownProps.id)
	return {
		...block
	}
}

@connect(mapStateToProps)
export default class Block extends Component {
	constructor(props) {
		super(props)


		this.render = this.render.bind(this)
		this.onDragStart = this.onDragStart.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

		// this.componentDidMount = this.componentDidMount.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)

	}
	// componentDidMount() {
	// 	console.log('componentDidMount', this.props.index)
	// 	if (this.props.isDragging) {
	// 		this.props.dragBlock(this.props.index)
	// 	}
	// }

	onDragStart(e) {
		// console.log('block.onDragStart')
		var { id, slotId } = this.props
		// var { blockContainer } = this.refs

		e.dataTransfer.setData('text', '')  //neded for HTML5 dragging to work, do not remove

		// var { nextBlock } = STORE.dispatch({
		// 	type: 'SLOTS.GET_NEXT_BLOCK',
		// 	id: slotId,
		// 	blockId: id
		// })

		// red('nextBlock', nextBlock)

		// if (nextBlock !== undefined) {
		// 	STORE.dispatch({
		// 		type:'BLOCKS.SET_DROPZONE',
		// 		id: nextBlock,
		// 		below: false,
		// 		instant: true
		// 	})
		// }

		STORE.dispatch({
			type: 'BLOCKS.SET_BEING_DRAG',
			id: id
		})


	 //    STORE.dispatch({
	 //    	type: 'BLOCK+UI.DRAG_START',
	 //    	id,
	 //    	slotId
	 //    })



	}
	onDragOver(e) {
		// console.log('onDragOver')
		var { id, index, slotId } = this.props
		var { block } = this.refs

	    const hoverBoundingRect = block.getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    const hoverClientY = e.clientY - hoverBoundingRect.top

	    if (hoverMiddleY < hoverClientY) { index++ }

		STORE.dispatch({
			type: 'SLOTS.MOUSE_OVER_BLOCK',
			id: slotId,
			index: index
		})

		// STORE.dispatch({
		// 	type: 'UI_BLOCK_DRAG_OVER',
		// 	id,
		// 	slotId,
		// 	below: hoverMiddleY < hoverClientY
		// })

	}
	onDragEnd(e) {
		// var { id: srcBlockId, slotId: srcSlotId } = this.props

		// STORE.dispatch(function (dispatch, getState) {
		// 	var state = getState()

		// 	var { id: dropZoneId, slotId: destSlotId } = state.ui.destDropZone

		// 	if (dropZoneId !== null) {

		// 		var children = state.ui.slots.fbi(destSlotId).children
		// 		var childIndex = children.findIndex((c, i) => c === dropZoneId && i % 2 == 0)
				
		// 		var destBlockId = children[childIndex + 1]

		// 		dispatch({
		// 			type: 'X_MOVE_BLOCK',
		// 			src: { id: srcBlockId, slotId: srcSlotId },
		// 			dest: { id: destBlockId, slotId: destSlotId }
		// 		})

		// 	}

		// 	dispatch({
		// 		type: 'X_BLOCK_DRAG_END',
		// 		id: srcBlockId,
		// 		slotId: srcSlotId
		// 	})


		// 	state.slots.forEach(s => {
		// 		dispatch({
		// 			type: 'UI_RESET_SLOT',
		// 			slotId: s.id,
		// 			blocks: s.blocks
		// 		})
		// 	})

		// 	dispatch({ type: 'UI_RESET_SLOT_DROPZONES' })

		// 	dispatch({
		// 		type: 'UI_SET_DEST_DROPZONE',
		// 		id: null,
		// 		slotId: null
		// 	})

		// 	dispatch({
		// 		type: 'SLOTS.UPDATE_ALL_SLOTS'
		// 	})
		// })

	}
	shouldComponentUpdate(nextProps) {
		// trace('block.shouldComponentUpdate', nextProps)
		var { update, render, beingDrag, dropZone } = nextProps
		if (update !== true) { return false }  //update can be undefined

		var { block } = this.refs

		// var classList = blockContainer.classList
		// if (dropZone) {
		// 	var { instant, below } = dropZone

		// 	dropZoneAbove.style.transition = instant ? '' : `height ${TRANSITION_DELAY}ms`
		// 	dropZoneBelow.style.transition = instant ? '' : `height ${TRANSITION_DELAY}ms`

		// 	var heightAbove = below ? '0px' : '50px'
		// 	var heightBelow = below ? '50px' : '0px'

		// } else {
		// 	var heightAbove = '0px'
		// 	var hieghtBelow = '0px'
		// }

		setTimeout(function () {
			block.style.display = beingDrag ? 'none': 'block'
			block.style['z-index'] = beingDrag ? -9999 : 0
			// dropZoneAbove.style.height = heightAbove
			// dropZoneBelow.style.height = heightBelow

			// setTimeout(() => {
			// 	dropZoneAbove.style.transition = `height ${TRANSITION_DELAY}ms`
			// 	dropZoneBelow.style.transition = `height ${TRANSITION_DELAY}ms`
			// }, 0)

		}, 0)

		return ( render === true )
	}


	render() {
		// console.log('block.render', this.props)
		const { id, index, name, top } = this.props

		// var blockContainerAttr = {
		// 	ref: 'blockContainer',
		// 	className: 'block-container', 
		// 	style: {
		// 		position: 'absolute',
		// 		top: '0px'
		// 	}
		// }

		var blockAttr = {
			ref: 'block',
			className: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragOver: this.onDragOver,
			// onDragEnd: this.onDragEnd,
			style: {
				display: 'block',
			// 	background: '#aaa',
				height: '50px',
				width: '100%',
			// 	boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)',
				position: 'absolute',
				top: `${index * 50}px`,
				transition: 'top 2s'
				// top: top + 'px'
			}
		}

		// var dropZoneAttr = {
		// 	style: {
		// 		background: 'red',
		// 		display: 'block',
		// 		height: '0px'
		// 		// opacity: '0'
		// 	}
		// }

		const idStyles = {
			background: 'black',
			color: 'yellow'
		}
				

		return (
			<div {...blockAttr}>
				<span className="name">{name}<span style={idStyles}>{id}</span></span>
			</div>
		)
	}

}

