import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as Actions from '../../../actions'

import './block.less'

const mapStateToProps = (state, ownProps) => {
	return Object.assign({}, state.blocks.find(b => b.id === ownProps.id))
}

@connect(mapStateToProps)
export default class Block extends Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.onDragStart = this.onDragStart.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

		// this.componentDidMount = this.componentDidMount.bind(this)
		// this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	// componentDidMount() {
	// 	console.log('componentDidMount', this.props.index)
	// 	if (this.props.isDragging) {
	// 		this.props.dragBlock(this.props.index)
	// 	}
	// }

	onDragStart(e) {
		// console.log('block.onDragStart')
		const { id, onDragStart } = this.props
		e.dataTransfer.setData('text', '');
	   	onDragStart(id)
	}
	onDragOver(e) {
		// console.log('onDragOver')
		const { id, onDragOver } = this.props


	    const hoverBoundingRect = e.target.getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    const hoverClientY = e.clientY - hoverBoundingRect.top

	    onDragOver(id, hoverMiddleY < hoverClientY)


	}
	onDragEnd(e) {
		// console.log('block.onDragEnd')
		// console.log(e)

		const { id, onDragEnd } = this.props

		onDragEnd(id)

	}
	shouldComponentUpdate(nextProps) {
		// console.log('block.shouldComponentUpdate', nextProps.index)
		var self = this

		if (nextProps.visible === false) {
			setTimeout(function () {
				self.refs.block.style.display = 'none'
			}, 0)
		}

		return false
	}


	render() {
		// console.log('block.render', this.props)
		const { id, name } = this.props

		let styles = {
			display: 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)'
		}

		const idStyles = {
			background: 'black',
			color: 'yellow'
		}

		return (
			<div ref="block" className="block" style={styles} draggable="true"
				onDragStart={this.onDragStart}
				onDragOver={this.onDragOver}
				onDragEnd={this.onDragEnd}>
				<span className="name">{name}<span style={idStyles}>{id}</span></span>
			</div>
		)
	}

}

