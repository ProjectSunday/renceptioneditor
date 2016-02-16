import React from 'react'
import { connect } from 'react-redux'

import { addBlock, moveBlock } from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'

const Slot = ({ slot, blocks, onClick, moveBlock }) => {

	return (
		<div className = "slot">
			<button onClick={onClick}>Add Block</button>
			{blocks.map((b, i) =>
				<Block key={i} index={i} block={b} moveBlock={moveBlock}/>
			)}
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		blocks: ownProps.slot.blocks.map(id => 
			state.blocks.find(b =>
				b.id === id
			)
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => { 
			dispatch(addBlock(ownProps.slot.id, { name: 'test' }))
		},
		moveBlock: (fromIndex, toIndex) => {
			console.log('index ', fromIndex, '    ', toIndex);
			dispatch(moveBlock(ownProps.slot.id, fromIndex, toIndex));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Slot)

