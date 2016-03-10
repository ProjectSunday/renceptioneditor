import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import ReactTransitionGroup from 'react-addons-transition-group'


const TRANSITION_DELAY = 100

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

class InnerDropzone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	componentWillEnter(callback) {
		console.log('innerdropzone.componentWillEnter')
		setTimeout(callback, 0)
	}
	componentDidEnter() {
	}
	componentWillLeave(callback) {
		setTimeout(callback, 0)
	}
	componentDidLeave() {
	}
	componentDidMount() {
	}
	render() {
		return (
			<div>INNER DROPZONE INNER DROPZONE INNER DROPZONE INNER DROPZONE INNER DROPZONE </div>
		)
	}

}

// @DragSource('BLOCK', dropzoneSource, (connect, monitor) => ({
// 	connectDragSource: connect.dragSource(),
//   	isDragging: monitor.isDragging()
// }))
@DropTarget('BLOCK', dropzoneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))
class Dropzone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
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
	componentWillEnter(callback) {
		const { blockId, instantaneous, positionAbove } = this.props.dropzone
		console.log('componentWillEnter', blockId, instantaneous, positionAbove )


		this.dropzone.style.height = '0px'
		this.dropzone.style.transition = this.props.instantaneous ? '' : `height ${TRANSITION_DELAY / 1000}s`

		setTimeout(callback, 0)
	}
	componentDidEnter() {
		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('componentDidEnter', blockId, instantaneous, positionAbove )
		
		// this.refs.dropzone.style.transition = `height ${TRANSITION_DELAY / 1000}s`
		this.dropzone.style.height =  '50px'
	}
	componentWillLeave(callback) {

		this.dropzone.style.transition = `height ${TRANSITION_DELAY / 1000}s`
		this.dropzone.style.height = '0px'
		setTimeout(callback, TRANSITION_DELAY)
	}
	componentDidLeave() {
		// this.instantaneous = false

		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('componentDidLeave', blockId, instantaneous, positionAbove )
		
	}
	componentDidMount() {
		// console.log('yoooooooooooo')
		// this.instantaneous = false
	}
	render() {
		// const { instantaneous } = this.state

		const { connectDropTarget, connectDragSource } = this.props

		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('dropzone render()', blockId, instantaneous, positionAbove )

		var style = {
			background: 'green'
			// opacity: 0
		}


		this.state.children.push(<InnerDropzone key={'blah' + this.state.i} />);
		this.state.i++;


		return connectDropTarget(
			<div ref={d => this.dropzone = d} style={style}>
				<ReactTransitionGroup component="div">
					{this.state.children}
				</ReactTransitionGroup>
				<div>OOOOOOOOOOOOOOOOOOOOOOOOO</div>
			</div>
		)
		// return (
		// 	<div ref={d => this.dropzone = d} style={style}>
		// 		DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
		// 	</div>
		// )
	}

}

console.log('dropzone', Dropzone)

export default Dropzone

