import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return { 
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

	}

	onDragEnter() {
		var { dropZone } = this.refs

		dropZone.innerHTML = 'Drop Here'

	}

	onDragLeave() {
		var { dropZone } = this.refs

		dropZone.innerHTML = 'blah'
	}

	render() {
		var { index, showDropZoneDragOverState, slotId, slotEmpty } = this.props
		// l('dropzone.render', 'index', index, 'slotId', slotId)

		var t = slotEmpty ? 0 : (index * 50)

		var text = showDropZoneDragOverState ? 'Drop Here' : 'Drop Blocks or Content Here'

		var dropZoneAttr = {
			ref: 'dropZone',
			onDragEnter: this.onDragEnter,
			onDragLeave: this.onDragLeave,
			style: {
				background: '#F8F8F8',
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				height: '50px',
				position: 'absolute',
				top: t + 'px',
				width: '100%',
				zIndex: 1
			}
		}				

		return (
			<div {...dropZoneAttr}>
				{text} {slotId}
			</div>
		)
	}

}

export default DropZone

