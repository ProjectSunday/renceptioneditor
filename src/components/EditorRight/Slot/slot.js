import React from 'react'
import { connect } from 'react-redux'

// import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'
import DropZone from './DropZone/dropzone'

const mapStateToProps = (state, ownProps) => {
	return {
		content: ownProps.slot.content.map(c => {
			if (c.type == 'block') {
				return { type: 'block', ...state.blocks.find(b => b.id === c.id) }
			} else {
				return c
			}
		})
	}
}


@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor() {
		super()
		this.render = this.render.bind(this)
		this.showDropZone = this.showDropZone.bind(this)


		this.state = {
			visibleDropZoneIndex: undefined
		}

		// //hmn
		// this.sampleBlocks = [
		// 	{ id: }
		// ]
	}

	// insertDropZone({ blockId, instantaneous = false, positionAbove = true } = {}) {
	// 	console.log('insertDropZone', blockId, instantaneous, positionAbove)
	// 	const { dispatch, slot, content } = this.props


	// 	//if index of block - 1 has dropzone, return

	// 	var index = content.findIndex(c => c.id == blockId && c.type == 'block')

	// 	if (content[index - 1] && content[index - 1].type == 'dropzone') { return }

	// 	// dispatch(Actions.insertDropZone(slot.id, index))

	// }

	showDropZone(blockId, positionBelow) {
		// const { dispatch, slot, content } = this.props




		//if index of block - 1 has dropzone, return

		// var index = content.findIndex(c => c.id == blockId && c.type == 'block')

		// if (content[index - 1] && content[index - 1].type == 'dropzone') { return }

		var index = this.props.content.findIndex(b => b.id == blockId)

		if (positionBelow) { index++ }

		if (this.state.visibleDropZoneIndex != index) {
			console.log('showdropzone', blockId, positionBelow)

			this.setState({
				visibleDropZoneIndex: index
			})

		}
				// dispatch(Actions.insertDropZone(slot.id, index))



	}

	// test() {
	// 	this.setState({
	// 		visibleDropZoneIndex: 0
	// 	})
	// }

	render() {
		var self = this;
		const { dispatch, slot, content } = this.props

		var contentNodes = []

		content.forEach(function (c, i) {
			contentNodes.push(<DropZone key={'d' + i} visible={self.state.visibleDropZoneIndex == i} />);
			contentNodes.push(<Block key={i} block={c} showDropZone={self.showDropZone} />)
		})

	    const style = {
	    	slot: {
		    	background: 'gray',
				boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
	    		overflow: 'hidden'
	    	},
	    	transition: {
	    		overflow: 'hidden'
	    	}
	    }


		return (
			<div style={style.slot}>
				<button onClick={self.test}>Add Block</button>
				{contentNodes}
			</div>
		)
	}
}
