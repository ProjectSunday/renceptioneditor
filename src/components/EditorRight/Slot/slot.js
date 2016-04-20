import React from 'react'
import { connect } from 'react-redux'

import Block from './block'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		blockHeight: state.editor.blockHeight,
		...state.editor.slots.fbi(ownProps.id)
	}
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)

		this.onDragOver = this.onDragOver.bind(this)

		this.updateTimeStamp = props.updateTimeStamp

		this.render = this.render.bind(this)
	}

	onDragOver(e) {
		e.preventDefault()   //needed for ondrop to work

		var { id, blockHeight } = this.props
		var { slot } 		= this.refs

		var slotRect = slot.getBoundingClientRect()
		var index = Math.floor((e.clientY - slotRect.top) / blockHeight)

		STORE.dispatch({
			type: 'DRAG_OVER',
			slotId: id,
			index
		})
	}

	shouldComponentUpdate(nextProps) {
		// l('slot.shouldComponentUpdate')
		// l('nextProps', nextProps)

		var { blocks, blockHeight, dropZone, updateTimeStamp } = nextProps

		var { slot } = this.refs

		var slotHeight = blocks.length * blockHeight
		if (dropZone.index !== -1) {
			slotHeight += blockHeight
		}

		slot.style.height = slotHeight + 'px'


		if (this.updateTimeStamp !== updateTimeStamp) {
			this.updateTimeStamp = updateTimeStamp
			return true
		}
		return false

	}

	render() {
		// l('slot.render', this.props)
		const { id, blocks, blockHeight, dropZone } = this.props

		let nodes = []

		blocks.forEach((b, i) => {
			nodes.push(<Block key={i} id={b} index={i} slotId={id} updateTimeStamp={this.updateTimeStamp} />)
		})

		nodes.push(<DropZone key="dz" slotId={id} slotEmpty={blocks.length === 0} />)

		var slotHeight = blocks.length * blockHeight
		if (dropZone.index !== -1) {
			slotHeight += blockHeight
		}

		var slotAttr = {
			ref: 'slot',
			onDragOver: this.onDragOver,
			style: {
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				height: slotHeight + 'px',
	    		overflow: 'hidden',
		    	minHeight: blockHeight + 'px',
				margin: '30px 0 0 0',
				// border: '1px solid #E6DBDB',
				position: 'relative',
				background: '#F8F8F8',
				transition: 'height 100ms'
			}
		}

		return (
			<div {...slotAttr}>
				{nodes}
			</div>
		)
	}
}

export default Slot