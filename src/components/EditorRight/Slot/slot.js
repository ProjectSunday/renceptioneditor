import React from 'react'
import { connect } from 'react-redux'

import { addBlock } from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'

const Slot = ({ slot, blocks, onAddBlockClick }) => {

	console.count('slot')
	
	return (
		<div className = "slot">
			<button onClick={onAddBlockClick(slot.id)}>Add Block</button>
			{blocks.map(b =>
				<Block key={b.id} block={b} />
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

const mapDispatchToProps = (dispatch) => {
	return {
		onAddBlockClick: (slotId) => {
			dispatch(addBlock(slotId, { name: 'test' }))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Slot)

