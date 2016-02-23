import React from 'react'

const TRANSITION_DELAY = 2000

export default class Dropzone extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.state = {
			instantaneous: props.instantaneous
		}
	}
	componentWillEnter(callback) {
		this.refs.dropzone.style.height = '0px'
		setTimeout(callback, 0)
	}
	componentDidEnter() {
		this.refs.dropzone.style.height =  '50px'
	}
	componentWillLeave(callback) {
		const dropzone = this.refs.dropzone

		dropzone.style.transition = `height ${TRANSITION_DELAY / 1000}s`
		dropzone.style.height = '0px'
		setTimeout(callback, TRANSITION_DELAY)
	}
	componentDidLeave() {
		this.setState({
			instantaneous: false
		})
	}
	render() {
		const { instantaneous } = this.state

		var style = {
			background: 'green',
			opacity: 0,
			transition: instantaneous ? '' : `height ${TRANSITION_DELAY / 1000}s`
		}

		return (
			<div ref="dropzone" style={style}>
				DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
			</div>
		)
	}

}

