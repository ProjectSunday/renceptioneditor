import React from 'react'

const Slot = ({ slot, onClick }) => (
	<div 
		style={{ background: '#eee' }} 
		onClick = { onClick }
		>
			<div>I am child 111 3333</div>
			slot: {JSON.stringify(slot)}
	</div>
)

export default Slot
