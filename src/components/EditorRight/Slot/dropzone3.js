import React from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import * as Actions from '../../../Actions/actions'


const TRANSITION_DELAY = 100


const mapStateToProps = (state, ownProps) => {
	// var blah = state.slots[ownProps.slotId].dropZones[ownProps.index]
	// console.log('dropzone mapStateToProps', blah )

	// var slotIndex = state.slots.findIndex(s => s.id === ownProps.slotId)

	let dz = state.slots.find(s => s.id === ownProps.slotId).dropZones[ownProps.index]

	return {
		visible: dz.visible,
		instant: dz.instant
	}
}
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		showDropZone: (index) => { dispatch(Actions.showDropZone(ownProps.slotId, index) )}
// 	}



const dropZoneTarget = {
	// hover (props, monitor, component) {

	// },
	drop(props, monitor, component) {
		return {
			index: props.index
		}
		// console.log('dropzone.drop', props, monitor, component)
		// debugger;
	}
}
const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
})

// @DropTarget('BLOCK', dropZoneTarget, collect)
@connect(mapStateToProps)
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.displayed = props.appearing

		// this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log('componentWillReceiveProps', nextProps)
	// }

	shouldComponentUpdate(nextProps) {
		var self = this
		// console.log('dropzone shouldComponentUpdate', nextProps)

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
			// self.dropTarget.style.height = '20px'
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
		// console.log('dropzone.render ', this.props)
		const { connectDropTarget, index, instant, visible } = this.props

		// let height = dropZone.appearing ? '0px' : '80px'

		// let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			// background: randomColor,
			background: '#555',
			height: '0px',
			// height: '20px',
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

		// return connectDropTarget(
		// 	<div ref={r => this.dropTarget = r} style={style}>ref.droptarget index: <span style={{ color: 'yellow', background: 'black' }}>{index}</span></div>
		// )		

		return (
			<div ref={r => this.dropTarget = r} style={style}>ref.droptarget index: <span style={{ color: 'yellow', background: 'black' }}>{index}</span></div>
		)
	}
}
export default DropZone

