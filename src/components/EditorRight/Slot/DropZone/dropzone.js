import React from 'react'
import { DropTarget } from 'react-dnd'
import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../../Actions/actions'

const TRANSITION_DELAY = 200

class DropZoneTransition extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	componentWillEnter(callback) {
		// console.log('DropzoneTransition.componentWillEnter')
		const t = this.refs.transition;
		t.style.height = '0px'
		t.style.transition = `height ${TRANSITION_DELAY / 1000}s`

		setTimeout(callback, 0)
	}
	componentDidEnter() {
		// console.log('DropzoneTransition.componentDidEnter')
		const t = this.refs.transition
		t.style.height =  '50px'
	}
	componentWillLeave(callback) {
		// console.log('DropzoneTransition.componentWillLeave');
		const t = this.refs.transition
		t.style.height = '0px'

		setTimeout(callback, TRANSITION_DELAY)
	}
	// componentWillUnmount() {
	// 	console.log('DropzoneTransition.componentWillUnmount')
	// }
	render() {
		return (
			<div ref="transition">DropZoneTransition</div>
		)
	}

}

const dropZoneTarget = {
	hover (props, monitor, component) {
	}
}
@DropTarget('BLOCK', dropZoneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))
class DropZone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.state = {
			dropZoneTransitionNode: undefined
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log('DropZone.componentWillReceiveProps', nextProps.key, nextProps.visible)
		this.setState({
			dropZoneTransitionNode: nextProps.visible ? (<DropZoneTransition />) : undefined
		})
	}
	render() {
		const { connectDropTarget, visible } = this.props
		return connectDropTarget(
			<div>
				<ReactTransitionGroup component="div">
					{this.state.dropZoneTransitionNode}
				</ReactTransitionGroup>
			</div>
		)
	}
}
export default DropZone

