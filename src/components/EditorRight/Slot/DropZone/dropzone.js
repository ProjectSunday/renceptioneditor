import React from 'react'

const TRANSITION_DELAY = 100

export default class Dropzone extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
	}
	componentWillEnter(callback) {
		this.refs.dropzone.style.height = '0px'
		setTimeout(callback, 0)
	}
	componentDidEnter() {
		// console.log('componentDidEnter')
		this.refs.dropzone.style.height =  '50px'
	}
	componentWillLeave(callback) {
		// console.log('componentWillLeave')
		this.refs.dropzone.style.height = '0px'
		setTimeout(callback, TRANSITION_DELAY)
	}
	render() {
		var style = {
			background: 'green',
			transitionProperty: 'height',
			transitionDuration: TRANSITION_DELAY / 1000 + 's'
		}
		return (
			<div ref="dropzone" style={style}>
				DROPZONEDROPZONEDROPZONEDROPZONEDROPZONPZONE
			</div>
		)
	}

}

