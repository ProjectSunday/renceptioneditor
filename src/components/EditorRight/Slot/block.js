import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import './block.less'

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	return Object.assign({}, state.blocks.find(b => b.id === ownProps.id))
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
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	// componentDidMount() {
	// 	console.log('componentDidMount', this.props.index)
	// 	if (this.props.isDragging) {
	// 		this.props.dragBlock(this.props.index)
	// 	}
	// }

	onDragStart(e) {
		// console.log('block.onDragStart')
		const { id, slotId } = this.props

		e.dataTransfer.setData('text', '');



	    STORE.dispatch({
	    	type: 'BLOCK+UI.DRAG_START',
	    	id,
	    	slotId
	    })



	}
	onDragOver(e) {
		// console.log('onDragOver')
		var { id, slotId } = this.props

	    const hoverBoundingRect = e.target.getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    const hoverClientY = e.clientY - hoverBoundingRect.top


		STORE.dispatch({
			type: 'UI_BLOCK_DRAG_OVER',
			id,
			slotId,
			below: hoverMiddleY < hoverClientY
		})

	}
	onDragEnd(e) {
		var { id: srcBlockId, slotId: srcSlotId } = this.props

		STORE.dispatch(function (dispatch, getState) {
			var state = getState()

			var { id: dropZoneId, slotId: destSlotId } = state.ui.destDropZone

			if (dropZoneId !== null) {

				var children = state.ui.slots.fbi(destSlotId).children
				var childIndex = children.findIndex((c, i) => c === dropZoneId && i % 2 == 0)
				
				var destBlockId = children[childIndex + 1]

				dispatch({
					type: 'X_MOVE_BLOCK',
					src: { id: srcBlockId, slotId: srcSlotId },
					dest: { id: destBlockId, slotId: destSlotId }
				})

			}

			dispatch({
				type: 'X_BLOCK_DRAG_END',
				id: srcBlockId,
				slotId: srcSlotId
			})


			state.slots.forEach(s => {
				dispatch({
					type: 'UI_RESET_SLOT',
					slotId: s.id,
					blocks: s.blocks
				})
			})

			dispatch({ type: 'UI_RESET_SLOT_DROPZONES' })

			dispatch({
				type: 'UI_SET_DEST_DROPZONE',
				id: null,
				slotId: null
			})

			dispatch({
				type: 'SLOTS.UPDATE_ALL_SLOTS'
			})
		})

	}
	shouldComponentUpdate(nextProps) {
		// trace('block.shouldComponentUpdate', nextProps)
		var self = this
		var { beingDrag } = nextProps


		setTimeout(function () {
			self.refs.block.style.display = beingDrag ? 'none': 'block'
			// self.refs.block.style.opacity = beingDrag ? 0 : 1
			// self.refs.block.style.zIndex = beingDrag ? -99 : 0
		}, 0)

		return true
	}


	render() {
		// console.log('block.render', this.props)
		const { id, name } = this.props

		var blockAttr = {
			ref: 'block',
			className: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragOver: this.onDragOver,
			onDragEnd: this.onDragEnd,
			style: {
				display: 'block',
				background: '#aaa',
				height: '50px',
				boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
			}
		}

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

