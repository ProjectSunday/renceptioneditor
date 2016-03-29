import React from 'react'
import { DropTarget } from 'react-dnd'

import * as Actions from '../../../actions'


const TRANSITION_DELAY = 200

// class DropZoneTransition extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.render = this.render.bind(this)
// 	}
// 	componentWillEnter(callback) {
// 		// console.log('DropzoneTransition.componentWillEnter')
// 		const { instantaneous } = this.props

// 		const t = this.refs.transition;
// 		t.style.height = '0px'
// 		t.style.transition = instantaneous ? '' : `height ${TRANSITION_DELAY / 1000}s`

// 		setTimeout(callback, 0)
// 	}
// 	componentDidEnter() {
// 		// console.log('DropzoneTransition.componentDidEnter')
// 		const t = this.refs.transition
// 		t.style.height =  '50px'
// 	}
// 	componentWillLeave(callback) {
// 		// console.log('DropzoneTransition.componentWillLeave');
// 		const t = this.refs.transition

// 		t.style.transition = `height ${TRANSITION_DELAY / 1000}s`
// 		t.style.height = '0px'

// 		setTimeout(callback, TRANSITION_DELAY)
// 	}
// 	// componentWillUnmount() {
// 	// 	console.log('DropzoneTransition.componentWillUnmount')
// 	// }
// 	render() {
// 		return (
// 			<div ref="transition">DropZoneTransition</div>
// 		)
// 	}

// }

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
		console.log('props', props)
		this.render = this.render.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		// this.state = {
		// 	dropZoneTransitionNode: undefined
		// }
	}

	shouldComponentUpdate(nextProps) {
		console.log('Block shouldComponentUpdate', nextProps)

		// if (this.isTransitioning) {
		// 	return false
		// } else {
		// 	return true
		// }
		var self = this;

		if (nextProps.expanding) {
			self.dropTarget.style.height = '80px'
		} else {
			self.dropTarget.style.height = '0px'
		}

		return true
	}

	componentDidMount() {
		console.log('droptarget2 componentDidMount')
		var self = this
		// if (this.props.expanding) {
		// 	this.dropTarget.style.transition = 'height 3s'
		// 	// this.dropTarget.style.height = '80px'
		// }
		// setTimeout(function () {
		// 	self.dropTarget.style.height = '80px'
		// })

		let height = self.props.expanding ? '80px' : '0px'

		console.log('height ', height)

		setTimeout(function() {
			self.dropTarget.style.height = height
		}, 0)

		// this.props.dropZoneMounted()
	}

	render() {
		const { connectDropTarget } = this.props

		const style = {
			height: '50px',
			background: 'green',
			transition: 'height 3s'
		}

		console.log('height set to 50')

		return connectDropTarget(
			<div ref={r => this.dropTarget = r} style={style}>ref.droptarget</div>
		)
	}
}
export default DropZone

