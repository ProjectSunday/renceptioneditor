import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		transitionOn: state.editor.transitionOn,
		height: state.editor.blockHeight,
		...state.editor.blocks.fbi(ownProps.id)
	}
}

@connect(mapStateToProps)
export default class Block extends React.Component {
	constructor(props) {
		super(props)

		this.onDragStart = this.onDragStart.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

	}

	onDragStart(e) {
		var { id, slotId, index } = this.props

		e.dataTransfer.setData('text', '')  //neded for HTML5 dragging to work, do not remove

		STORE.dispatch({
			type: 'DRAG_START',
			blockId: id,
			slotId,
			index
		})

	}
	onDragEnd(e) {
		var { id, slotId } = this.props

		STORE.dispatch({
			type: 'DRAG_END',
			slotId
		})
	}
	componentDidUpdate() {
		var { beingDrag, height, index, transitionOn } = this.props
		// l('block.componentDidUpdate id:', this.props.id, 'transitionOn:', transitionOn)

		var { block } = this.refs

		block.style.transition = transitionOn ? 'top 100ms' : ''
		block.style.top = (index * height) + 'px'

		setTimeout(() => {
			block.style.display = beingDrag ? 'none' : 'block'
		}, 0)

	}

	render() {
		// trace('block.render1', this.props)
		var { id, height, index, name } = this.props

		var blockAttr = {
			ref: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragEnd: this.onDragEnd,

			style: {
				background: '#aaa',
				height: height + 'px',
				position: 'absolute',
				top: (index * height) + 'px',
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

