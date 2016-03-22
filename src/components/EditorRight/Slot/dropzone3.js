import React from 'react'
import { DropTarget } from 'react-dnd'

import * as Actions from '../../../Actions/actions'

const TRANSITION_DELAY = 200

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
	}

	shouldComponentUpdate(nextProps) {
		console.log('Block shouldComponentUpdate', nextProps)

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

		let height = self.props.expanding ? '80px' : '0px'

		setTimeout(function() {
			self.dropTarget.style.height = height
		}, 0)
	}

	render() {
		const { connectDropTarget } = this.props

		const style = {
			height: '50px',
			background: 'green',
			transition: 'height 3s'
		}


		return connectDropTarget(
			<div ref={r => this.dropTarget = r} style={style}>ref.droptarget</div>
		)
	}
}
export default DropZone

