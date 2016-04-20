import React from 'react'
import { connect } from 'react-redux'

import Slot from './slot/slot'

const mapStateToProps = (state) => {
	var slotIds = state.editor.slots.map(s => s.id)
	return {
		slotIds: slotIds
	}
}

@connect(mapStateToProps)
class EditorRight extends React.Component {
	constructor(props) {
		super(props)
		this.render = this.render.bind(this)
	}
	render() {
		const { slotIds } = this.props

		var styles = {
			border: '1px solid #ddd',
			boxShadow: '0px 0px 17px -3px rgba(0,0,0,0.41)',
			height: '600px',
			background: 'white',
			padding: '0 30px 0px 30px',
			margin: '30px 0 0 0',
			overflow: 'scroll'
		}

		return (
			<div style={styles}>
				<div className="row">
					<div className="col-xs-12">
						<Slot id={slotIds[0]} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<Slot id={slotIds[1]} />
					</div>
					<div className="col-xs-6">
						<Slot id={slotIds[2]} />
					</div>
			 	</div>
			 	<div className="row">
					<div className="col-xs-12">
						<Slot id={slotIds[3]} />
					</div>
	 			</div>
 			</div>
		)
	}
}

export default EditorRight

/*



*/