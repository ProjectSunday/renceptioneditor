import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../../Actions/actions'

const TRANSITION_DELAY = 500

const dropzoneTarget = {
	hover (props, monitor, component) {
		// console.log('dropzone hover')
	}
}

const dropzoneSource = {
	beginDrag(props) {
		return {
			id: 'blah'
		}
	}
}

class DropzoneTransition extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	componentWillEnter(callback) {
		const { instantaneous, expanding } = this.props;
		console.log('DropzoneTransition.componentWillEnter')

		const d = this.refs.dropzone;

		d.style.height = '0px'
		// d.style.transition = instantaneous ? '' : `height ${TRANSITION_DELAY / 1000}s`
		d.style.transition = `height ${TRANSITION_DELAY / 1000}s`

		setTimeout(callback, 0)
	}
	componentDidEnter() {
		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('componentDidEnter', blockId, instantaneous, positionAbove )
		console.log('DropzoneTransition.componentDidEnter')
		const d = this.refs.dropzone

		// d.style.transition = `height ${TRANSITION_DELAY / 1000}s`
		d.style.height =  '50px'
	}
	componentWillLeave(callback) {
		console.log('DropzoneTransition.componentWillLeave');
		const d = this.refs.dropzone

		d.style.transition = `height ${TRANSITION_DELAY / 1000}s`
		d.style.height = '0px'

		setTimeout(callback, TRANSITION_DELAY)
	}
	componentDidLeave() {


		console.log('DropzoneTransition.componentDidLeave')

		dispatch(Actions.dropzoneTransitionDone())




		// this.instantaneous = false

		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('componentDidLeave', blockId, instantaneous, positionAbove )
		
	}

	componentWillUnmount() {
		console.log('DropzoneTransition.componentWillUnmount')
	}

	render() {
		return (
			<div ref="dropzone">INNER DROPZONE INNER DROPZ</div>
		)
	}

}

@DropTarget('BLOCK', dropzoneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))
class Dropzone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		// 	console.log('this ', this)
		// 	console.groupEnd()
		// }

		// this.instantaneous = props.instantaneous

		// this.state = {
		// 	instantaneous: props.instantaneous
		// }

		this.state = {
			i: 0,
			children: []
		}
	}
	// componentWillEnter(callback) {
	// 	const { blockId, instantaneous, positionAbove } = this.props.dropzone
	// 	console.log('componentWillEnter', blockId, instantaneous, positionAbove )


	// 	this.dropzone.style.height = '0px'
	// 	this.dropzone.style.transition = this.props.instantaneous ? '' : `height ${TRANSITION_DELAY / 1000}s`

	// 	setTimeout(callback, 0)
	// }
	// componentDidEnter() {
	// 	// const { blockId, instantaneous, positionAbove } = this.props.dropzone
	// 	// console.log('componentDidEnter', blockId, instantaneous, positionAbove )
		
	// 	// this.refs.dropzone.style.transition = `height ${TRANSITION_DELAY / 1000}s`
	// 	this.dropzone.style.height =  '50px'
	// }

	componentDidMount() {
		// console.log('yoooooooooooo')
		// this.instantaneous = false

		var blah = this.state.children;

		blah.push(<DropzoneImpl key={'blah'} />);

		this.setState({
			children: blah
		})
	}

	componentWillUnmount() {
		console.log('Dropzone.componentWillUnmount')
	}
	render() {
		// const { instantaneous } = this.state

		const { connectDropTarget, connectDragSource } = this.props

		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('dropzone render()', blockId, instantaneous, positionAbove )

		// var style = {
		// 	background: 'green'
		// 	// opacity: 0
		// }


		return connectDropTarget(
			<div>
				<ReactTransitionGroup component="div">
					{this.state.children}
				</ReactTransitionGroup>
			</div>
		)
	}

}

export default Dropzone

