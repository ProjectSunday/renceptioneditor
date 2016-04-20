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
	onDragEnd(e) {
		l('block.onDragEnd', e)
		var { id, slotId } = this.props


		STORE.dispatch({
			type: 'DRAG_END',
			// blockId: id,
			slotId
		})


	}
	componentDidUpdate() {
		var { beingDrag, index, transitionOn } = this.props
		// l('block.componentDidUpdate id:', this.props.id, 'transitionOn:', transitionOn)

		var { block } = this.refs

		block.style.transition = transitionOn ? 'top 100ms' : ''
		block.style.top = (index * 50) + 'px'

		setTimeout(() => {
			block.style.display = beingDrag ? 'none' : 'block'
		}, 0)

	}

	render() {
		// trace('block.render1', this.props)
		var { id, index, name } = this.props

		var blockAttr = {
			ref: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragEnd: this.onDragEnd,

			style: {
				background: '#aaa',
				height: '50px',
				position: 'absolute',
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

