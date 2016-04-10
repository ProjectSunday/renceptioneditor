import React from 'react'
import { connect } from 'react-redux'

const TRANSITION_DELAY = 2000

const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, 
		state.ui.slots.find(s => s.id == ownProps.slotId)
		.dropZones.find(d => d.id == ownProps.id)
	)
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.onDrop = this.onDrop.bind(this)
		this.onDragOver = this.onDragOver.bind(this)

		// this.componentDidMount = this.componentDidMount.bind(this)
		this.componentDidUpdate = this.componentDidUpdate.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.render = this.render.bind(this)
	}
	onDragOver(e) {
		e.preventDefault()
	}
	onDrop() {
		var { slotId: destSlotId, id } = this.props

		STORE.dispatch(function (dispatch, getState) {
			var state = getState()
			var { slotId: srcSlotId, blockId: srcBlockId }  = state.ui.srcBlock

			var children = state.ui.slots.fbi(srcSlotId).children
			var childIndex = children.findIndex((c, i) => c === id && i % 2 == 0)
			var destBlockId = children[childIndex + 1]

			ACTIONS.blockMove(srcSlotId, srcBlockId, destSlotId, destBlockId)

			ACTIONS.initializeSlotUiChildren(srcSlotId, state.slots.fbi(srcSlotId).blocks)

			if (srcSlotId !== destSlotId) {
				ACTIONS.initializeSlotUiChildren(destSlotId, state.slots.fbi(destSlotId).blocks)
			}

		})
	}
	shouldComponentUpdate(nextProps) {
		console.log('dropzone.shouldComponentUpdate', nextProps)
		var { slotId, id: dropZoneId } = this.props
		var { dropZone } = this.refs

		// if (nextProps.visible) {
		// 	dropZone.style.display = 'block'
			
		// 	if (nextProps.instant) {
		// 		dropZone.style.transition = ''
		// 	} else {
		// 		dropZone.style.transition = `height ${TRANSITION_DELAY}ms`
		// 	}

		// 	var height = nextProps.expanding ? '50px' : '0px'
		// 	setTimeout(function () {
		// 		dropZone.style.height = height

		// 		STORE.dispatch({
		// 			type: 'UI_DROPZONE_SET',
		// 			slotId,
		// 			dropZoneId
		// 		})

		// 	}, 0)


		// } else {
		// 	dropZone.style.display = 'none'
		// }

		// dropZone.style.transition = nextProps.instant ? '' : `height ${TRANSITION_DELAY}ms`

		// var height = nextProps.visible ? '50px' : '0px'
		// setTimeout(function () {
		// 	dropZone.style.height = height
		// }, 0)

		// return false
	}
	componentDidUpdate() {
		console.log('dropzone.componentDidUpdate', this.props)
	}
	render() {
		console.log('dropzone.render ', this.props)
		const { connectDropTarget, id, instant, visible } = this.props

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
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
			<div ref="dropZone" style={style} onDrop={this.onDrop} onDragOver={this.onDragOver}>
				dropzone index: <span style={indexStyle}>{id}</span>
			</div>
		)
	}
}
export default DropZone

