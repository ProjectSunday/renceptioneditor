import React from 'react'
// import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

class Test extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)

	}
	componentWillUnmount() {
		console.log('Test componentWillUnmount')
	}

	render() {
		return (
			<div >I am Test {this.props.testFoo}</div>
		)
	}
}

const blockTarget = {
	hover(props, monitor, component) {
	    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
	    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

	    // Determine mouse position
	    const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top

	    // props.insertDropZone({
	    // 	blockId: props.block.id, 
	    // 	instantaneous: false,
	    // 	positionAbove: (hoverClientY < hoverMiddleY)

	    let positionBelow = hoverClientY > hoverMiddleY

		props.showDropZone(props.block.id, positionBelow, false)

	}
}

const blockSource = {
	beginDrag(props) {
		const { id } = props.block

		props.onBeginDrag(id)
		props.showDropZone(id, false, true)

		return {
			id: id
		}
	},
	isDragging(props, monitor) {
		// console.log('isDragging', props, monitor)
		return props.block.id === monitor.getItem().id
	}
}

@DropTarget('BLOCK', blockTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))
@DragSource('BLOCK', blockSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  	isDragging: monitor.isDragging()
}))
class Block extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)

		this.isTransitioning = false;

		this.state = {
			blah: 'block'
		}
	}

	shouldComponentUpdate() {
		console.log('Block shouldComponentUpdate')

		if (this.isTransitioning) {
			return false
		} else {
			return true
		}
	}

	componentDidMount() {
		var self = this;
		self.isTransitioning = true;

		setTimeout(function () {
			self.isTransitioning = false
		}, 5000)
	}

	componentWillUnmount() {
		console.log('Block componentWillUnmount')
	}

	render() {
		const { dispatch, block, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
	
		let style = {
			display: 'block',
			background: '#aaa',
			height: '50px',
			boxShadow: '0px 10px 17px -3px rgba(0,0,0,0.41)',
		}

		var blockContent;

		// if (isDragging) {
		// 	blockContent = (
		// 		<div> im being dragged </div>
		// 	)
		// } else {
		// 	blockContent = (
		// 		<div className="block" style={style}>
		// 			<span className="name">{block.name}{block.id}</span>
		// 		</div>
		// 	)
		// }

		var blockContent = (<div ref={d => this.d = d } ><Test testFoo={this.props.blockFoo} /></div>)

		return connectDragSource(connectDropTarget(
			<div>
				I am block {this.props.blockFoo}
			</div>
		))
	}

}

export default Block

