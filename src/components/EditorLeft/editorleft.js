import React from 'react'
import { connect } from 'react-redux'

import MasterBlock from './masterblock/masterblock'

const mapStateToProps = (state, ownProps) => {
	return {
		masterBlocks: [ 500, 501, 502 ]   //hard coding
	}
}

@connect(mapStateToProps)
class EditorLeft extends React.Component {
	constructor(props) {
		super(props)

		this.render = this.render.bind(this)
	}

	render() {

		var { masterBlocks, activeTexture } = this.props

		var editorLeftAttr = {
			style: {
				border: '1px solid #ddd',
				boxShadow: '0px 0px 17px -3px rgba(0,0,0,0.41)',
				padding: '6px',
				margin: '15px 0 0 0',
				height: '600px',
				background: 'white'
			}
		}

		var headingAttr = {
			style: {
				fontSize: '13px',
				fontWeight: 'normal',
				margin: '6px'
			}
		}

		var nodes = masterBlocks.map((m, i) => <MasterBlock key={i} id={m} />)

		return (
			<div {...editorLeftAttr}>
				<h3 {...headingAttr}>Blocks</h3>
				{nodes}			
			</div>
		)
	}
}

export default EditorLeft