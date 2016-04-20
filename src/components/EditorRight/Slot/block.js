import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	// console.log('block.mapStateToProps', ownProps, state.ui.srcBlock.blockId)
	var block = state.editor.blocks.fbi(ownProps.id)
	return {
		transitionOn: state.editor.transitionOn,
		...block
	}
}

@connect(mapStateToProps)
export default class Block extends React.Component {
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
			type: 'DRAG_START',
			blockId: id,
			slotId,
			index
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
		l('block.onDragEnd', e)
		var { id, slotId } = this.props


		STORE.dispatch({
			type: 'DRAG_END',
			// blockId: id,
			slotId
		})


	}
	shouldComponentUpdate(nextProps) {
		// trace('block.shouldComponentUpdate', nextProps)



		return true
	}

	componentDidUpdate() {


		var { beingDrag, index, transitionOn } = this.props
		l('block.componentDidUpdate id:', this.props.id, 'transitionOn:', transitionOn)

		var { block } = this.refs

		if (transitionOn) {
				block.style.transition = 'top 100ms'
		} else {
				block.style.transition = 'top 0ms'

		}

		// block.style.transition = 'top 2000ms'

		// window.getComputedStyle(block)

		block.style.top = (index * 50) + 'px'


		


		setTimeout(function () {
			block.style.display = beingDrag ? 'none' : 'block'
		// 	// block.style['z-index'] = beingDrag ? -9999 : 0
		// 	// block.style.top = (index * 50) + 'px'
		}, 0)


	}

	// componentDidMount() {
	// 	l('block.componentDidMount id:', this.props.id)
	// 	setTimeout(() => {
	// 		// this.refs.block.style.transition = 'top 100ms'
	// 	}, 0)
	// }

	render() {
		trace('block.render1', this.props)
		var { id, index, name } = this.props

		var blockAttr = {
			ref: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragOver: this.onDragOver,
			onDragEnd: this.onDragEnd,

			style: {
				background: '#aaa',
				height: '50px',
				position: 'absolute',
				// transition: '',
				top: (index * 50) + 'px',
				width: '100%',
				zIndex: 2
			}
		}


		const idStyles = {
			background: 'black',
			color: 'yellow'
		}
				

		return (
			<div {...blockAttr}>
				<span className="name">{name}<span style={idStyles}>{id}</span></span>
			</div>
		)
	}

}

