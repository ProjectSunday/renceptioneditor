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
	}

	shouldComponentUpdate(nextProps) {
		var self = this
		console.log('Block shouldComponentUpdate', nextProps.dropZone)

		const { dropZone } = self.props

		if (nextProps.dropZone.appearing === dropZone.appearing) { return false }




		if (nextProps.dropZone.appearing) {
			self.dropTarget.style.height = '80px'
			// console.log('clearing ', nextProps.dropZone)
			clearTimeout(self.deathTimer)

		} else {
			self.dropTarget.style.height = '0px'
			self.deathTimer = setTimeout(function () {
				// console.log('removeDropZone', self.props.dropZone)
				self.props.removeDropZone(self.props.dropZone)
			}, TRANSITION_DELAY)
		}

		return false
	}

	componentDidMount() {
		var self = this
		// console.log('droptarget2 componentDidMount')

		let height = self.props.dropZone.appearing ? '80px' : '0px'

		setTimeout(function() {
			// self.dropTarget.style.transition = 'height 3s'
			self.dropTarget.style.height = height
		}, 0 )
	}

	render() {
		// console.log('dropzone.render ', this.props.dropZone)
		const { connectDropTarget, dropZone } = this.props

		// let height = dropZone.appearing ? '0px' : '80px'

		let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
		const style = {
			background: randomColor,
			transition: `height ${TRANSITION_DELAY}ms`
		}

		if (dropZone.appearing) {
			style.height = '0px'
		}


		return connectDropTarget(
			<div ref={r => this.dropTarget = r} style={style}>ref.droptarget</div>
		)
	}
}
export default DropZone

