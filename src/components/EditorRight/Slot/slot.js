import React from 'react'
import { connect } from 'react-redux'

// import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'
import DropZone from './DropZone/dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		blocks: ownProps.slot.blocks.map(id => {
			return state.blocks.find(b => b.id === id)
		})
	}
}

@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
		this.showDropZone = this.showDropZone.bind(this)
		this.onBeginDrag = this.onBeginDrag.bind(this)

		this.state = {
			dropZone: {
				index: undefined,
				instantaneous: false
			},

			tempBlocks: []
		}

	}
	onBeginDrag(blockId) {
		// console.log('onBeginDrag ', blockId)

		// let newTempBlocks = this.state.tempBlocks.filter(t => t.id !== blockId)

		// this.setState({
		// 	tempBlocks: newTempBlocks
		// });

	}
	showDropZone(blockId, positionBelow, instantaneous) {
		let index = this.props.blocks.findIndex(b => b.id == blockId)

		if (positionBelow) { index++ }

		if (this.state.dropZone.index != index) {
			// console.log('showdropzone', blockId, positionBelow)
			this.setState({
				dropZone: {
					index: index,
					instantaneous: instantaneous
				}
			})
		}
				// dispatch(Actions.insertDropZone(slot.id, index))
	}
	componentWillMount() {
		this.setState({
			tempBlocks: this.props.blocks
		})
	}
	render() {
		var self = this;
		const { dispatch, slot } = this.props
		const { dropZone, tempBlocks } = this.state



		var children = []

		tempBlocks.forEach(function (c, i) {
			children.push(<DropZone key={'d' + i} visible={dropZone.index == i} instantaneous={dropZone.instantaneous} />);
			children.push(<Block key={i} block={c} showDropZone={self.showDropZone} onBeginDrag={self.onBeginDrag} />)
		})

		children.push(<DropZone key='dropzone-last' visible={dropZone.index == tempBlocks.length} instantaneous={dropZone.instantaneous} />);

	    const style = {
	    	background: 'gray',
			boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
    		overflow: 'hidden'
	    }


		return (
			<div style={style}>
				<button>Add Block</button>
				{children}
			</div>
		)
	}
}
