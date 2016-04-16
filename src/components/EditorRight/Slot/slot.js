import React from 'react'
import { connect } from 'react-redux'

import Block from './block'

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

		this.render = this.render.bind(this)
	}

	onDrop() {
		// trace('slot.onDragOver', this.props)

		// var { id } = this.props

		// STORE.dispatch({
		// 	type: 'EDITOR.SET_DROP_SLOT',
		// 	id
		// })

	}
	onDragOver(e) {
		e.preventDefault()   //needed for ondrop to work
	}

	render() {
		// trace('slot.render1', this.props.blocks)
		const { id, blocks } = this.props

		let nodes = []

		blocks.forEach((b, i) => {
			nodes.push(<Block key={i} id={b} index={i} slotId={id} />)
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