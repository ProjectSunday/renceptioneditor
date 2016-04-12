import React from 'react'
import { connect } from 'react-redux'

const TRANSITION_DELAY = 50

const mapStateToProps = (state, ownProps) => {
	var slot = state.ui.slots.fbi(ownProps.slotId)
	var dropZone = slot.dropZones.fbi(ownProps.id)
	return Object.assign({}, dropZone)
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.onDragEnter = this.onDragEnter.bind(this)
		this.onDragLeave = this.onDragLeave.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		this.onDrop = this.onDrop.bind(this)

		// this.componentDidMount = this.componentDidMount.bind(this)
		this.componentDidUpdate = this.componentDidUpdate.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.render = this.render.bind(this)
	}
	onDragOver(e) {
		e.preventDefault()
	}
	onDrop() {
		STORE.dispatch({
			type: 'UI_SET_DEST_DROPZONE',
			id: this.props.id,
			slotId: this.props.slotId
		})
	}
	onDragEnter() {
		// trace('dropZone.onDragENTER', this.props)
		STORE.dispatch({
			type: 'UI_SET_DEST_DROPZONE',
			id: this.props.id,
			slotId: this.props.slotId
		})
	}
	onDragLeave() {
		// trace('dropzone.onDragLeave', this.props)
		STORE.dispatch({
			type: 'UI_SET_DEST_DROPZONE',
			id: null,
			slotId: null
		})
	}
	shouldComponentUpdate(nextProps) {
		var { pulse } = nextProps
		var { id, slotId } = this.props
		var { dropZone } = this.refs

		if (pulse !== null) {
			dropZone.style.transition = pulse.instant ? '' : `height ${TRANSITION_DELAY}ms`

			setTimeout(function () {  //timeout needed for transition to take affect
				dropZone.style.height = pulse.height
				
				STORE.dispatch({
					type: 'UI_DROPZONE_PULSE_SUCCESS',
					id,
					slotId
				})
			}, 0)
		}
		return false
	}
	componentDidUpdate() {
		// console.log('dropzone.componentDidUpdate', this.props)
	}
	render() {
		// console.log('dropzone.render ', this.props)
		const { id, pulse } = this.props

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

		const indexStyle = {
			background: 'black',
			color: 'yellow'
		}

		const dropZoneAttr = {
			ref: 'dropZone',
			style: {
				background: '#555',
				display: 'block',
				height: pulse.height || '0px'
			},
			onDragOver: this.onDragOver,
			onDrop: this.onDrop
		}

		return (
			<div {...dropZoneAttr}>
				dropzone index: <span style={indexStyle}>{id}</span>
			</div>
		)
	}
}
export default DropZone

