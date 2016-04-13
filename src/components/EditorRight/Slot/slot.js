import React from 'react'
import { connect } from 'react-redux'

import Block from './block'
import DropZone from './dropzone'

const mapStateToProps = (state, ownProps) => {
	// console.log('slot.mapStateToProps')
	var slot = state.slots.find(s => s.id == ownProps.id)
	var ui = state.ui.slots.find(s => s.id == ownProps.id)
	if (!ui) {
		STORE.dispatch({
			type: 'UI_RESET_SLOT',
			slotId: slot.id,
			blocks: slot.blocks
		})
		ui = state.ui.slots.find(s => s.id == ownProps.id)
	}
	return Object.assign({}, ui, slot)
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)

		this.render = this.render.bind(this)
	}
	render() {
		// trace('slot ', this.props)
		const { id, blocks, children, dropZones } = this.props

		let nodes = []

		children.forEach((c, i) => {
			if (i % 2 == 0) {
				nodes.push(<DropZone key={i} id={c} slotId={id} />)
			} else {
				nodes.push(<Block key={i} id={c} slotId={id} />)
			}
		})

	    const style = {
			boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
    		overflow: 'hidden',

	    	minHeight: '50px',
			margin: '30px 0 0 0',
			// border: '1px solid #E6DBDB',
			position: 'relative',
			// box-shadow: inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75),	
			background: '#F8F8F8',
	    }

		return (
			<div style={style}>
				{nodes}
			</div>
		)
	}
}

export default Slot