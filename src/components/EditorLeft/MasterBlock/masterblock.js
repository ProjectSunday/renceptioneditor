import React from 'react'

import './imageblock.png'
import './textblock.png'
import './textplusimageblock.png'

import './imageblock-drag.png'
import './textblock-drag.png'
import './textplusimageblock-drag.png'

class MasterBlock extends React.Component {
	constructor(props) {
		super(props)

		this.onDragStart = this.onDragStart.bind(this)
		this.onDragEnd = this.onDragEnd.bind(this)

		this.render = this.render.bind(this)
	}
	onDragStart(e) {
		// this.isMasterBlock = true;
		// this.masterBlockInfo = masterInfo;

		var dragImage = this.refs.dragImage

		e.dataTransfer.setData("text/plain", "<strong>Body</strong>");
		e.dataTransfer.setDragImage(dragImage, 58, 29);
	}
	onDragEnd(e) {
		red('masterBlock onDragEnd', e)
	}
	render() {
		red('masterBlock.render', this.props)

		const { dragImage, src, type } = this.props.masterBlock

		var masterBlockAttr = {
			onDragStart: this.onDragStart,
			onDragEnd: this.onDragEnd
		}

		var dragImageAttr = {
			ref: 'dragImage',
			style: {
				backgroundImage: `url(${dragImage})`,
				backgroundSize: '116px 58px',
				width: '116px',
				height: '58px',
				position: 'absolute',
				top: '50%',
				left: '50%',
				zIndex: '-1'
			}
		}

		return (
			<div {...masterBlockAttr}>
				<img src={src} />
				<div {...dragImageAttr} />
			</div>
		)
	}
}

export default MasterBlock

// module.exports = React.createClass({
// 	dragStart: function (e) {
// 		var masterInfo = {
// 			type: this.props.data.type
// 		};
// 		this.props.events.dragStart(e, masterInfo);
// 	},
// 	render: function () {

// 		var masterBlockInfo = this.props.data;
// 		var events = this.props.events;

// 		var content;

// 		return (
// 			<div
// 				className="master-block"
// 				draggable="true"
// 				onDragStart={this.dragStart}
// 				onDragEnd={events.dragEnd}
// 				>
// 				{content}



// 			</div>
// 		)
// 	}
// });


