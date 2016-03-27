import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

// import ReactTransitionGroup from 'react-addons-transition-group'

import * as Actions from '../../../Actions/actions'

// import './slot.less'

import Block from './Block/block'
import DropZone from './dropzone3'

const mapStateToProps = (state, ownProps) => {
	return {
		blocks: ownProps.slot.blocks.map(id => {
			return Object.assign(state.blocks.find(b => b.id === id), { drag: false })
		})
	}
}

@connect(mapStateToProps)
export default class Slot extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.insertDropZone = this.insertDropZone.bind(this)
		this.onBeginDrag = this.onBeginDrag.bind(this)


		this.test = this.test.bind(this)
		this.test2 = this.test2.bind(this)
		this.addClicked = this.addClicked.bind(this)
		this.removeClicked = this.removeClicked.bind(this)
		this.dropZoneMounted = this.dropZoneMounted.bind(this)
		this.removeDropZone = this.removeDropZone.bind(this)

		this.visibleChildren = props.slot.blocks

		this.state = {

			blocks: props.blocks,

			// dropZone: {
			// 	index: undefined,
			// 	instantaneous: false
			// },

			tempBlocks: [],
			slotFoo: 'yosdsdf',

			test: false,

			dropZones: []

		}

	}
	onBeginDrag(blockId) {
		/* when a block is dragged, it should disappear, a dropzone should take it's place  */




		// console.log('onBeginDrag ', blockId)

		// let newTempBlocks = this.state.tempBlocks.filter(t => t.id !== blockId)

		// this.setState({
		// 	tempBlocks: newTempBlocks
		// });




		//find the block being drag

		//set dragging true




	}
	insertDropZone(displayIndex, positionBelow, instantaneous) {
		// console.log('insertDropZone', blockId, positionBelow, instantaneous)


		return;


		var existingDropZone = this.state.dropZones.find(d => d.index == index)
		if (existingDropZone && existingDropZone.appearing) { return }

		let dropZones = this.state.dropZones.map(d => Object.assign(d, { appearing: false}))
		let currentIndex = dropZones.findIndex(d => d.index == index)

		if (currentIndex !== -1) {
			dropZones[currentIndex].appearing = true
		} else {
			dropZones.push({
				index: index,
				appearing: true
			})
		}









		// let blocks = this.state.blocks.slice(0)
		// blocks.upsig(b => b.id == blockId, { isDragging: true })


		this.setState({
			// blocks: blocks,
			dropZones: dropZones
		})

				// dispatch(Actions.insertDropZone(slot.id, index))
	}
	componentWillMount() {
		this.setState({
			tempBlocks: [ this.props.blocks[0] ]
		})
	}
	test() {
		this.setState({
			test: [<DropZone key="blah" expanding={true} />]
		})
	}

	addClicked() {
		this.setState({
			dropZones: [{ blockId: 101, appearing: true }]
		})
	}

	removeClicked() {

		this.setState({
			dropZones: [{ blockId: 101, appearing: false }]
		})

	}

	removeDropZone(dropZone) {
		// let dropZones = Immutable.fromJS(this.state.dropZones).removeIn([ ''])

		this.setState({
			dropZones: this.state.dropZones.filter(d => d.index != dropZone.index)
		})
	}

	dropZoneMounted() {
		this.setState({
			test: true
		})
	}

	test2() {

	}

	render() {
		var self = this;
		const { dispatch, slot } = this.props
		const { children, dropZones, blocks } = this.state

		let childrenNodes = []

		let index = 0
		blocks.forEach((b, i) => {

			let dropZoneIndex = dropZones.findIndex(d => d.index == index)
			if (dropZoneIndex !== -1 ) {
				childrenNodes.push(<DropZone key={'dz' + i} index={index++} dropZone={dropZones[dropZoneIndex]} removeDropZone={self.removeDropZone} />)
			}

			// childrenNodes.push(<Block key={i} block={b} index={index++} insertDropZone={self.insertDropZone} onBeginDrag={self.onBeginDrag} />)
			childrenNodes.push(<Block key={i} block={b} index={index++} onBeginDrag={self.onBeginDrag} />)
		})

		// dropZones.forEach((d, i)=> {
		// 	let associatedBlockIndex = blocks.findIndex(b => b.id === d.blockId)
		// 	console.log('associatedBlockIndex', associatedBlockIndex)
		// 	if (d.positionBelow) {
		// 		associatedBlockIndex++
		// 	}
		// })

	    const style = {
	    	background: '#eee',
			boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
    		overflow: 'hidden'
	    }

		return (
			<div style={style}>
				<button onClick={self.addClicked}>Add</button>
				<button onClick={self.removeClicked}>Remove</button>
				<button onclick={self.test}>test</button>
				{childrenNodes}
			</div>
		)
	}
}
