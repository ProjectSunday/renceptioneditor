import React from 'react'
import { connect } from 'react-redux'

const TRANSITION_DELAY = 2000

const mapStateToProps = (state, ownProps) => {
	// red(ownProps)
	var slot = state.ui.slots.fbi(ownProps.slotId)
	var dropZone = slot.dropZones.fbi(ownProps.id)
	return Object.assign({
		active: slot.activeDropZoneId === ownProps.id
	}, dropZone)
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.onDragEnter = this.onDragEnter.bind(this)
		this.onDragLeave = this.onDragLeave.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		// this.onDrop = this.onDrop.bind(this)

		// this.componentDidMount = this.componentDidMount.bind(this)
		this.componentDidUpdate = this.componentDidUpdate.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.render = this.render.bind(this)
	}
	onDragOver(e) {
		e.preventDefault()
		// trace('dropZone.onDragOver')
	}
	// onDrop() {
	// 	// console.log('dropzone.onDrop')
	// 	// var { slotId: destSlotId, id } = this.props

	// 	// STORE.dispatch(function (dispatch, getState) {
	// 	// 	var state = getState()
	// 	// 	var { slotId: srcSlotId, blockId: srcBlockId }  = state.ui.srcBlock

	// 	// 	var children = state.ui.slots.fbi(srcSlotId).children
	// 	// 	var childIndex = children.findIndex((c, i) => c === id && i % 2 == 0)
	// 	// 	var destBlockId = children[childIndex + 1]

	// 	// 	ACTIONS.blockMove(srcSlotId, srcBlockId, destSlotId, destBlockId)

	// 	// 	ACTIONS.initializeSlotUiChildren(srcSlotId, state.slots.fbi(srcSlotId).blocks)

	// 	// 	if (srcSlotId !== destSlotId) {
	// 	// 		ACTIONS.initializeSlotUiChildren(destSlotId, state.slots.fbi(destSlotId).blocks)
	// 	// 	}

	// 	// })
	// }
	onDragEnter() {
		// trace('dropZone.onDragENTER')
		STORE.dispatch({
			type: 'UI_SET_DEST_DROPZONE',
			id: this.props.id,
			slotId: this.props.slotId
		})
	}
	onDragLeave() {
		// trace('dropzone.onDragLeave')
		STORE.dispatch({
			type: 'UI_SET_DEST_DROPZONE',
			id: null,
			slotId: null
		})
	}
	shouldComponentUpdate(nextProps) {
		red(nextProps)
		var { active, instant } = nextProps
		var { slotId, id } = this.props
		var { dropZone } = this.refs

		if (nextProps.instant !== null) {
			dropZone.style.transition = instant ? '' : `height ${TRANSITION_DELAY}ms`

			STORE.dispatch({
				type: 'UI_DROPZONE_SET_INSTANT_NULL',
				id,
				slotId
			})
		}

		setTimeout(function () {  //timeout needed for transition to take affect
			dropZone.style.height = active ? '50px' : '0px'
		}, 0)

		return false
	}
	componentDidUpdate() {
		console.log('dropzone.componentDidUpdate', this.props)
	}
	render() {
		// console.log('dropzone.render ', this.props)
		const { connectDropTarget, id, instant, visible } = this.props

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			display: 'block',
			// height: visible ? '50px' : '0px',
 			// transition: instant ? '' : `height ${TRANSITION_DELAY}ms`,
			// background: randomColor,
			background: '#555',
			height: '0px'
		}

		if (instant === false) {
			style.transition = `height ${TRANSITION_DELAY}ms`
		}

		const indexStyle = {
			background: 'black',
			color: 'yellow'
		}

		return (
			<div ref="dropZone" style={style} 
				onDragEnter={this.onDragEnter}
				onDragLeave={this.onDragLeave}
				onDragOver={this.onDragOver}
			>
				dropzone index: <span style={indexStyle}>{id}</span>
			</div>
		)
	}
}
export default DropZone

