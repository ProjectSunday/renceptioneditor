import React from 'react'
import { connect } from 'react-redux'


import './editorleft.less'

import MasterBlock from './masterblock/masterblock'

let EditorLeft = ({ masterBlocks }) => {
	return (
		<div id="editorleft">
			<h3>Blocks</h3>
			{masterBlocks.map(b => 
				<MasterBlock key={b.type} masterBlock = {b} />
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