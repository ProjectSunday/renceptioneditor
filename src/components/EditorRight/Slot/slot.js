import React from 'react'
// import { connect } from 'react-redux'

import './slot.less'

import Block from './Block/block'

const Slot = ({ slot }) => (
	<div className = "slot">
		{slot.blocks.map(block =>
			<Block key={block.id} block={block} />
		)}
	</div>
)


export default Slot

// export default connect(mapStateToProps, mapDispatchToProps)(Slot)
// export default connect()(Slot)

