import React from 'react'
// import { connect } from 'react-redux'

// import { addBlock } from '../../actions'


let MasterBlock = ({ type }) => {

	return (
		<div className="masterblock">
			masterblock type: {type}
		</div>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		slots: state.slots
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onClick: (value) => {
// 			dispatch(addBlock('slotId', { name: 'blockname', bool: true }))
// 		}
// 	}
// }


// export default connect(mapStateToProps, mapDispatchToProps)(MasterBlock)
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
// 		var dragImage;
// 		if (masterBlockInfo.type === 'image') {
// 			dragImage = 'url("images/dragimages/image.png")';
// 			content = (<img id="testimage" src="images/imageblock.png" />);
// 		} else if (masterBlockInfo.type === 'text') {
// 			dragImage = 'url("images/dragimages/text.png")';
// 			content = (<img src="images/textblock.png" />);
// 		} else if (masterBlockInfo.type === 'textplusimage') {
// 			dragImage = 'url("images/dragimages/textplusimage.png")';
// 			content = (<img src="images/textplusimageblock.png" />);
// 		} else {
// 			console.error("Master Block: unable to determine block type")
// 		}

// 		var dragImageStyles = {
// 			background: dragImage,
// 		    backgroundSize: '116px 58px',
// 			width: '116',
// 			height: '58',
// 			position: 'absolute',
// 			top: '50%',
// 			left: '50%',
// 			zIndex: -1,
// 		};

// 		return (
// 			<div
// 				className="master-block"
// 				draggable="true"
// 				onDragStart={this.dragStart}
// 				onDragEnd={events.dragEnd}
// 				>
// 				{content}

// 				<div
// 					className="dragimage"
// 					style={dragImageStyles}
// 					>
// 				</div>

// 			</div>
// 		)
// 	}
// });


