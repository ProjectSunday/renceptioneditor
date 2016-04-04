import React from 'react'
import { connect } from 'react-redux'

import './editorright.less'

import Slot from './slot/slot'

const mapStateToProps = (state) => {
	return Object.assign({}, state.editorRight)
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return { dispatch: dispatch }
}

@connect(mapStateToProps, mapDispatchToProps)
class EditorRight extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.initialize = this.initialize.bind(this)

		this.initialize()
	}

	initialize () {
		const { dispatch } = this.props

		dispatch({
			type: 'DROPZONE_DELETE_ALL'
		})
	}

	// initializeDropZones(slotId) {

	// 	const { blocks } = this.props

	// 	var id = 0

	// 	var defaultDropZone = {
	// 		slotId: this.props.id,
	// 		instant: false,
	// 		visible: false
	// 	}

	// 	var dropZones = []

	// 	// var dropZones = [Object.assign({}, defaultDropZone, {
	// 	// 	id: id++,
	// 	// 	blockAbove: undefined,
	// 	// 	blockBelow: blocks[0],
	// 	// })]

	// 	for (var i = -1; i < blocks.length; i++) {
	// 		dropZones.push(Object.assign({}, defaultDropZone, {
	// 			id: id++,
	// 			blockAbove: blocks[i],
	// 			blockBelow: blocks[i + 1],
	// 		}))
	// 	}

	// 	this.props.initializeDropZones(dropZones)

	// 	// var dropZoneIds = dropZones.map(d => d.id)

	// 	// console.log('dropZones', dropZoneIds)

	// }

	render() {
		const { slots } = this.props
		return (
			<div id="editorright" className="row">
				{slots.map((s, i) =>
					<Slot key={i} id={s} />
				)}
			</div>
		)
	}
}

export default EditorRight
