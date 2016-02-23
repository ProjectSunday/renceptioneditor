import React from 'react'

const TRANSITION_DELAY = 5000

export default class Dropzone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)

		if (props.instantaneous) {
			console.groupCollapsed('instantaneous!!!!!!!!!!!!!!')
			console.log('instantaneous ', props.instantaneous)
			console.log('this ', this)
			console.groupEnd()
		}

		this.instantaneous = props.instantaneous

		// this.state = {
		// 	instantaneous: props.instantaneous
		// }
	}
	componentWillEnter(callback) {
		this.refs.dropzone.style.height = '0px'
		setTimeout(callback, 0)
	}
	componentDidEnter() {
		console.log('componentDidEnter')
		this.refs.dropzone.style.height =  '50px'
	}
	componentWillLeave(callback) {
		const dropzone = this.refs.dropzone

		dropzone.style.transition = `height ${TRANSITION_DELAY / 1000}s`
		dropzone.style.height = '0px'
		setTimeout(callback, TRANSITION_DELAY)
	}
	componentDidLeave() {
		// this.instantaneous = false
	}
	componentDidMount() {
		this.instantaneous = false
	}
	render() {
		// const { instantaneous } = this.state




		var style = {
			background: 'green',
			opacity: 0,
			transition: this.instantaneous ? '' : `height ${TRANSITION_DELAY / 1000}s`
		}

		return (
			<div ref="dropzone" style={style}>
				DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
			</div>
		)
	}

}

