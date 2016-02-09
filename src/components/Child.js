import React from 'react'

export default ({ blah, onClick }) => (
	<div 
		style={{ background: '#eee' }} 
		onClick = { onClick }
		>
			<div>I am child</div>
			this is blah:  {blah}
	</div>
)
