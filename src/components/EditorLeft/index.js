import React from 'react'
// import { connect } from 'react-redux'

// import { addBlock } from '../../actions'

import MasterBlock from './MasterBlock'

let EditorLeft = ({ slots, onClick }) => {

	console.log('slots ', slots);

	return (
		<div id="editorleft">
			<h3>Blocks</h3>
			<MasterBlock type = "text" />
			<MasterBlock type = "image" />
			<MasterBlock type = "textplusimage" />
		</div>
	)
}

export default EditorLeft