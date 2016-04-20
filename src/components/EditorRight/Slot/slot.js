import React from 'react'
import { connect } from 'react-redux'

import Block from './block'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		...state.editor.slots.fbi(ownProps.id)
	}
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)

		this.onDragOver = this.onDragOver.bind(this)
		this.onDrop = this.onDrop.bind(this)

		this.updateTimeStamp = props.updateTimeStamp

		this.render = this.render.bind(this)
	}

	onDrop() {
		// trace('slot.onDragOver')

		var { id } = this.props

		// STORE.dispatch({
		// 	type: 'EDITOR.SET_DROP_SLOT',
		// 	id
		// })

		// this.currentDropIndex = undefined


	}
	onDragOver(e) {
		e.preventDefault()   //needed for ondrop to work

		// trace('slot.onDragOver')

		var { slot } = this.refs

		var slotRect = slot.getBoundingClientRect()

		var index = Math.floor((e.clientY - slotRect.top) / 50)
		// if (this.currentDropIndex === index) { return }


		var { id } = this.props

		// red('slot index', index, 'id', id)
		STORE.dispatch({
			type: 'DRAG_OVER',
			slotId: id,
			index
		})

		// this.currentDropIndex = index

	}

	shouldComponentUpdate(nextProps) {
		// l('slot.shouldComponentUpdate')
		// l('nextProps', nextProps)

		var { blocks, dropZone, updateTimeStamp } = nextProps

		var { slot } = this.refs

		var slotHeight = blocks.length * 50
		if (dropZone.index !== -1) {
			slotHeight += 50
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
		const { id, blocks, dropZone } = this.props

		let nodes = []

		blocks.forEach((b, i) => {
			nodes.push(<Block key={i} id={b} index={i} slotId={id} />)
		})


		nodes.push(<DropZone key="dz" slotId={id} slotEmpty={blocks.length === 0} />)

		var slotHeight = blocks.length * 50
		if (dropZone.index !== -1) {
			slotHeight += 50
		}

		var slotAttr = {
			ref: 'slot',
			onDragOver: this.onDragOver,
			// onDragEnter: this.onDragEnter,
			onDrop: this.onDrop,
			style: {
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				height: slotHeight + 'px',
	    		overflow: 'hidden',
		    	minHeight: '50px',
				margin: '30px 0 0 0',
				// border: '1px solid #E6DBDB',
				position: 'relative',
				// box-shadow: inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75),	
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