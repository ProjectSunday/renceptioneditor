import React from 'react'
import { connect } from 'react-redux'

// import { addBlock } from '../../actions'

import MasterBlock from './MasterBlock'

let EditorLeft = ({ masterBlocks }) => {
	return (
		<div id="editorleft">
			<h3>Blocks</h3>
			{masterBlocks.map(b => 
				<MasterBlock key={b.type} block = {b} />
			)}			
		</div>
	)
}

const mapStateToProps = (store) => {
    return {
        masterBlocks: store.masterBlocks
    }
}

export default connect(mapStateToProps)(EditorLeft)