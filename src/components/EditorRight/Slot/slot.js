import React from 'react'
import { connect } from 'react-redux'

import { addBlock } from '../../../Actions/actions'

import './slot.less'

import Block from './Block/block'

const Slot = ({ slot, blocks, onClick }) => {

	return (
		<div className = "slot">
			<button onClick={onClick}>Add Block</button>
			{blocks.map(b =>
				<Block key={b.id} block={b} slotId={slot.id}/>
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Slot)

