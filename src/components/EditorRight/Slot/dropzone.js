import React from 'react'
// import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import * as Actions from '../../../actions'

const TRANSITION_DELAY = 100

const dropZoneTarget = {
	// hover (props, monitor, component) {

	// },
	drop(props, monitor, component) {
		return {
			index: props.index,
			slotId: props.slotId
		}
	}
}
const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
})

@DropTarget('BLOCK', dropZoneTarget, collect)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	shouldComponentUpdate(nextProps) {
		if (!nextProps.enable) { return false }
		// console.log('dropzone shouldComponentUpdate', nextProps.index)

		if (nextProps.instant) {
			this.dropTarget.style.transition = ''
		} else {
			this.dropTarget.style.transition = `height ${TRANSITION_DELAY}ms`
		}

		if (nextProps.visible) {
			this.dropTarget.style.height = '50px'
		} else {
			this.dropTarget.style.height = '0px'
			// this.dropTarget.style.height = '20px'
		}
		return false
	}

	render() {
		// console.log('dropzone.render ', this.props)
		const { connectDropTarget, index, instant, visible } = this.props

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			// background: randomColor,
			background: '#555',
			height: '0px',
			// height: '20px',
			transition: `height ${TRANSITION_DELAY}ms`
		}

		return connectDropTarget(
			<div ref={r => this.dropTarget = r} style={style}>ref.droptarget index: <span style={{ color: 'yellow', background: 'black' }}>{index}</span></div>
		)
	}
}
export default DropZone

