import React from 'react'
import { connect } from 'react-redux'

import './block.less'

const Block = ({ block }) => {

	const onDragStart = () => {

	}

	return (
		<div className="block" onDragStart={onDragStart}>
			<span className="name">block name and id</span>
		</div>
	)


}


export default Block

// export default connect(mapStateToProps, mapDispatchToProps)(Block)




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