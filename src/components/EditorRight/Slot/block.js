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
		var { id, height, imageSrc, index, name, text, type } = this.props

		var blockAttr = {
			ref: 'block',
			draggable: true,
			onDragStart: this.onDragStart,
			onDragEnd: this.onDragEnd,

			style: {
				background: '#aaa',
				height: height + 'px',
				overflow: 'hidden',
				position: 'absolute',
				top: (index * height) + 'px',
				width: '100%',
				zIndex: 2
			}
		}

		const nameStyle = {
			display: 'block',
			position: 'absolute',
			top: 0,
			left: 0,
			background: 'black',
			color: 'yellow'
		}

		var content
		if (type === 'image') {
			var s = { 
				backgroundImage: `url(${imageSrc})`,
				width: '100%',
				height: '100%',
				backgroundSize: 'auto 100%'
			}
			content = (<div style={s}></div>)
		} else if (type === 'text') {
			content = (<p>{text}</p>)
		} else if (type === 'textplusimage') {
			var leftImage = {
				float: 'left',
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: 'auto 100%',
			    width: '50%',
			    height: '80px',
			    // background: 'blue',
			    overflow: 'hidden'
			}

			var rightText = {
				float: 'left',
				height: '80px',
				margin: '0',
				width: '50%'
			}

			content = (
				<div>
					<div style={leftImage}></div>
					<div style={rightText}>{text}</div>
				</div>
			)
		}

		


		// const idStyles = {
		// 	background: 'black',
		// 	color: 'yellow'
		// }
				
		return (
			<div {...blockAttr}>
				{content}
				<span style={nameStyle}>{name}{id}</span>
			</div>
		)
	}

}

