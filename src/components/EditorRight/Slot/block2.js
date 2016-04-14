import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import './block.less'

const TRANSITION_DELAY = 100

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	var block = state.blocks.fbi(ownProps.id)
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





	 //    STORE.dispatch({
	 //    	type: 'BLOCK+UI.DRAG_START',
	 //    	id,
	 //    	slotId
	 //    })



	}
	onDragOver(e) {
		// console.log('onDragOver')
		var { id, slotId } = this.props
		var { block } = this.refs

	    const hoverBoundingRect = block.getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    const hoverClientY = e.clientY - hoverBoundingRect.top

		STORE.dispatch({
			type: 'BLOCKS.SET_DROPZONE',
			id,
			below: hoverMiddleY < hoverClientY
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

		var { blockContainer, dropZoneAbove, dropZoneBelow } = this.refs

		var classList = blockContainer.classList
		if (dropZone) {
			// classList.add('dropzone')
			var { instant, below, expanding } = dropZone




			// 	classList.add('instant'); classList.remove('gradual')
			// } else {
			// 	classList.add('gradual'); classList.remove('instant')
			// }

			// setTimeout(() => {


					dropZoneAbove.style.transition = instant ? '' : `height ${TRANSITION_DELAY}ms`
					dropZoneBelow.style.transition = instant ? '' : `height ${TRANSITION_DELAY}ms`

					dropZoneAbove.style.height = below ? '0px' : '50px'
					dropZoneBelow.style.height = below ? '50px' : '0px'



				// dropZoneAbove.style.height = expanding ? '50px' : '0px'


				// if (below) {


				// 	classList.add('below'); classList.remove('above')
				// } else {
				// 	classList.add('above'); classList.remove('below')
				// }

				// if (expanding) {
				// 	classList.add('expanding'); classList.remove('collapsing')
				// } else {
				// 	classList.add('collapsing'); classList.remove('expanding')
				// }

			// }, 0)

		} else {
			dropZoneAbove.style.height = '0px'
			dropZoneBelow.style.height = '0px'
			// classList.remove('dropzone', 'gradual', 'instant', 'expanding', 'collapsing', 'above', 'below')
		}

		// setTimeout(function () {
		// 	self.refs.block.style.display = beingDrag ? 'none': 'block'
		// 	// self.refs.block.style.opacity = beingDrag ? 0 : 1
		// 	// self.refs.block.style.zIndex = beingDrag ? -99 : 0
		// }, 0)

		return ( render === true )
	}


	render() {
		// console.log('block.render', this.props)
		const { id, name } = this.props

		var blockContainerAttr = {
			ref: 'blockContainer',
			className: 'block-container'
		}

		var blockAttr = {
			className: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragOver: this.onDragOver,
			// onDragEnd: this.onDragEnd,
			style: {
				display: 'block',
			// 	background: '#aaa',
				height: '50px',
			// 	boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
			}
		}

		var dropZoneAttr = {
			style: {
				background: 'red',
				display: 'block',
				height: '0px',
				opacity: '0'
			}
		}

		const idStyles = {
			background: 'black',
			color: 'yellow'
		}
				

		return (
			<div {...blockContainerAttr}>
				<div ref="dropZoneAbove" {...dropZoneAttr}>DROPZONE ABOVE</div>
				<div ref="block" {...blockAttr}>
					<span className="name">{name}<span style={idStyles}>{id}</span></span>
				</div>
				<div ref="dropZoneBelow" {...dropZoneAttr}>dropzone below</div>
			</div>
		)
	}

}

