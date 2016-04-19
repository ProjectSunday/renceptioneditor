import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	var dz = state.editor.blocks.fbi(ownProps.slotId)


	return block

	// var blah = { ...block }

	// r()


	// return blah
}

@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var { id, index } = this.props
		// l('dropzone.render', 'index', index)

		var dropZoneAttr = {
			style: {
				background: 'blue',
				zIndex: 1,
				position: 'absolute',
				top: (index * 50) + 'px'
			}
		}				

		return (
			<div {...dropZoneAttr}>
				dropZone
			</div>
		)
	}

}

export default DropZone

