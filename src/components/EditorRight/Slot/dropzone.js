import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return { 
		activeTexture: state.editor.activeTexture,
		height: state.editor.blockHeight,
		showDropZoneDragOverState: state.editor.showDropZoneDragOverState,
		...state.editor.slots.fbi(ownProps.slotId).dropZone
	}
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)

		this.onDragEnter = this.onDragEnter.bind(this)
		this.onDragLeave = this.onDragLeave.bind(this)
		this.onDrop = this.onDrop.bind(this)


	}

	onDragEnter() {
		var { dropZone } = this.refs

		dropZone.innerHTML = 'Drop Here'
		dropZone.style.opacity = 0.25

	}

	onDragLeave() {
		var { dropZone } = this.refs

		dropZone.innerHTML = 'Drop Blocks or Content Here'
		dropZone.style.opacity = 1

	}

	onDrop() {
		var { dropZone } = this.refs

		dropZone.innerHTML = 'Drop Blocks or Content Here'
		dropZone.style.opacity = 1
	}

	render() {
		var { index, activeTexture, height, showDropZoneDragOverState, slotId, slotEmpty } = this.props
		// l('dropzone.render', 'index', index, 'slotId', slotId)

		var t = slotEmpty ? 0 : (index * height)

		var text = showDropZoneDragOverState ? 'Drop Here' : 'Drop Blocks or Content Here'
		var background = `url(texture_${activeTexture}.png)`

		var dropZoneAttr = {
			ref: 'dropZone',
			onDragEnter: this.onDragEnter,
			onDragLeave: this.onDragLeave,
			onDrop: this.onDrop,
			style: {
				// background: background,
				background: 'rgb(241, 241, 241)',
				// boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				color: 'rgba(47, 46, 46, 0.5)',
				display: 'block',
				fontFamily: 'arial',
				fontSize: '20px',
				fontWeight: 'bold',
				height: height + 'px',
				position: 'absolute',
				textAlign: 'center',
				top: t + 'px',
				verticalAlign: 'middle',
				width: '100%',
				lineHeight: height + 'px',
				zIndex: 1
			}
		}				

		return (
			<div {...dropZoneAttr}>
				{text}
			</div>
		)
	}

}

export default DropZone

