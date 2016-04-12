import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import './block.less'

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	return Object.assign({
		visible: state.ui.srcBlock.id !== ownProps.id
	}, state.blocks.find(b => b.id === ownProps.id))
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
	    	type: 'UI_BLOCK_DRAG_START',
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

		STORE.dispatch(function (dispatch, getState) {
			var state = getState()

			trace(state.ui.destDropZone)

			/* 
			if dest
				move block
			}

				reset all children
					reset dropzones and generate block children

			*/

			var { id: dropZoneId, slotId: destSlotId } = state.ui.destDropZone
			var srcSlotId  = state.ui.srcBlock.slotId

			if (dropZoneId !== null) {

				var children = state.ui.slots.fbi(destSlotId).children
				var childIndex = children.findIndex((c, i) => c === dropZoneId && i % 2 == 0)
				
				var destBlockId = children[childIndex + 1]


				trace(destBlockId, destSlotId)
				dispatch({
					type: 'X_MOVE_BLOCK',
					src: state.ui.srcBlock,
					dest: { id: destBlockId, slotId: destSlotId }
				})
			}

			dispatch({
				type: 'UI_RESET_SLOT',
				slotId: srcSlotId,
				blocks: state.slots.fbi(srcSlotId).blocks
			})

			if (srcSlotId !== destSlotId) {
				dispatch({
					type: 'UI_RESET_SLOT',
					slotId: destSlotId,
					blocks: state.slots.fbi(destSlotId).blocks
				})
			}

			dispatch({
				type: 'UI_SET_ACTIVE_DROPZONE'
			})
		})

	}
	shouldComponentUpdate(nextProps) {
		// console.log('block.shouldComponentUpdate', nextProps.index)
		var self = this
		var { visible } = nextProps


		setTimeout(function () {
			self.refs.block.style.display = visible ? 'block': 'none'
		}, 0)

		return true
	}


	render() {
		// console.log('block.render', this.props)
		const { id, name } = this.props

		let styles = {
			display: 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}

		const idStyles = {
			background: 'black',
			color: 'yellow'
		}

				

		return (
			<div ref="block" className="block" style={styles} draggable="true"
				onDragStart={this.onDragStart}
				onDragOver={this.onDragOver}
				onDragEnd={this.onDragEnd}
			>
				<span className="name">{name}<span style={idStyles}>{id}</span></span>
			</div>
		)
	}

}

