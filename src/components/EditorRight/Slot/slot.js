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
	return Object.assign({
		dragSource: state.editor.dragSource
	}, ui, slot)
}

@connect(mapStateToProps)
class Slot extends React.Component {
	constructor(props) {
		super(props)
	}
	onDragEnter() {
		red('yoooo onDragOver')

	    STORE.dispatch({
	    	type: 'SLOTS.SET_HEIGHT_FLEXIBLE',
	    	heightFlexible: false
	    })






	}

	shouldComponentUpdate(nextProps) {
		trace('slot.componentShouldUpdate update: ', !!nextProps.update)

		var { dragSource, update } = nextProps
		var { slot } = this.refs


		if (dragSource.isMasterBlock) {
			var height = 'auto'
		} else {
			var height = slot.getBoundingClientRect().height + 'px'
		}

		red('yoooo', height)
		slot.style.height = height

		return !!update
	}
	componentDidUpdate() {

		STORE.dispatch({
			type: 'SLOTS.UPDATE_SLOT_SUCCESS',
			id: this.props.id
		})


		// trace('slot.componentDidUpdate', this.props)
		// var { heightFlexible } = this.props
		// var { slot } = this.refs

		// if (heightFlexible) {
		// 	var height = 'auto'
		// } else {
		// 	var height = slot.getBoundingClientRect().height + 'px'
		// }

		// slot.style.height = height
	}
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
		trace('slot.render', this.props.id)
		const { id, blocks, children, dropZones } = this.props

		let nodes = []

		children.forEach((c, i) => {
			if (i % 2 == 0) {
				nodes.push(<DropZone key={i} id={c} slotId={id} />)
			} else {
				nodes.push(<Block key={i} id={c} slotId={id} />)
			}
		})

		var slotAttr = {
			ref: 'slot',
			// onDragOver: this.onDragOver,
			onDragEnter: this.onDragEnter,
			style: {
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
	    		overflow: 'hidden',

		    	minHeight: '50px',
				margin: '30px 0 0 0',
				// border: '1px solid #E6DBDB',
				position: 'relative',
				// box-shadow: inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75),	
				background: '#F8F8F8'
			}
		}

	    const style = {
			
	    }

		return (
			<div {...slotAttr}>
				{nodes}
			</div>
		)
	}
}

export default Slot