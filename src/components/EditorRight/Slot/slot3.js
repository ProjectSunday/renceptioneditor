import React from 'react'
import { connect } from 'react-redux'

import Block from './block3'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	// red('slot.mapStateToProps', state.editor.slots[0])
	var slot = state.editor.slots.fbi(ownProps.id)
	// var ui = state.ui.slots.find(s => s.id == ownProps.id)
	// if (!ui) {
	// 	STORE.dispatch({
	// 		type: 'UI_RESET_SLOT',
	// 		slotId: slot.id,
	// 		blocks: slot.blocks
	// 	})
	// 	ui = state.ui.slots.find(s => s.id == ownProps.id)
	// }

	// red(ownProps.blocks === slot.blocks)

	// var blah = { ...slot afgadfg}

	// red(ownProps === blah )

	// var blah = state.editor.sasdfadsflots.fbi(ownProps.id).blocks

	// red('blah ', blah === ownProps.blocks)

	return { 
		...slot
	}
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)

		this.onDragOver = this.onDragOver.bind(this)
		this.onDrop = this.onDrop.bind(this)

		this.render = this.render.bind(this)
	}

	onDrop() {
		trace('slot.onDragOver', this.props)

		var { id } = this.props

		STORE.dispatch({
			type: 'EDITOR.SET_DROP_SLOT',
			id
		})

	}
	onDragOver(e) {
		e.preventDefault()   //needed for ondrop to work
	}

	// shouldComponentUpdate(nextProps) {
	// 	trace('slot.componentShouldUpdate update: ', nextProps)

	// 	return true

	// 	// var { dragSource, update } = nextProps

	// 	// if (!update) { return false }

	// 	// }

	// 	// var { slot } = this.refs

	// 	// if (!!update) {

	// 	// }

	// 	// var height = slot.getBoundingClientRect().height + ( dragSource.isMasterBlock ? 50 : 0 )

	// 	// red('yoooo', height)
	// 	// slot.style.height = height + 'px'

	// 	// return true
	// }
	// componentDidUpdate() {

	// 	STORE.dispatch({
	// 		type: 'SLOTS.UPDATE_SLOT_SUCCESS',
	// 		id: this.props.id
	// 	})


	// 	// trace('slot.componentDidUpdate', this.props)
	// 	// var { heightFlexible } = this.props
	// 	// var { slot } = this.refs

	// 	// if (heightFlexible) {
	// 	// 	var height = 'auto'
	// 	// } else {
	// 	// 	var height = slot.getBoundingClientRect().height + 'px'
	// 	// }

	// 	// slot.style.height = height
	// }
	// componentDidMount() {
	// 	trace('slot.componentDidMount', this.props)
	// 	var { heightFlexible } = this.props
	// 	var { slot } = this.refs
	// 	if (heightFlexible) {
	// 		var height = 'auto'
	// 	} else {
	// 		var height = slot.getBoundingClientRect().height + 'px'
	// 	}

	// 	slot.style.height = height
	// }

	render() {
		trace('slot.render1', this.props.blocks)
		const { id, blocks } = this.props

		let nodes = []

		blocks.forEach((b, i) => {
			nodes.push(<Block key={i} id={b} index={i} slotId={id} blah={blocks[i]} />)
		})

		var slotAttr = {
			ref: 'slot',
			onDragOver: this.onDragOver,
			// onDragEnter: this.onDragEnter,
			onDrop: this.onDrop,
			style: {
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
				height: `${blocks.length * 50}px`,
	    		overflow: 'hidden',
		    	minHeight: '50px',
				margin: '30px 0 0 0',
				// border: '1px solid #E6DBDB',
				position: 'relative',
				// box-shadow: inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75),	
				background: '#F8F8F8'
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