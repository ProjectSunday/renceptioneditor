import React from 'react'
import { connect } from 'react-redux'

import { dragBlock } from '../../../../Actions/actions'

import './block.less'

const Block = ({ block, slotId, onDragStart }) => {

	// const onDragStart = () => {
	// 	console.log('context', this.context);
	// }

	console.count('block render');

	let styles = { display: 'block' }

	let blockInnards = <div className="innards" style={ { background: 'blue', height: 50 } }>NNNNNNNNNNNNNNNNNNNNNNNN</div>

	if (block.name == 'dragging') {


		blockInnards = <p className="innards" style={ { height: 75 } }>draggingdraggingdraggingdraggingdraggingdraggingdragging</p>
	}


	return (
		<div className="block" onDragStart={onDragStart} draggable="true" style={styles}>
			<span className="name">{block.name}{block.id}</span>
			{blockInnards}
		</div>
	)

}

// const mapStateToProps = (state) => {
// 	return {
// 		block: state.slot
// 	}
// }

			// <button style={{margin: 'auto', display: 'block'}} onClick={onClick}>clicky</button>


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDragStart: () => {
			// console.log('yo', ownProps);
			// dispatch(addBlock())

			dispatch(dragBlock(ownProps.slotId, ownProps.block.id))
		}
	}
}


// export default Block

export default connect(undefined, mapDispatchToProps)(Block)




/*

module.exports = React.createClass({
	dragStart: function (e) {
		var blockInfo = {
			id: this.props.data.id,
			parentSlotId: this.props.parentSlotId
		}
		this.props.events.dragStart(e, blockInfo);
	},
	dragOver: function (e) {
		var blockInfo = {
			id: this.props.data.id,
			index: this.props.index,
			parentSlotId: this.props.parentSlotId
		}
		this.props.events.dragOver(e, blockInfo);
	},
	render: function () {

		var block = this.props.block;
		var events = this.props.events;

		var classes = 'block ' + block.type;

		var styles = {
			height: '100px'
		}

		var content;
		if (block.type === 'image') {
			var s = { backgroundImage: 'url("' + block.imageSrc + '")' };
			content = (<div style={s}></div>);
		} else if (block.type === 'text') {
			content = (<p>{block.text}</p>);
		} else if (block.type === 'textplusimage') {
			content = (
				<div className="row">
					<div className="image col-xs-6">
						<img src={block.imageSrc} height="100"/>
					</div>
					<div className="text col-xs-6">
						<p>{block.text}</p>
					</div>
				</div>
			);
		}

		var nameStyles = {
			display: 'block',
			position: 'absolute',
			top: 0,
			left: 0,
			background: 'gray',
			color: 'white'
		}

		return (
			<div
				className={classes}
				draggable="true"
				style={styles}
				onDragStart={this.dragStart}
				onDragEnd={events.dragEnd}
				onDragOver={this.dragOver}
				>
					{content}
					<span style={nameStyles}>{block.name}{block.id}</span>
			</div>
		)
	}
});




*/