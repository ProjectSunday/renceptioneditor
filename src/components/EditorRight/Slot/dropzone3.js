import React from 'react'
import { DropTarget } from 'react-dnd'

import * as Actions from '../../../Actions/actions'

const TRANSITION_DELAY = 3000

const dropZoneTarget = {
	hover (props, monitor, component) {

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
		this.componentDidMount = this.componentDidMount.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.displayed = props.appearing
	}

	shouldComponentUpdate(nextProps) {
		var self = this
		// console.log('Block shouldComponentUpdate', nextProps)

		// const { dropZone } = self.props

		if (nextProps.instant) {
			self.dropTarget.style.transition = ''
		} else {
			self.dropTarget.style.transition = `height ${TRANSITION_DELAY}ms`
		}

		if (nextProps.visible) {
			self.dropTarget.style.height = '50px'
		} else {
			self.dropTarget.style.height = '0px'
		}
		// //if set to appear
		// 	// if displayed, return false
		// 	// else start appearing

		// //else
		//  	// if displayed, start disappearing
		//  	// else return false 

		// const startAppearing = () => {
		// 	self.dropTarget.style.height = '80px'
		// 	self.displayed = true
		// 	clearTimeout(self.deathTimer)
		// }

		// const startDisappearing = () => {
		// 	self.dropTarget.style.height = '0px'
		// 	self.displayed = false
		// 	self.deathTimer = setTimeout(function () {
		// 		console.log('removeDropZone', self.props.dropZone)
		// 		self.props.removeDropZone(self.props.dropZone)
		// 	}, TRANSITION_DELAY)
		// }

		// if (nextProps.dropZone.appearing) {
		// 	if (self.displayed) { return false }
		// 	else { startAppearing() }
		// } else {
		// 	if (self.displayed) { startDisappearing() }
		// 	else { return false }
		// }

		return false
	}

	componentDidMount() {
		// var self = this
		// // console.log('droptarget2 componentDidMount')

		// // let height = self.props.appearing ? '80px' : '0px'

		// setTimeout(function() {
		// 	// self.dropTarget.style.transition = 'height 3s'
		// 	self.dropTarget.style.height = height
		// }, 0 )
	}

	render() {
		// console.log('dropzone.render ', this.props, this.state, this.props.dropZone)
		const { connectDropTarget, index, instant, visible} = this.props

		// let height = dropZone.appearing ? '0px' : '80px'

		let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			background: randomColor,
			height: '0px',
			transition: `height ${TRANSITION_DELAY}ms`
		}

		// debugger;
		// if (instant) {
		// 	style.height = '80px'
		// } else {
		// 	style.height = '0px'
		// }

		// if (visible) {
		// 	style.height = '80px'
		// } else {
		// 	style.height = '0px'
		// }

		return connectDropTarget(
			<div ref={r => this.dropTarget = r} style={style}>ref.droptarget index: {index}</div>
		)
	}
}
export default DropZone

