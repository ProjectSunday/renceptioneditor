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
			return state.blocks.find(b => b.id === id)
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
		this.addDropzone = this.addDropzone.bind(this)
		this.removeDropzone = this.removeDropzone.bind(this)
		this.dropZoneMounted = this.dropZoneMounted.bind(this)


		this.state = {

			children: props.blocks,

			dropZone: {
				index: undefined,
				instantaneous: false
			},

			tempBlocks: [],
			slotFoo: 'yosdsdf',

			test: false
		}

	}
	onBeginDrag(blockId) {
		// console.log('onBeginDrag ', blockId)

		// let newTempBlocks = this.state.tempBlocks.filter(t => t.id !== blockId)

		// this.setState({
		// 	tempBlocks: newTempBlocks
		// });

	}
	insertDropZone(blockId, positionBelow, instantaneous) {


		let children = Immutable.fromJS(this.state.children)

		let index = children.findIndex(c => c.get('id') == blockId)

		let childAbove = this.state.children[index - 1]

		if (childAbove && childAbove.type == 'dropzone') {
			if (childAbove.get('appearing')) {
				return
			} else {
				childAbove.set('appearing', true)
			}
		} else {
			children = children.insert(index, {
				type: 'dropzone',
				appearing: true
			})
		}



		console.log('children', children.toJS())
		this.setState({
			children: children.toJS()
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

	addDropzone() {
		this.setState({
			test: true
		})
	}

	removeDropzone() {

		this.setState({
			test: false
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
		const { children } = this.state

		let childrenNodes = []

		children.forEach((c, i) => {
			if (c.type && c.type == 'dropzone') {
				childrenNodes.push(<DropZone key={'dz' + i} dropZone={c} />)
			} else {
				childrenNodes.push(<Block key={i} block={c} insertDropZone={self.insertDropZone} onBeginDrag={self.onBeginDrag} />)
			}
		})

	    const style = {
	    	background: 'blue',
			boxShadow: 'inset 5px 5px 23px -6px rgba(0, 0, 0, 0.75)',
    		overflow: 'hidden'
	    }

		return (
			<div style={style}>
				<button onClick={self.addDropzone}>Add</button>
				<button onClick={self.removeDropzone}>Remove</button>
				<button onclick={self.test}>test</button>
				{childrenNodes}
			</div>
		)
	}
}
