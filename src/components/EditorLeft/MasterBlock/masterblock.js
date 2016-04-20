import React from 'react'
import { connect } from 'react-redux'

import './imageblock.png'
import './textblock.png'
import './textplusimageblock.png'

import './imageblock-drag.png'
import './textblock-drag.png'
import './textplusimageblock-drag.png'

const mapStateToProps = (state, ownProps) => {
	return state.editor.masterBlocks.fbi(ownProps.id)
}

@connect(mapStateToProps)
class MasterBlock extends React.Component {
	constructor(props) {
		super(props)

		this.onDragStart = this.onDragStart.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

		this.render = this.render.bind(this)
	}
	onDragStart(e) {
		var dragImage = this.refs.dragImage

		e.dataTransfer.setData("text/plain", "<strong>Body</strong>");
		e.dataTransfer.setDragImage(dragImage, 58, 29);

		STORE.dispatch({
			type: 'MASTERBLOCK_DRAG_START'
		})


	}
	onDragEnd(e) {
		var { type } = this.props

		STORE.dispatch({
			type: 'MASTERBLOCK_DRAG_END',
			masterBlock: { type: type }
		})
	}
	render() {
		// red('masterBlock.render1', this.props)
		const { dragImage, src, type } = this.props

		var masterBlockAttr = {
			draggable: true,
			onDragStart: this.onDragStart,
			onDragEnd: this.onDragEnd,
			style: {
				display: 'inline-block',
				margin: '10px'
			}
		}

		var dragImageAttr = {
			ref: 'dragImage',
			style: {
				backgroundImage: `url(${dragImage})`,
				backgroundSize: '116px 58px',
				width: '116px',
				height: '58px',
				position: 'absolute',
				top: '50%',
				left: '50%',
				zIndex: '-1'
			}
		}

		return (
			<div {...masterBlockAttr}>
				<img src={src} />
				<div {...dragImageAttr} />
			</div>
		)
	}
}

export default MasterBlock
