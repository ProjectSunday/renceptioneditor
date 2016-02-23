import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'

const TRANSITION_DELAY = 100

const dropTarget = {
	hover (props, monitor, component) {
		// console.log('dropzone hover')
	}
}

@DropTarget('BLOCK', dropTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))
export default class Dropzone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)

		// if (props.instantaneous) {
		// 	console.groupCollapsed('instantaneous!!!!!!!!!!!!!!')
		// 	console.log('instantaneous ', props.instantaneous)
		// 	console.log('this ', this)
		// 	console.groupEnd()
		// }

		// this.instantaneous = props.instantaneous

		// this.state = {
		// 	instantaneous: props.instantaneous
		// }
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
		// this.instantaneous = false
	}
	render() {
		// const { instantaneous } = this.state

		const { connectDropTarget } = this.props

		// const { blockId, instantaneous, positionAbove } = this.props.dropzone
		// console.log('dropzone render()', blockId, instantaneous, positionAbove )

		var style = {
			background: 'green'
			// opacity: 0
		}

		return connectDropTarget(
			<div ref={d => this.dropzone = d} style={style}>
				DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
			</div>
		)
	}

}

