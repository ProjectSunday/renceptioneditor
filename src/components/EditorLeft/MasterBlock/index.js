import React from 'react'

import './imageblock.png'
import './textblock.png'
import './textplusimageblock.png'

import './imageblock-drag.png'
import './textblock-drag.png'
import './textplusimageblock-drag.png'

import './masterblock.less'

let MasterBlock = ({ masterBlock }) => {

	const onDragStart = (e) => {
		// this.isMasterBlock = true;
		// this.masterBlockInfo = masterInfo;

		let dragImage = e.currentTarget.querySelector('.dragimage');

		e.dataTransfer.setData("text/plain", "<strong>Body</strong>");
		e.dataTransfer.setDragImage(dragImage, 58, 29);
	}

	const dragImageStyles = {
		backgroundImage: 'url(' + masterBlock.dragImage + ')'
	}

	return (
		<div className="masterblock" onDragStart={onDragStart}>
			<img src={masterBlock.src} />
			<div className="dragimage" style={dragImageStyles} />
		</div>
	)
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


