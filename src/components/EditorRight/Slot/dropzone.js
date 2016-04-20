import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return { ...state.editor.slots.fbi(ownProps.slotId).dropZone }
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var { index, slotId } = this.props
		l('dropzone.render', 'index', index, 'slotId', slotId)

		var dropZoneAttr = {
			style: {
				background: '#F8F8F8',
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				height: '50px',
				position: 'absolute',
				top: (index * 50) + 'px',
				width: '100%',
				zIndex: 1
			}
		}				

		return (
			<div {...dropZoneAttr}>
				dropZone {slotId}
			</div>
		)
	}

}

export default DropZone

