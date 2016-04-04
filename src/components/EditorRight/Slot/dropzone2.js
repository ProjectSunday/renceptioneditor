import React from 'react'
import { connect } from 'react-redux'
// import { DropTarget } from 'react-dnd'

import * as Actions from '../../../actions'

const TRANSITION_DELAY = 100

// const dropZoneTarget = {
// 	// hover (props, monitor, component) {

// 	// },
// 	drop(props, monitor, component) {
// 		return {
// 			index: props.index,
// 			slotId: props.slotId
// 		}
// 	}
// }
// const collect = (connect, monitor) => ({
// 	connectDropTarget: connect.dropTarget(),
// 	isOver: monitor.isOver()
// })

const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.dropZones.find(d => d.slotId == ownProps.slotId && d.id == ownProps.id))
}


@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	shouldComponentUpdate(nextProps) {
		var self = this
		// if (!nextProps.enable) { return false }
		console.log('dropzone.shouldComponentUpdate visible:', nextProps.visible, 'instant:', nextProps.instant)


		self.refs.dropZone.style.transition = nextProps.instant ? '' : `height ${TRANSITION_DELAY}ms`

		var height = nextProps.visible ? '50px' : '0px'
		setTimeout(function () {
			self.refs.dropZone.style.height = height
		}, 0)

		return false
	}

	render() {
		// console.log('dropzone.render ', this.props)
		const { connectDropTarget, id, instant, visible } = this.props

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			// background: randomColor,
			background: '#555',
			// height: '0px',
			height: '20px',
			transition: `height ${TRANSITION_DELAY}ms`
		}

		const indexStyle = {
			background: 'black',
			color: 'yellow'
		}

		return (
			<div ref="dropZone" style={style}>
				dropzone index: <span style={indexStyle}>{id}</span>
			</div>
		)
	}
}
export default DropZone

