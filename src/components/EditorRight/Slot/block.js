import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	var block = state.editor.blocks.fbi(ownProps.id)
	return {
		...block
	}
}

@connect(mapStateToProps)
export default class Block extends Component {
	constructor(props) {
		super(props)

		this.onDragStart = this.onDragStart.bind(this)
		this.onDragOver = this.onDragOver.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

		// this.render = this.render.bind(this)
	}

	onDragStart(e) {
		// red('block.onDragStart', this.props)
		var { id, slotId, index } = this.props
		// var { blockContainer } = this.refs

		e.dataTransfer.setData('text', '')  //neded for HTML5 dragging to work, do not remove

		// this.dragIndex = index

		STORE.dispatch({
			type: 'EDITOR.DRAG_START',
			blockId: id,
			slotId
		})

	}
	onDragOver(e) {
		// console.log('onDragOver', this.props.index)

		// if (!this.prevMouseY) {
		// 	this.prevMouseY = e.clientY
		// 	return
		// }

	 // 	if (e.clientY > this.prevMouseY) {
	 // 		var below = true
	 // 	} else if (e.clientY < this.prevMouseY) {
	 // 		var below = false
	 // 	} else {
	 // 		var below = undefined
	 // 	}

	 // 	if (below === undefined) {
	 // 		return
	 // 	}

	 // 	var { id: blockId, slotId } = this.props

		// STORE.dispatch({
		// 	type: 'EDITOR.MOUSE_OVER_BLOCK',
		// 	blockId,
		// 	slotId,
		// 	below: below
		// })

		// this.prevMouseY = e.clientY


	}
	onDragEnd(e) {
		// trace('block.onDragEnd')
		var { id, slotId } = this.props

		STORE.dispatch({
			type: 'EDITOR.DRAG_END',
			blockId: id,
			slotId
		})


	}
	shouldComponentUpdate(nextProps) {
		// trace('block.shouldComponentUpdate', nextProps)
		var { beingDrag } = nextProps

		var { block } = this.refs

		setTimeout(function () {
			block.style.display = beingDrag ? 'none' : 'block'
			// block.style['z-index'] = beingDrag ? -9999 : 0
		}, 0)

		return true
	}

	componentDidMount() {
		this.refs.blockContainer.style.transition = 'top 100ms'
	}

	render() {
		// trace('block.render', this.props)
		var { id, index, name, top } = this.props

		var t = (top === undefined) ? index * 50 : top

		var blockContainerAttr = {
			ref: 'blockContainer',
			// background: 'blue',

			// className: 'block',

			style: {
				display: 'block',
			// 	background: '#aaa',
				// background: 'blue',
				height: '50px',
				width: '100%',
			// 	boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)',
				position: 'absolute',
				top: t + 'px',
				transition: '',
				// top: top + 'px'
			}

		}


		var dropZoneAttr = {
			ref: 'dropZone',
			style: {
				height: '100%',
				width: '100%',
				background: '#F8F8F8',
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				position: 'absolute'
			}
		}

		var blockAttr = {
			ref: 'block',
			// className: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragOver: this.onDragOver,
			onDragEnd: this.onDragEnd,

			style: {
			// 	display: 'block',
				background: '#aaa',
				height: '100%',
				width: '100%',
				// background: 'blue',

			// // 	boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)',
				position: 'absolute'
			// 	top: t + 'px',
			// 	transition: '',
			// 	zIndex: 0
			// 	// top: top + 'px'
			}
		}


		const idStyles = {
			background: 'black',
			color: 'yellow'
		}
				

		return (
			<div {...blockContainerAttr}>
				<div {...dropZoneAttr}>drop stuff here</div>
				<div {...blockAttr}>
					<span className="name">{name}<span style={idStyles}>{id}</span></span>
				</div>
			</div>
		)
	}

}

